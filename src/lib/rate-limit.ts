type Bucket = {
  count: number;
  resetAt: number;
};

const store = new Map<string, Bucket>();

const MAX_KEYS = 10_000;

function pruneExpired(now: number) {
  if (store.size < MAX_KEYS) return;
  for (const [key, bucket] of store) {
    if (bucket.resetAt <= now) store.delete(key);
  }
}

export function consumeRateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  pruneExpired(now);

  const bucket = store.get(key);

  if (!bucket || bucket.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= max) return false;

  bucket.count += 1;
  return true;
}
