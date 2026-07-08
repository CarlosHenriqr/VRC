import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { applyAnalyticsConsent, hasAnalyticsConsent } from "@/lib/cookie-consent";
import { initFirebaseAnalytics } from "@/lib/firebase";

export function FirebaseAnalytics() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (hasAnalyticsConsent()) {
      void applyAnalyticsConsent();
    }

    function onConsentChange(event: Event) {
      const detail = (event as CustomEvent<"accepted" | "rejected">).detail;
      if (detail === "accepted") {
        void applyAnalyticsConsent();
      }
    }

    window.addEventListener("cookie-consent-change", onConsentChange);
    return () => window.removeEventListener("cookie-consent-change", onConsentChange);
  }, []);

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;

    void (async () => {
      const analytics = await initFirebaseAnalytics();
      if (!analytics) return;

      const { logEvent } = await import("firebase/analytics");
      logEvent(analytics, "page_view", {
        page_path: pathname,
        page_title: document.title,
      });
    })();
  }, [pathname]);

  return null;
}
