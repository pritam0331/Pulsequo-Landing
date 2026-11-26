export function indexBy<T, K>(items: readonly T[], getKey: (item: T) => K): Map<K, T> {
  const map = new Map<K, T>()
  for (let i = 0; i < items.length; i++) {
    map.set(getKey(items[i]), items[i])
  }
  return map
}

export function groupBy<T, K>(items: readonly T[], getKey: (item: T) => K): Map<K, T[]> {
  const buckets = new Map<K, T[]>()
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const key = getKey(item)
    let bucket = buckets.get(key)
    if (!bucket) {
      bucket = []
      buckets.set(key, bucket)
    }
    bucket.push(item)
  }
  return buckets
}

export class LRUCache<K, V> {
  private readonly capacity: number
  private readonly store = new Map<K, V>()

  constructor(capacity = 64) {
    this.capacity = Math.max(1, capacity)
  }

  get(key: K): V | undefined {
    const value = this.store.get(key)
    if (value === undefined) return undefined
    this.store.delete(key)
    this.store.set(key, value)
    return value
  }

  set(key: K, value: V): void {
    if (this.store.has(key)) {
      this.store.delete(key)
    } else if (this.store.size >= this.capacity) {
      const oldestKey = this.store.keys().next().value
      if (oldestKey !== undefined) {
        this.store.delete(oldestKey)
      }
    }
    this.store.set(key, value)
  }
}

interface IndexedEntry<T> {
  item: T
  haystack: string
}

export class IndexedSearch<T, C extends string = string> {
  private readonly allEntries: IndexedEntry<T>[]
  private readonly allItems: readonly T[]
  private readonly categoryBuckets: Map<C, IndexedEntry<T>[]>
  private readonly categoryItems: Map<C, T[]>
  private readonly cache: LRUCache<string, readonly T[]>

  constructor(
    items: readonly T[],
    getSearchText: (item: T) => string,
    getCategory?: (item: T) => C,
    cacheCapacity = 64
  ) {
    this.allItems = items
    this.allEntries = new Array(items.length)
    this.categoryBuckets = new Map()
    this.categoryItems = new Map()
    this.cache = new LRUCache(cacheCapacity)

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const entry: IndexedEntry<T> = {
        item,
        haystack: getSearchText(item).toLowerCase(),
      }
      this.allEntries[i] = entry

      if (getCategory) {
        const cat = getCategory(item)
        let entryBucket = this.categoryBuckets.get(cat)
        let itemBucket = this.categoryItems.get(cat)
        if (!entryBucket || !itemBucket) {
          entryBucket = []
          itemBucket = []
          this.categoryBuckets.set(cat, entryBucket)
          this.categoryItems.set(cat, itemBucket)
        }
        entryBucket.push(entry)
        itemBucket.push(item)
      }
    }
  }

  query(searchTerm: string, category?: C | 'All'): readonly T[] {
    const normalized = searchTerm.trim().toLowerCase()
    const isAll = !category || category === 'All'

    if (!normalized) {
      if (isAll) return this.allItems
      return this.categoryItems.get(category as C) ?? []
    }

    const cacheKey = `${isAll ? '*' : category}::${normalized}`
    const cached = this.cache.get(cacheKey)
    if (cached) return cached

    const source = isAll ? this.allEntries : (this.categoryBuckets.get(category as C) ?? [])
    const results: T[] = []
    for (let i = 0; i < source.length; i++) {
      if (source[i].haystack.includes(normalized)) {
        results.push(source[i].item)
      }
    }

    this.cache.set(cacheKey, results)
    return results
  }
}
