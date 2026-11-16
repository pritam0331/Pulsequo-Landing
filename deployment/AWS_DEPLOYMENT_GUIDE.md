# PulseQuo AWS S3 & CloudFront Production Deployment Guide

This guide details the exact step-by-step procedures to deploy the PulseQuo marketing website to **AWS S3** fronted by **AWS CloudFront** with **AWS Certificate Manager (ACM)** SSL/TLS certificates and **Route 53** / **GoDaddy** DNS.

---

## 1. Architecture Overview

```
                      ┌──────────────────────────────────────────────┐
                      │              Route 53 / GoDaddy              │
                      │  pulsequo.com / www.pulsequo.com (Alias)     │
                      └──────────────────────┬───────────────────────┘
                                             │
                                             ▼
                      ┌──────────────────────────────────────────────┐
                      │          AWS CloudFront Distribution         │
                      │   - Custom SSL (ACM us-east-1)               │
                      │   - Origin Access Control (OAC)              │
                      │   - SPA Custom Error Response (403/404 -> /) │
                      │   - Security Headers Policy                  │
                      └──────────────────────┬───────────────────────┘
                                             │
                                             ▼
                      ┌──────────────────────────────────────────────┐
                      │             Private S3 Bucket                │
                      │        (pulsequo-marketing-website)          │
                      │  - Block All Public Access = ENABLED         │
                      │  - Encrypted at rest (SSE-S3)                │
                      │  - Static assets (dist/*)                    │
                      └──────────────────────────────────────────────┘
```

---

## 2. Prerequisites

1. AWS CLI installed and configured (`aws configure`).
2. S3 Bucket created: `pulsequo-marketing-website`.
3. ACM Public SSL Certificate in `us-east-1` (CloudFront requires us-east-1 for certificates) covering:
   - `pulsequo.com`
   - `*.pulsequo.com` (or `www.pulsequo.com`, `app.pulsequo.com`, `api.pulsequo.com`)

---

## 3. Step-by-Step Setup

### Step 1: Create the Private S3 Bucket

1. In the AWS Management Console, open **Amazon S3** > **Create bucket**.
2. **Bucket name**: `pulsequo-marketing-website` (or chosen unique name).
3. **Region**: Preferred region (e.g., `ap-south-1` or `us-east-1`).
4. **Block Public Access settings for this bucket**:
   - Check **Block all public access** (Keep ENABLED. S3 will remain strictly private; CloudFront will access via OAC).
5. **Bucket Versioning**: Enabled (Recommended).
6. **Default encryption**: Server-side encryption with Amazon S3 managed keys (SSE-S3).
7. Click **Create bucket**.

---

### Step 2: Request SSL Certificate in AWS Certificate Manager (ACM)

> [!IMPORTANT]
> CloudFront requires ACM certificates to be issued in the **US East (N. Virginia) `us-east-1`** region regardless of where your S3 bucket resides.

1. Switch your AWS Console region to `us-east-1`.
2. Go to **AWS Certificate Manager** > **Request certificate**.
3. Choose **Request a public certificate**.
4. Fully qualified domain names:
   - `pulsequo.com`
   - `*.pulsequo.com`
5. Validation method: **DNS validation** (Recommended).
6. Copy the generated CNAME Name and Value and add them to your DNS provider (GoDaddy or Route 53) to complete validation.

---

### Step 3: Create CloudFront Distribution with Origin Access Control (OAC)

1. Open **Amazon CloudFront** > **Create distribution**.
2. **Origin domain**: Select `pulsequo-marketing-website.s3.amazonaws.com`.
3. **Origin access**:
   - Select **Origin access control settings (recommended)**.
   - Click **Create control setting** (Name: `pulsequo-s3-oac`, Signing behavior: Always sign requests).
4. **Default cache behavior**:
   - **Viewer protocol policy**: Redirect HTTP to HTTPS.
   - **Allowed HTTP methods**: `GET, HEAD, OPTIONS`.
   - **Cache policy**: `Managed-CachingOptimized`.
5. **Function associations / Response headers**:
   - Attach `Managed-SecurityHeadersPolicy` (enforces HSTS, X-Content-Type-Options, Frame Options).
6. **Custom SSL certificate**:
   - Select the ACM certificate for `*.pulsequo.com` created in Step 2.
7. **Alternate domain names (CNAMEs)**:
   - `www.pulsequo.com`
   - `pulsequo.com`
8. **Default root object**: `index.html`.
9. Click **Create distribution**.

---

### Step 4: Configure React Router SPA Refresh (Custom Error Responses)

Because PulseQuo is a Single Page Application (SPA), direct browser navigation or refreshing a deep route (e.g. `https://www.pulsequo.com/products/communication-cloud` or `https://www.pulsequo.com/pricing`) requests an S3 key that does not exist as an individual file.

1. In your CloudFront Distribution, go to the **Error pages** tab.
2. Click **Create custom error response**:
   - **HTTP error code**: `403: Forbidden`
   - **Customize error response**: Yes
   - **Response page path**: `/index.html`
   - **HTTP response code**: `200: OK`
   - **Error caching minimum TTL**: `0` (or `10` seconds)
3. Create a second custom error response:
   - **HTTP error code**: `404: Not Found`
   - **Customize error response**: Yes
   - **Response page path**: `/index.html`
   - **HTTP response code**: `200: OK`
   - **Error caching minimum TTL**: `0`

---

### Step 5: Update S3 Bucket Policy for CloudFront OAC

Under your S3 bucket's **Permissions** > **Bucket policy**, paste the following policy, replacing `<BUCKET_NAME>`, `<ACCOUNT_ID>`, and `<DISTRIBUTION_ID>`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<BUCKET_NAME>/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::<ACCOUNT_ID>:distribution/<DISTRIBUTION_ID>"
        }
      }
    }
  ]
}
```

---

## 4. Build and Deployment Pipeline

### Local or CI/CD Build Command

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Set production environment
cp .env.production.example .env.production

# 3. Execute production build
npm run build
```

The output will be compiled into the `dist/` directory.

### S3 Upload & Cache Invalidation Script

Run the following commands using the AWS CLI:

```bash
# Upload assets with long-term immutable caching
aws s3 sync dist/ s3://pulsequo-marketing-website/ \
  --delete \
  --exclude "index.html" \
  --exclude "sitemap.xml" \
  --exclude "robots.txt" \
  --cache-control "public, max-age=31536000, immutable"

# Upload HTML and SEO metadata files with no-cache to guarantee instant updates
aws s3 sync dist/ s3://pulsequo-marketing-website/ \
  --exclude "*" \
  --include "index.html" \
  --include "sitemap.xml" \
  --include "robots.txt" \
  --cache-control "public, max-age=0, must-revalidate"

# Invalidate CloudFront edge cache
aws cloudfront create-invalidation \
  --distribution-id <YOUR_CLOUDFRONT_DISTRIBUTION_ID> \
  --paths "/*"
```

---

## 5. Security & Verification Checklist

- [x] S3 Public Access is 100% blocked; S3 bucket cannot be accessed via direct S3 URL.
- [x] CloudFront enforces Origin Access Control (OAC).
- [x] HTTPS redirection is active (HTTP 301 to HTTPS).
- [x] Direct page refresh on `/products/sales-crm`, `/pricing`, `/solutions` works without 404 errors.
- [x] Open Graph, sitemap.xml, and robots.txt are accessible from root.
