import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle, Linkedin, Send, Check } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/CtaFooter";
import { CONTACT_SERVICES, CONTACT_SOURCES } from "@/lib/contact-constants";
import { sendContact, contactSchema, type ContactInput } from "@/lib/send-contact";
import { formatPhoneBR } from "@/lib/phone";

const ease = [0.22, 1, 0.36, 1] as const;
const CLIENT_COOLDOWN_MS = 60_000;

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — VRC Solutions" },
      {
        name: "description",
        content:
          "Entre em contato com a VRC Solutions. Nossa equipe está pronta para ajudar você a construir a solução digital certa.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const [now, setNow] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { services: [], website: "", phone: "" },
  });

  const selectedServices = watch("services");
  const onCooldown = now < cooldownUntil;
  const cooldownSeconds = onCooldown ? Math.ceil((cooldownUntil - now) / 1000) : 0;

  useEffect(() => {
    if (!onCooldown) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [onCooldown]);

  async function onSubmit(data: ContactInput) {
    if (onCooldown) {
      toast.error(`Aguarde ${cooldownSeconds}s antes de enviar novamente.`);
      return;
    }

    try {
      await sendContact({ data });
      setSent(true);
      setCooldownUntil(Date.now() + CLIENT_COOLDOWN_MS);
      reset({ services: [], website: "", phone: "" });
      toast.success("Mensagem enviada! Entraremos em contato em breve.");
    } catch (err) {
      const msg = getErrorMessage(err);
      toast.error(msg);
    }
  }

  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-12 lg:pt-44 lg:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="kicker flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sea" />
            Contato
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mt-6 font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
          >
            Como podemos
            <br />
            <span className="text-sea">ajudar você?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Selecione o que você precisa e nossa equipe especializada estará pronta para responder.
          </motion.p>
        </div>
      </section>

      {/* Main grid */}
      <section className="bg-cloud py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">

            {/* Form */}
            <div>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="card-soft flex flex-col items-center py-20 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-sea/10 text-sea">
                    <Check className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">
                    Mensagem enviada!
                  </h2>
                  <p className="mt-3 max-w-sm text-muted-foreground">
                    Recebemos seu contato e entraremos em resposta em breve. Obrigado!
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="pill-outline mt-8 text-sm"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                  <input
                    {...register("website")}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  {/* Service chips */}
                  <div>
                    <label className="kicker mb-3 block">
                      Selecione as soluções que você procura
                    </label>
                    <Controller
                      control={control}
                      name="services"
                      render={({ field }) => (
                        <div className="flex flex-wrap gap-2">
                          {CONTACT_SERVICES.map((s) => {
                            const active = field.value.includes(s);
                            return (
                              <button
                                key={s}
                                type="button"
                                onClick={() =>
                                  field.onChange(
                                    active
                                      ? field.value.filter((v) => v !== s)
                                      : [...field.value, s],
                                  )
                                }
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                  active
                                    ? "bg-sea text-white shadow-[0_0_0_1px_theme(colors.sea)]"
                                    : "border border-hairline bg-background text-muted-foreground hover:border-sea hover:text-foreground"
                                }`}
                              >
                                {active && <Check className="mr-1.5 inline h-3.5 w-3.5" />}
                                {s}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    />
                    {errors.services && (
                      <p className="mt-2 text-xs text-destructive">{errors.services.message}</p>
                    )}
                    {selectedServices.length > 0 && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        Selecionado: {selectedServices.join(", ")}
                      </p>
                    )}
                  </div>

                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nome *" error={errors.name?.message}>
                      <input
                        {...register("name")}
                        type="text"
                        maxLength={120}
                        autoComplete="name"
                        placeholder="Seu nome completo"
                        className={inputClass(!!errors.name)}
                      />
                    </Field>
                    <Field label="E-mail *" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        type="email"
                        maxLength={254}
                        autoComplete="email"
                        placeholder="seu@email.com"
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                  </div>

                  {/* Phone + Source */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Telefone *" error={errors.phone?.message}>
                      <Controller
                        control={control}
                        name="phone"
                        render={({ field }) => (
                          <input
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel"
                            maxLength={15}
                            placeholder="(11) 99999-9999"
                            className={inputClass(!!errors.phone)}
                            value={field.value ?? ""}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                            onChange={(e) => field.onChange(formatPhoneBR(e.target.value))}
                          />
                        )}
                      />
                    </Field>
                    <Field label="Como nos encontrou *" error={errors.source?.message}>
                      <select
                        {...register("source")}
                        className={inputClass(!!errors.source)}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        {CONTACT_SOURCES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  {/* Message */}
                  <Field label="Mensagem *" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      rows={5}
                      maxLength={5000}
                      placeholder="Conte seu desafio, ideia ou projeto..."
                      className={inputClass(!!errors.message) + " resize-none"}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting || onCooldown}
                    className="pill w-full justify-center sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Enviando…
                      </>
                    ) : onCooldown ? (
                      <>Aguarde {cooldownSeconds}s</>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="space-y-8"
            >
              <div className="card-soft p-8">
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  Fale diretamente conosco
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Prefere contato direto? Escolha o canal de sua preferência.
                </p>

                <ul className="mt-8 space-y-5">
                  <ContactItem
                    icon={<Mail className="h-4 w-4" strokeWidth={1.75} />}
                    label="E-mail"
                    value="contato@vrcsolutions.com.br"
                    href="mailto:contato@vrcsolutions.com.br"
                  />
                  <ContactItem
                    icon={<Phone className="h-4 w-4" strokeWidth={1.75} />}
                    label="Telefone"
                    value="+55 (11) 4000-0000"
                    href="tel:+551140000000"
                  />
                  <ContactItem
                    icon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                    label="WhatsApp"
                    value="Enviar mensagem"
                    href="https://wa.me/5511400000000"
                  />
                </ul>
              </div>

              <div className="card-soft p-8">
                <h3 className="kicker mb-5">Redes sociais</h3>
                <div className="flex gap-2.5">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },

                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors hover:border-sea hover:bg-sea hover:text-white"
                    >
                      <s.icon className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="ocean rounded-2xl p-8">
                <p className="kicker text-aqua">Tempo de resposta</p>
                <p className="mt-3 text-white">
                  Respondemos todos os contatos em até{" "}
                  <strong className="text-sea">1 dia útil</strong>. Para demandas urgentes,
                  prefira o WhatsApp.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function getErrorMessage(err: unknown) {
  if (err instanceof Error && err.message) return err.message;
  if (typeof err === "object" && err && "message" in err) {
    return String(err.message);
  }
  return "Erro ao enviar. Tente novamente.";
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sea/10 text-sea">
        {icon}
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <a
          href={href}
          className="text-sm font-medium text-foreground transition-colors hover:text-sea"
        >
          {value}
        </a>
      </div>
    </li>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground",
    "focus:outline-none focus:ring-2 focus:ring-sea/20 transition-all duration-200",
    hasError ? "border-destructive focus:border-destructive" : "border-hairline focus:border-sea",
  ].join(" ");
}
