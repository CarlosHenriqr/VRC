import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { _ as Linkedin, g as Mail, h as Menu, k as ArrowRight, m as MessageCircle, n as X, p as Phone, w as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaFooter-CJKfizqV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHAT_WE_DO_SECTIONS = [
	{
		title: "Serviços",
		links: [
			{
				kind: "route",
				label: "Desenvolvimento Web",
				to: "/servicos/desenvolvimento-web"
			},
			{
				kind: "route",
				label: "Mobile",
				to: "/servicos/mobile"
			},
			{
				kind: "route",
				label: "Automação",
				to: "/servicos/automacao"
			},
			{
				kind: "route",
				label: "Inteligência Artificial",
				to: "/servicos/inteligencia-artificial"
			},
			{
				kind: "route",
				label: "Consultoria",
				to: "/servicos/consultoria"
			},
			{
				kind: "route",
				label: "ERP / CRM",
				to: "/servicos/erp-crm"
			},
			{
				kind: "route",
				label: "Integração de Sistemas",
				to: "/servicos/integracao-de-sistemas"
			}
		]
	},
	{
		title: "Setores",
		links: [
			{
				kind: "route",
				label: "SaaS B2B",
				to: "/setores/saas-b2b"
			},
			{
				kind: "route",
				label: "Fintech",
				to: "/setores/fintech"
			},
			{
				kind: "route",
				label: "Logística",
				to: "/setores/logistica"
			},
			{
				kind: "route",
				label: "Indústria",
				to: "/setores/industria"
			},
			{
				kind: "route",
				label: "Saúde",
				to: "/setores/saude"
			},
			{
				kind: "route",
				label: "Educação",
				to: "/setores/educacao"
			},
			{
				kind: "route",
				label: "Varejo",
				to: "/setores/varejo"
			}
		]
	},
	{
		title: "Expertise",
		links: [
			{
				kind: "hash",
				label: "Nosso processo",
				hash: "processo"
			},
			{
				kind: "hash",
				label: "Por que a VRC",
				hash: "manifesto"
			},
			{
				kind: "route",
				label: "Cases",
				to: "/cases"
			},
			{
				kind: "route",
				label: "Sobre a equipe",
				to: "/sobre"
			}
		]
	}
];
var ease = [
	.22,
	1,
	.36,
	1
];
var CLOSE_DELAY_MS = 120;
function scrollToHash(e, hash, onDone) {
	e.preventDefault();
	const target = document.getElementById(hash);
	if (target) {
		target.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
		window.history.replaceState(null, "", `#${hash}`);
	}
	onDone?.();
}
function WhatWeDoMenu({ variant, onNavigate }) {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	const [open, setOpen] = (0, import_react.useState)(false);
	const closeTimer = (0, import_react.useRef)(null);
	const panelId = (0, import_react.useId)();
	function clearCloseTimer() {
		if (closeTimer.current) {
			clearTimeout(closeTimer.current);
			closeTimer.current = null;
		}
	}
	function openMenu() {
		clearCloseTimer();
		setOpen(true);
	}
	function scheduleClose() {
		clearCloseTimer();
		closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
	}
	function closeMenu() {
		clearCloseTimer();
		setOpen(false);
	}
	(0, import_react.useEffect)(() => {
		return () => clearCloseTimer();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open || variant !== "desktop") return;
		function onKeyDown(e) {
			if (e.key === "Escape") closeMenu();
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open, variant]);
	function navHref(hash) {
		return isHome ? `#${hash}` : `/#${hash}`;
	}
	function handleHashClick(e, hash) {
		if (isHome) scrollToHash(e, hash, () => {
			closeMenu();
			onNavigate?.();
		});
		else {
			closeMenu();
			onNavigate?.();
		}
	}
	function handleRouteClick() {
		closeMenu();
		onNavigate?.();
	}
	function renderLink(link, className) {
		if (link.kind === "hash") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: navHref(link.hash),
			onClick: (e) => handleHashClick(e, link.hash),
			className,
			children: link.label
		}, `${link.hash}-${link.label}`);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: link.to,
			onClick: handleRouteClick,
			className,
			children: link.label
		}, `${link.to}-${link.label}`);
	}
	if (variant === "mobile") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			"aria-expanded": open,
			"aria-controls": panelId,
			className: "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground",
			children: ["O que fazemos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}` })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			initial: false,
			children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				id: panelId,
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				transition: {
					duration: .28,
					ease
				},
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-4 px-3 pb-3 pt-1",
					children: WHAT_WE_DO_SECTIONS.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1.5 px-0 text-xs font-semibold uppercase tracking-[0.08em] text-foreground",
						children: section.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col",
						children: section.links.map((link) => renderLink(link, "rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground"))
					})] }, section.title))
				})
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		onMouseEnter: openMenu,
		onMouseLeave: scheduleClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onFocus: openMenu,
			onClick: () => setOpen((v) => !v),
			"aria-expanded": open,
			"aria-controls": panelId,
			className: `group relative flex items-center gap-1 text-sm font-medium transition-colors ${open ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
			children: [
				"O que fazemos",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-sea transition-all duration-300 ${open ? "w-full" : "w-0 group-hover:w-full"}` })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			id: panelId,
			role: "region",
			"aria-label": "O que fazemos",
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				duration: .32,
				ease
			},
			className: "fixed inset-x-0 top-[4.5rem] z-40 overflow-hidden border-b border-hairline bg-background shadow-[0_18px_40px_-28px_rgba(1,24,41,0.35)]",
			onMouseEnter: openMenu,
			onMouseLeave: scheduleClose,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					y: -10,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				exit: {
					y: -6,
					opacity: 0
				},
				transition: {
					duration: .28,
					ease
				},
				className: "mx-auto max-w-6xl px-6 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-hairline",
					children: WHAT_WE_DO_SECTIONS.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[10rem_1fr] gap-8 py-6 first:pt-0 last:pb-0 sm:grid-cols-[12rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pt-0.5 text-sm font-semibold text-foreground",
							children: section.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-x-10 gap-y-2.5",
							children: section.links.map((link) => renderLink(link, "text-sm text-muted-foreground transition-colors hover:text-foreground"))
						})]
					}, section.title))
				})
			})
		}) })]
	});
}
function Wordmark({ className = "" }) {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	function handleClick(e) {
		if (isHome) {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			window.history.replaceState(null, "", "/");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		onClick: handleClick,
		className: `group flex items-center gap-2 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl font-bold tracking-[-0.04em] text-foreground",
			children: "VRC Solutions"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-sea transition-transform duration-300 group-hover:scale-125" })]
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { pathname } = useLocation();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -16,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-hairline bg-background/80 backdrop-blur-md" : "border-b border-transparent bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDoMenu, { variant: "desktop" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sobre",
							className: "group relative text-sm font-medium transition-colors [&.active]:text-foreground text-muted-foreground hover:text-foreground",
							children: ["Sobre", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full [.active_&]:w-full" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cases",
							className: "group relative text-sm font-medium transition-colors [&.active]:text-foreground text-muted-foreground hover:text-foreground",
							children: ["Cases", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full [.active_&]:w-full" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contato",
							className: "group relative text-sm font-medium transition-colors [&.active]:text-foreground text-muted-foreground hover:text-foreground",
							children: ["Contato", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full [.active_&]:w-full" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contato",
						className: "pill text-sm",
						children: ["Fale conosco ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((v) => !v),
					className: "rounded-full border border-hairline p-2.5 text-foreground lg:hidden",
					"aria-label": "Abrir menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-hairline bg-background/95 backdrop-blur-md lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1 px-6 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDoMenu, {
						variant: "mobile",
						onNavigate: () => setOpen(false)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sobre",
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground [&.active]:text-foreground",
						children: "Sobre"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cases",
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground [&.active]:text-foreground",
						children: "Cases"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contato",
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground [&.active]:text-foreground",
						children: "Contato"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contato",
						onClick: () => setOpen(false),
						className: "pill mt-2 justify-center",
						children: ["Fale conosco ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		})]
	});
}
function Cta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		className: "relative py-12 lg:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "ocean relative overflow-hidden rounded-[2rem] px-8 py-16 sm:px-16 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sea/25 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-aqua/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-aqua",
								children: "Vamos conversar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl",
								children: "Vamos construir a próxima solução digital da sua empresa?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg leading-relaxed text-aqua/80",
								children: "Conte seu desafio e nossa equipe desenvolverá uma solução personalizada para transformar sua ideia em resultado."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contato",
									className: "group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90",
									children: ["Solicitar orçamento", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/cases",
									className: "inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white",
									children: "Ver cases"
								})]
							})
						]
					})
				]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-hairline pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl font-bold tracking-[-0.04em]",
							children: "VRC Solutions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-sea" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
						children: "Parceira estratégica em engenharia de software, automação e inteligência artificial."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Empresa",
						links: [
							{
								label: "Sobre",
								href: "/sobre",
								external: false
							},
							{
								label: "Serviços",
								href: "/servicos/desenvolvimento-web",
								external: false
							},
							{
								label: "Cases",
								href: "/cases",
								external: false
							},
							{
								label: "Contato",
								href: "/contato",
								external: false
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "kicker",
						children: "Contato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "h-4 w-4 text-sea",
									strokeWidth: 1.75
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:contato@vrcsolutions.com.br",
									className: "transition-colors hover:text-foreground",
									children: "contato@vrcsolutions.com.br"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "h-4 w-4 text-sea",
									strokeWidth: 1.75
								}), " +55 (11) 4000-0000"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "h-4 w-4 text-sea",
									strokeWidth: 1.75
								}), " WhatsApp"]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "kicker",
							children: "Redes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex gap-2.5",
							children: [{
								icon: Linkedin,
								label: "LinkedIn"
							}].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": s.label,
								className: "grid h-10 w-10 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors hover:border-sea hover:bg-sea hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
									className: "h-4 w-4",
									strokeWidth: 1.75
								})
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "kicker mt-8",
							children: "Legal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/politica-de-privacidade",
								className: "transition-colors hover:text-foreground",
								children: "Política de Privacidade"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/termos-de-uso",
								className: "transition-colors hover:text-foreground",
								children: "Termos de Uso"
							}) })]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline py-8 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" VRC Solutions. Todos os direitos reservados."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono tracking-wide",
					children: "Engenharia de software sob medida"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none select-none overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-[22vw] font-bold leading-[0.8] tracking-[-0.06em] text-foreground/[0.04]",
					children: "VRC Solutions"
				})
			})
		})]
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "kicker",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 space-y-2.5 text-sm text-muted-foreground",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: l.external === false && !l.href.startsWith("#") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.href,
			className: "transition-colors hover:text-foreground",
			children: l.label
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: l.href,
			className: "transition-colors hover:text-foreground",
			children: l.label
		}) }, l.label))
	})] });
}
//#endregion
export { Footer as n, Navbar as r, Cta as t };
