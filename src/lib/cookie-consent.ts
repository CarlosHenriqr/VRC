const STORAGE_KEY = "vrc_cookie_consent";

export type CookieConsent = "accepted" | "rejected";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setCookieConsent(value: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === "accepted";
}

export async function applyAnalyticsConsent() {
  if (!hasAnalyticsConsent()) return;
  const { initFirebaseAnalytics } = await import("./firebase");
  await initFirebaseAnalytics();
}
