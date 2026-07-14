import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, n as Controller, r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { T as Check, _ as Linkedin, c as Send, g as Mail, m as MessageCircle, p as Phone } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar } from "./CtaFooter-CJKfizqV.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Cetuimvl.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Dasc8-6_.mjs";
import { i as contactRateLimitMiddleware, n as CONTACT_SOURCES, t as CONTACT_SERVICES } from "./contact-rate-limit-DsHfvJuo.mjs";
import { i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contato-DP_nF5FV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = objectType({
	services: arrayType(enumType(CONTACT_SERVICES)).min(1, "Selecione ao menos um serviço").max(CONTACT_SERVICES.length),
	name: stringType().trim().min(3, "Nome deve ter ao menos 3 caracteres").max(120, "Nome muito longo").regex(/^[\p{L}\p{M}\s'.-]+$/u, "Nome contém caracteres inválidos"),
	email: stringType().trim().email("E-mail inválido").max(254, "E-mail muito longo"),
	phone: stringType().trim().min(8, "Telefone inválido").max(30, "Telefone muito longo").regex(/^[\d\s()+.-]+$/, "Telefone contém caracteres inválidos"),
	source: enumType(CONTACT_SOURCES, {
		required_error: "Informe como nos encontrou",
		invalid_type_error: "Informe como nos encontrou"
	}),
	message: stringType().trim().min(20, "Mensagem deve ter ao menos 20 caracteres").max(5e3, "Mensagem muito longa"),
	website: stringType().optional().default("")
});
var sendContact = createServerFn({ method: "POST" }).middleware([contactRateLimitMiddleware]).validator(contactSchema).handler(createSsrRpc("3e587c1109a072e229695c96c1580ae6781adecb483cd6de4b99d2b622afcbdd"));
var ease = [
	.22,
	1,
	.36,
	1
];
var CLIENT_COOLDOWN_MS = 6e4;
function ContatoPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [cooldownUntil, setCooldownUntil] = (0, import_react.useState)(0);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const { register, handleSubmit, control, watch, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: u(contactSchema),
		defaultValues: {
			services: [],
			website: ""
		}
	});
	const selectedServices = watch("services");
	const onCooldown = now < cooldownUntil;
	const cooldownSeconds = onCooldown ? Math.ceil((cooldownUntil - now) / 1e3) : 0;
	(0, import_react.useEffect)(() => {
		if (!onCooldown) return;
		const id = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(id);
	}, [onCooldown]);
	async function onSubmit(data) {
		if (onCooldown) {
			toast.error(`Aguarde ${cooldownSeconds}s antes de enviar novamente.`);
			return;
		}
		try {
			await sendContact({ data });
			setSent(true);
			setCooldownUntil(Date.now() + CLIENT_COOLDOWN_MS);
			reset({
				services: [],
				website: ""
			});
			toast.success("Mensagem enviada! Entraremos em contato em breve.");
		} catch (err) {
			const msg = getErrorMessage(err);
			toast.error(msg);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden pt-36 pb-12 lg:pt-44 lg:pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								ease
							},
							className: "kicker flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-sea" }), "Contato"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								ease
							},
							className: "mt-6 font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl",
							children: [
								"Como podemos",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sea",
									children: "ajudar você?"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .1,
								ease
							},
							className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
							children: "Selecione o que você precisa e nossa equipe especializada estará pronta para responder."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cloud py-16 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .96
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: { duration: .4 },
							className: "card-soft flex flex-col items-center py-20 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-16 w-16 place-items-center rounded-full bg-sea/10 text-sea",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-7 w-7",
										strokeWidth: 2
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-6 font-display text-2xl font-bold tracking-tight",
									children: "Mensagem enviada!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-sm text-muted-foreground",
									children: "Recebemos seu contato e entraremos em resposta em breve. Obrigado!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSent(false),
									className: "pill-outline mt-8 text-sm",
									children: "Enviar outra mensagem"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit(onSubmit),
							noValidate: true,
							className: "space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									...register("website"),
									type: "text",
									tabIndex: -1,
									autoComplete: "off",
									"aria-hidden": "true",
									className: "pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "kicker mb-3 block",
										children: "Selecione as soluções que você procura"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
										control,
										name: "services",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: CONTACT_SERVICES.map((s) => {
												const active = field.value.includes(s);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => field.onChange(active ? field.value.filter((v) => v !== s) : [...field.value, s]),
													className: `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${active ? "bg-sea text-white shadow-[0_0_0_1px_theme(colors.sea)]" : "border border-hairline bg-background text-muted-foreground hover:border-sea hover:text-foreground"}`,
													children: [active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-1.5 inline h-3.5 w-3.5" }), s]
												}, s);
											})
										})
									}),
									errors.services && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-destructive",
										children: errors.services.message
									}),
									selectedServices.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-xs text-muted-foreground",
										children: ["Selecionado: ", selectedServices.join(", ")]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Nome *",
										error: errors.name?.message,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											...register("name"),
											type: "text",
											maxLength: 120,
											autoComplete: "name",
											placeholder: "Seu nome completo",
											className: inputClass(!!errors.name)
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "E-mail *",
										error: errors.email?.message,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											...register("email"),
											type: "email",
											maxLength: 254,
											autoComplete: "email",
											placeholder: "seu@email.com",
											className: inputClass(!!errors.email)
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Telefone *",
										error: errors.phone?.message,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											...register("phone"),
											type: "tel",
											maxLength: 30,
											autoComplete: "tel",
											placeholder: "+55 (11) 9 0000-0000",
											className: inputClass(!!errors.phone)
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Como nos encontrou *",
										error: errors.source?.message,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											...register("source"),
											className: inputClass(!!errors.source),
											defaultValue: "",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Selecione uma opção"
											}), CONTACT_SOURCES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: s,
												children: s
											}, s))]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Mensagem *",
									error: errors.message?.message,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										...register("message"),
										rows: 5,
										maxLength: 5e3,
										placeholder: "Conte seu desafio, ideia ou projeto...",
										className: inputClass(!!errors.message) + " resize-none"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isSubmitting || onCooldown,
									className: "pill w-full justify-center sm:w-auto disabled:cursor-not-allowed disabled:opacity-60",
									children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" }), "Enviando…"] }) : onCooldown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"Aguarde ",
										cooldownSeconds,
										"s"
									] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Enviar mensagem", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })] })
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								duration: .7,
								delay: .15,
								ease
							},
							className: "space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-soft p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-xl font-semibold tracking-tight",
											children: "Fale diretamente conosco"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-muted-foreground",
											children: "Prefere contato direto? Escolha o canal de sua preferência."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "mt-8 space-y-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
													icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
														className: "h-4 w-4",
														strokeWidth: 1.75
													}),
													label: "E-mail",
													value: "contato@vrcsolutions.com.br",
													href: "mailto:contato@vrcsolutions.com.br"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
													icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
														className: "h-4 w-4",
														strokeWidth: 1.75
													}),
													label: "Telefone",
													value: "+55 (11) 4000-0000",
													href: "tel:+551140000000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
													icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
														className: "h-4 w-4",
														strokeWidth: 1.75
													}),
													label: "WhatsApp",
													value: "Enviar mensagem",
													href: "https://wa.me/5511400000000"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-soft p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "kicker mb-5",
										children: "Redes sociais"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-2.5",
										children: [{
											icon: Linkedin,
											label: "LinkedIn",
											href: "#"
										}].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: s.href,
											"aria-label": s.label,
											className: "grid h-10 w-10 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors hover:border-sea hover:bg-sea hover:text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
												className: "h-4 w-4",
												strokeWidth: 1.75
											})
										}, s.label))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ocean rounded-2xl p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-aqua",
										children: "Tempo de resposta"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-white",
										children: [
											"Respondemos todos os contatos em até",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-sea",
												children: "1 dia útil"
											}),
											". Para demandas urgentes, prefira o WhatsApp."
										]
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function getErrorMessage(err) {
	if (err instanceof Error && err.message) return err.message;
	if (typeof err === "object" && err && "message" in err) return String(err.message);
	return "Erro ao enviar. Tente novamente.";
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-sm font-medium text-foreground",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive",
				children: error
			})
		]
	});
}
function ContactItem({ icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sea/10 text-sea",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			className: "text-sm font-medium text-foreground transition-colors hover:text-sea",
			children: value
		})] })]
	});
}
function inputClass(hasError) {
	return [
		"w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground",
		"focus:outline-none focus:ring-2 focus:ring-sea/20 transition-all duration-200",
		hasError ? "border-destructive focus:border-destructive" : "border-hairline focus:border-sea"
	].join(" ");
}
//#endregion
export { ContatoPage as component };
