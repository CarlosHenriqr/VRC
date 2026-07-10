/** Mantém só dígitos, no máximo 11 (DDD + número BR). */
export function phoneDigits(value: string): string {
  return value.replace(/\D/g, "").slice(0, 11);
}

/**
 * Máscara de telefone brasileiro:
 * - fixo: (11) 3456-7890
 * - celular: (11) 91234-5678
 */
export function formatPhoneBR(value: string): string {
  const digits = phoneDigits(value);

  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function isValidPhoneBR(value: string): boolean {
  const digits = phoneDigits(value);
  return digits.length === 10 || digits.length === 11;
}
