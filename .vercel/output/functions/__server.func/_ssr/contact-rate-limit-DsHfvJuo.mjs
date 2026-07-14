import { t as createMiddleware } from "./createStart-Dt05N14y.mjs";
import { f as getRequestIP$1 } from "./esm-Cetuimvl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-rate-limit-DsHfvJuo.js
var CONTACT_SERVICES = [
	"Desenvolvimento Web",
	"Aplicativo Mobile",
	"Automação",
	"Inteligência Artificial",
	"Consultoria de Arquitetura",
	"ERP / CRM",
	"Integração de Sistemas",
	"Outros"
];
var CONTACT_SOURCES = [
	"Google",
	"LinkedIn",
	"Instagram",
	"Indicação",
	"GitHub",
	"Evento",
	"Outros"
];
var store = /* @__PURE__ */ new Map();
var MAX_KEYS = 1e4;
function pruneExpired(now) {
	if (store.size < MAX_KEYS) return;
	for (const [key, bucket] of store) if (bucket.resetAt <= now) store.delete(key);
}
function consumeRateLimit(key, max, windowMs) {
	const now = Date.now();
	pruneExpired(now);
	const bucket = store.get(key);
	if (!bucket || bucket.resetAt <= now) {
		store.set(key, {
			count: 1,
			resetAt: now + windowMs
		});
		return true;
	}
	if (bucket.count >= max) return false;
	bucket.count += 1;
	return true;
}
var IP_LIMIT = 3;
var IP_WINDOW_MS = 900 * 1e3;
var contactRateLimitMiddleware = createMiddleware().server(async ({ next }) => {
	if (!consumeRateLimit(`contact:ip:${getRequestIP$1({ xForwardedFor: true }) ?? "unknown"}`, IP_LIMIT, IP_WINDOW_MS)) throw new Error("Muitas tentativas de envio. Aguarde 15 minutos antes de tentar novamente.");
	return next();
});
function assertEmailRateLimit(email) {
	if (!consumeRateLimit(`contact:email:${email}`, 1, 300 * 1e3)) throw new Error("Este e-mail já enviou uma mensagem recentemente. Aguarde alguns minutos.");
}
//#endregion
export { contactRateLimitMiddleware as i, CONTACT_SOURCES as n, assertEmailRateLimit as r, CONTACT_SERVICES as t };
