import { createMiddleware } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { consumeRateLimit } from "./rate-limit";

const IP_LIMIT = 3;
const IP_WINDOW_MS = 15 * 60 * 1000;

export const contactRateLimitMiddleware = createMiddleware().server(async ({ next }) => {
  const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
  const allowed = consumeRateLimit(`contact:ip:${ip}`, IP_LIMIT, IP_WINDOW_MS);

  if (!allowed) {
    throw new Error(
      "Muitas tentativas de envio. Aguarde 15 minutos antes de tentar novamente.",
    );
  }

  return next();
});

export function assertEmailRateLimit(email: string) {
  const allowed = consumeRateLimit(
    `contact:email:${email}`,
    1,
    5 * 60 * 1000,
  );

  if (!allowed) {
    throw new Error(
      "Este e-mail já enviou uma mensagem recentemente. Aguarde alguns minutos.",
    );
  }
}
