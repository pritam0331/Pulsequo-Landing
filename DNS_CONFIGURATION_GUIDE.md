# PulseQuo DNS Configuration Guide (GoDaddy & Route 53)

This guide provides the exact DNS records required to connect your registered domain (`pulsequo.com`) to the AWS infrastructure.

---

## 1. Domain Architecture

| Hostname | Target Service | Purpose |
| :--- | :--- | :--- |
| `pulsequo.com` | AWS CloudFront (Apex) | Root Marketing Domain |
| `www.pulsequo.com` | AWS CloudFront | Primary Marketing Website Domain |
| `app.pulsequo.com` | PulseQuo Dashboard / App Server | Customer & Super Admin Application |
| `api.pulsequo.com` | PulseQuo Backend API Cluster | REST API & Webhook Ingestion Engine |

---

## 2. Option A: Route 53 as Primary DNS Host (Recommended)

When using AWS Route 53 for DNS hosting, you delegate nameservers from GoDaddy to Route 53:

### Step 1: Create a Public Hosted Zone in Route 53
1. Domain name: `pulsequo.com`
2. Type: **Public Hosted Zone**
3. Note the 4 assigned AWS Nameservers (e.g., `ns-xxx.awsdns-xx.org`, `ns-xxx.awsdns-xx.co.uk`, etc.).

### Step 2: Update Nameservers in GoDaddy
1. Log in to **GoDaddy** > **Domain Portfolio** > `pulsequo.com`.
2. Under **DNS** > **Nameservers**, select **Change Nameservers**.
3. Choose **I'll use my own nameservers** and paste the 4 Route 53 nameservers.
4. Save and allow 15–60 minutes for worldwide delegation propagation.

### Step 3: Configure Route 53 Records

| Record Name | Type | Value / Routing Target | Evaluate Target Health |
| :--- | :--- | :--- | :--- |
| `pulsequo.com` (Apex) | `A` (Alias) | Alias to CloudFront distribution (`dXXXXXXXXXX.cloudfront.net`) | Yes |
| `pulsequo.com` (Apex) | `AAAA` (Alias) | Alias to CloudFront distribution (IPv6) | Yes |
| `www.pulsequo.com` | `A` (Alias) | Alias to CloudFront distribution (`dXXXXXXXXXX.cloudfront.net`) | Yes |
| `www.pulsequo.com` | `AAAA` (Alias) | Alias to CloudFront distribution (IPv6) | Yes |
| `app.pulsequo.com` | `A` (or CNAME) | Application Load Balancer (ALB) or App Host IP | Yes |
| `api.pulsequo.com` | `A` (or CNAME) | API Gateway / ALB / EC2 Elastic IP | Yes |
| `_xxxxxxxx.pulsequo.com` | `CNAME` | ACM Certificate DNS validation string from AWS | No |

---

## 3. Option B: Retaining GoDaddy as Primary DNS Host

If you prefer to manage DNS records directly inside GoDaddy:

### GoDaddy DNS Zone Table

| Type | Name | Value / Destination | TTL |
| :--- | :--- | :--- | :--- |
| `CNAME` | `www` | `<your-id>.cloudfront.net.` | 1 Hour |
| `CNAME` | `app` | `<app-alb-or-host>.pulsequo.com.` | 1/2 Hour |
| `CNAME` | `api` | `<api-alb-or-host>.pulsequo.com.` | 1/2 Hour |
| `CNAME` | `_acm-validation` | `_xxxx.xxxx.acm-validations.aws.` | 1 Hour |
| **Forwarding** | `pulsequo.com` (Apex) | Forward to `https://www.pulsequo.com` (301 Permanent) | N/A |

> [!NOTE]
> Standard DNS specifications do not permit `CNAME` records at the root apex (`@`). If retaining GoDaddy DNS, use GoDaddy's built-in **Domain Forwarding** to redirect `https://pulsequo.com` to `https://www.pulsequo.com`, or delegate DNS to Route 53 to utilize native Route 53 Apex Aliasing.

---

## 4. Verification Commands

Test your DNS propagation via command line:

```bash
# Check www marketing domain resolution
nslookup www.pulsequo.com

# Check apex domain
nslookup pulsequo.com

# Check SSL certificate handshake
curl -Iv https://www.pulsequo.com

# Check HTTP to HTTPS redirect
curl -I http://www.pulsequo.com
```
