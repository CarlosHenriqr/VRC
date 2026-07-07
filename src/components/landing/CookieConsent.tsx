import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  function respond(choice: CookieConsent) {
    setCookieConsent(choice);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-hairline bg-background/95 p-5 shadow-lg backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6">
            <div className="min-w-0">
              <p id="cookie-consent-title" className="kicker">
                Cookies
              </p>
              <p
                id="cookie-consent-desc"
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
              >
                Utilizamos cookies essenciais para o funcionamento do site. Com sua autorização,
                também podemos usar cookies para análise e melhoria da experiência. Saiba mais em
                nossa{" "}
                <Link
                  to="/politica-de-privacidade"
                  className="text-sea underline-offset-4 hover:underline"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => respond("rejected")}
                className="pill-outline px-5 py-2.5 text-sm"
              >
                Recusar opcionais
              </button>
              <button
                type="button"
                onClick={() => respond("accepted")}
                className="pill px-5 py-2.5 text-sm"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
