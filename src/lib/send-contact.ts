import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  services: z.array(z.string()).min(1, "Selecione ao menos um serviço"),
  name: z.string().min(3, "Nome deve ter ao menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(8, "Telefone inválido"),
  source: z.string().min(1, "Informe como nos encontrou"),
  message: z.string().min(20, "Mensagem deve ter ao menos 20 caracteres"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const sendContact = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;

    if (!apiKey || !to) {
      console.error("Resend: RESEND_API_KEY ou CONTACT_EMAIL não configurados");
      throw new Error("Configuração de e-mail ausente. Configure .env e tente novamente.");
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const servicesText = data.services.join(", ");

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
            <p style="margin:0;font-size:22px;font-weight:700;color:#fff;letter-spacing:-0.04em">VRC Solutions</p>
            <p style="margin:6px 0 0;font-size:12px;color:#c0e6ff;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em">Novo contato via site</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:20px;border-bottom:1px solid #e5e7eb">
                  <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Serviços de interesse</p>
                  <p style="margin:0;font-size:15px;font-weight:600">${servicesText}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 0;border-bottom:1px solid #e5e7eb">
                  <table width="100%">
                    <tr>
                      <td width="50%" style="padding-right:16px">
                        <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Nome</p>
                        <p style="margin:0;font-size:15px">${data.name}</p>
                      </td>
                      <td width="50%">
                        <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">E-mail</p>
                        <p style="margin:0;font-size:15px"><a href="mailto:${data.email}" style="color:#4DA2FF">${data.email}</a></p>
                      </td>
                    </tr>
                    <tr>
                      <td width="50%" style="padding-top:16px;padding-right:16px">
                        <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Telefone</p>
                        <p style="margin:0;font-size:15px">${data.phone}</p>
                      </td>
                      <td width="50%" style="padding-top:16px">
                        <p style="margin:0 0 4px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Como nos encontrou</p>
                        <p style="margin:0;font-size:15px">${data.source}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding-top:20px">
                  <p style="margin:0 0 8px;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280">Mensagem</p>
                  <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${data.message}</p>
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

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL ?? "VRC Solutions <onboarding@resend.dev>",
      to,
      replyTo: data.email,
      subject: `Novo contato: ${data.name} — ${servicesText}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Não foi possível enviar a mensagem. Tente novamente.");
    }

    return { ok: true };
  });
