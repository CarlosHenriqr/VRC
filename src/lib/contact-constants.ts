export const CONTACT_SERVICES = [
  "Desenvolvimento Web",
  "Aplicativo Mobile",
  "Automação",
  "Inteligência Artificial",
  "Consultoria de Arquitetura",
  "ERP / CRM",
  "Integração de Sistemas",
  "Outros",
] as const;

export const CONTACT_SOURCES = [
  "Google",
  "LinkedIn",
  "Instagram",
  "Indicação",
  "GitHub",
  "Evento",
  "Outros",
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];
export type ContactSource = (typeof CONTACT_SOURCES)[number];
