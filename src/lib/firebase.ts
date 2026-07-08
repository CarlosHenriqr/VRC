import type { FirebaseApp } from "firebase/app";
import type { Analytics } from "firebase/analytics";
import { hasAnalyticsConsent } from "./cookie-consent";

export type FirebaseWebConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
};

let appInstance: FirebaseApp | null = null;
let analyticsInstance: Analytics | null = null;
let initPromise: Promise<Analytics | null> | null = null;

export function getFirebaseConfig(): FirebaseWebConfig | null {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
  const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
  const appId = import.meta.env.VITE_FIREBASE_APP_ID;
  const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

  if (!apiKey || !authDomain || !projectId || !storageBucket || !messagingSenderId || !appId) {
    return null;
  }

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId: measurementId || undefined,
  };
}

export function getFirebaseAnalytics() {
  return analyticsInstance;
}

export async function initFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  if (!hasAnalyticsConsent()) return null;
  if (analyticsInstance) return analyticsInstance;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const config = getFirebaseConfig();
    if (!config) {
      console.warn("Firebase Analytics: variáveis VITE_FIREBASE_* não configuradas.");
      return null;
    }

    const { initializeApp, getApps } = await import("firebase/app");
    const { initializeAnalytics, isSupported, logEvent } = await import("firebase/analytics");

    if (!(await isSupported())) return null;

    appInstance = getApps()[0] ?? initializeApp(config);
    analyticsInstance = initializeAnalytics(
      appInstance,
      import.meta.env.DEV ? { config: { debug_mode: true } } : undefined,
    );

    if (import.meta.env.DEV) {
      console.info(
        "[Firebase Analytics] debug_mode ativo — aceite os cookies e abra Analytics > DebugView no console Firebase.",
      );
      logEvent(analyticsInstance, "debug_test", { source: "dev_init" });
    }

    return analyticsInstance;
  })();

  try {
    return await initPromise;
  } finally {
    initPromise = null;
  }
}
