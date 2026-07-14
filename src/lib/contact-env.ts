import { loadEnv } from "./load-env";
import { BRAND } from "./brand";

export function getContactEnv() {
  loadEnv();

  return {
    apiKey: process.env.RESEND_API_KEY?.trim(),
    to: process.env.CONTACT_EMAIL?.trim(),
    from: process.env.FROM_EMAIL?.trim() || `${BRAND.fullName} <onboarding@resend.dev>`,
  };
}
