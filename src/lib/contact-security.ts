const SUSPICIOUS_PATTERN =
  /<script|javascript:|on\w+\s*=|<iframe|<object|<embed|data:text\/html|&#x?0*(6[0-9]|7[0-9])/i;

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function sanitizeHeaderValue(value: string, maxLength = 200) {
  return value.replace(/[\r\n\u0000]/g, "").trim().slice(0, maxLength);
}

export function assertSafeText(value: string) {
  if (SUSPICIOUS_PATTERN.test(value)) {
    throw new Error("Conteúdo inválido detectado. Remova tags ou scripts e tente novamente.");
  }
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}
