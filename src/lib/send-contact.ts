import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getContactEnv } from "./contact-env";
import { CONTACT_SERVICES, CONTACT_SOURCES } from "./contact-constants";
import { BRAND } from "./brand";
import {
  assertSafeText,
  escapeHtml,
  normalizeEmail,
  sanitizeHeaderValue,
} from "./contact-security";
import {
  assertEmailRateLimit,
  contactRateLimitMiddleware,
} from "./contact-rate-limit";

export const contactSchema = z.object({
  services: z
    .array(z.enum(CONTACT_SERVICES))
    .min(1, "Selecione ao menos um serviço")
    .max(CONTACT_SERVICES.length),
  name: z
    .string()
    .trim()
    .min(3, "Nome deve ter ao menos 3 caracteres")
    .max(120, "Nome muito longo")
    .regex(/^[\p{L}\p{M}\s'.-]+$/u, "Nome contém caracteres inválidos"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(254, "E-mail muito longo"),
  phone: z
    .string()
    .trim()
    .min(1, "Informe o telefone")
    .refine(
      (value) => {
        const digits = value.replace(/\D/g, "");
        return digits.length === 10 || digits.length === 11;
      },
      "Informe um telefone válido com DDD",
    )
    .refine(
      (value) => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value),
      "Use o formato (11) 99999-9999",
    ),
  source: z.enum(CONTACT_SOURCES, {
    required_error: "Informe como nos encontrou",
    invalid_type_error: "Informe como nos encontrou",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Mensagem deve ter ao menos 20 caracteres")
    .max(5000, "Mensagem muito longa"),
  website: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

function validatePayload(data: ContactInput) {
  if (data.website?.trim()) {
    throw new Error("Não foi possível enviar a mensagem. Tente novamente.");
  }

  assertSafeText(data.name);
  assertSafeText(data.email);
  assertSafeText(data.phone);
  assertSafeText(data.source);
  assertSafeText(data.message);
  for (const service of data.services) {
    assertSafeText(service);
  }
}

export const sendContact = createServerFn({ method: "POST" })
  .middleware([contactRateLimitMiddleware])
  .validator(contactSchema)
  .handler(async ({ data }) => {
    validatePayload(data);

    const email = normalizeEmail(data.email);
    assertEmailRateLimit(email);

    const { apiKey, to, from } = getContactEnv();

    if (!apiKey || !to) {
      console.error("Resend: RESEND_API_KEY ou CONTACT_EMAIL não configurados");
      throw new Error(
        "Configuração de e-mail ausente. Adicione RESEND_API_KEY e CONTACT_EMAIL no arquivo .env.",
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const safe = {
      name: escapeHtml(data.name),
      email: escapeHtml(email),
      phone: escapeHtml(data.phone),
      source: escapeHtml(data.source),
      message: escapeHtml(data.message),
      servicesText: escapeHtml(data.services.join(", ")),
    };

    const subjectName = sanitizeHeaderValue(data.name);
    const subjectServices = sanitizeHeaderValue(data.services.join(", "), 300);

    const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="font-family:sans-serif;color:#030F1C;margin:0;padding:0;background:#f7f7f8">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f8;padding:32px 16px">
    <tr><td>
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;margin:0 auto">
        <tr>
          <td style="background:#011829;padding:28px 32px">
            <p style="margin:0;font-size:22px;font-weight:700;color:#fff;letter-spacing:-0.04em">${escapeHtml(BRAND.fullName)}</p>
            <p style="margin:6px 0 0;font-size:12px;color:#c0e6ff;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em">Novo contato via site</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:20px;border-bottom:1px solid #e5e7eb">
                  <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Serviços de interesse</p>
                  <p style="margin:0;font-size:15px;font-weight:600">${safe.servicesText}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 0;border-bottom:1px solid #e5e7eb">
                  <table width="100%">
                    <tr>
                      <td width="50%" style="padding-right:16px">
                        <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Nome</p>
                        <p style="margin:0;font-size:15px">${safe.name}</p>
                      </td>
                      <td width="50%">
                        <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">E-mail</p>
                        <p style="margin:0;font-size:15px">${safe.email}</p>
                      </td>
                    </tr>
                    <tr>
                      <td width="50%" style="padding-top:16px;padding-right:16px">
                        <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Telefone</p>
                        <p style="margin:0;font-size:15px">${safe.phone}</p>
                      </td>
                      <td width="50%" style="padding-top:16px">
                        <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Como nos encontrou</p>
                        <p style="margin:0;font-size:15px">${safe.source}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding-top:20px">
                  <p style="margin:0 0 8px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Mensagem</p>
                  <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${safe.message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #e5e7eb;background:#f7f7f8">
            <p style="margin:0;font-size:11px;color:#9ca3af;font-family:monospace">Enviado via formulário de contato — vrc.com.br/contato</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const { data: result, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo contato: ${subjectName} — ${subjectServices}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      const detail =
        typeof error === "object" && error && "message" in error
          ? String(error.message)
          : "Erro desconhecido ao enviar e-mail.";

      if (detail.toLowerCase().includes("only send testing emails")) {
        throw new Error(
          "Conta Resend em modo teste: use o mesmo e-mail da sua conta Resend em CONTACT_EMAIL ou verifique um domínio no Resend.",
        );
      }

      throw new Error(`Não foi possível enviar a mensagem: ${detail}`);
    }

    if (!result?.id) {
      throw new Error("Não foi possível confirmar o envio. Tente novamente.");
    }

    return { ok: true, id: result.id };
  });
