import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { O as ArrowUpRight, f as Plus, k as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Cta } from "./CtaFooter-CJKfizqV.mjs";
import { r as getCasesBySolution } from "./cases-CzeAt3pd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServicePage-Dq3pRcai.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
function FadeIn({ children, className = "", delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .6,
			delay,
			ease
		},
		className,
		children
	});
}
function ServicePage({ content }) {
	const cases = content.caseSolution ? getCasesBySolution(content.caseSolution) : [];
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28",
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-sea" }), content.hero.kicker]
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
							className: "mt-6 max-w-4xl font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl",
							children: [
								content.hero.title,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sea",
									children: content.hero.titleAccent
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
							className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
							children: content.hero.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
								delay: .18,
								ease
							},
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contato",
								className: "pill text-sm",
								children: [
									content.hero.ctaLabel,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-hairline bg-cloud py-24 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: content.capabilities.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl",
							children: content.capabilities.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted-foreground",
							children: content.capabilities.subtitle
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: content.capabilities.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex h-full flex-col rounded-2xl border border-hairline bg-background p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold tracking-tight",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[0.95rem] leading-relaxed text-muted-foreground",
									children: item.description
								})]
							})
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: content.reasons.kicker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl",
						children: content.reasons.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-8 sm:grid-cols-2",
						children: content.reasons.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-hairline pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-sea",
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-xl font-semibold tracking-tight",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[0.95rem] leading-relaxed text-muted-foreground",
										children: item.description
									})
								]
							})
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-hairline bg-cloud py-20 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: content.metrics.kicker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl",
							children: content.metrics.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4",
						children: content.metrics.items.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, {
							delay: i * .08,
							className: "bg-background px-8 py-10 text-center lg:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-bold tracking-[-0.04em] text-sea sm:text-4xl",
								children: m.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: m.label
							})]
						}, m.label))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: content.offers.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl",
							children: content.offers.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted-foreground",
							children: content.offers.subtitle
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-5 md:grid-cols-2",
						children: content.offers.items.map((offer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex h-full flex-col rounded-2xl border border-hairline p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold tracking-tight",
									children: offer.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3",
									children: offer.items.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-[0.95rem] leading-relaxed text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" }), line]
									}, line))
								})]
							})
						}, offer.title))
					})]
				})
			}),
			cases.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-hairline bg-cloud py-24 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: content.cases.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl",
							children: content.cases.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted-foreground",
							children: content.cases.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cases",
								className: "pill text-sm",
								children: ["Ver todos os cases ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-5 md:grid-cols-2",
						children: cases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group card-soft flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(2,12,27,0.25)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-cloud px-3 py-1 text-xs font-medium text-sea ring-1 ring-sea/20",
												children: c.sector
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full border border-hairline px-3 py-1 text-xs font-medium text-muted-foreground",
												children: c.solution
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors group-hover:border-sea group-hover:bg-sea group-hover:text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-display text-xl font-semibold tracking-tight",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs font-medium text-sea",
										children: c.client
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground",
										children: c.desc
									}),
									c.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 rounded-xl bg-sea/8 px-4 py-2.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium text-sea",
											children: c.highlight
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-hairline pt-5",
										children: c.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-muted-foreground",
											children: t
										}, t))
									})
								]
							})
						}, c.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "ocean relative overflow-hidden py-24 lg:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sea/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-aqua",
								children: content.methodology.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl",
								children: content.methodology.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-aqua/80",
								children: content.methodology.subtitle
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: content.methodology.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-sm font-medium text-sea",
										children: step.step
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-lg font-semibold text-white",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-aqua/70",
										children: step.description
									})
								]
							})
						}, step.step))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: content.faq.kicker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl",
						children: content.faq.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-hairline",
						children: content.faq.items.map((f, i) => {
							const isOpen = openFaq === i;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-hairline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setOpenFaq(isOpen ? null : i),
									"aria-expanded": isOpen,
									className: "flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-sea",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg font-semibold tracking-tight",
										children: f.question
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
										className: `h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-sea" : "text-muted-foreground"}`,
										strokeWidth: 1.75
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									initial: false,
									children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
										transition: { duration: .25 },
										className: "overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "max-w-xl pb-6 text-[0.95rem] leading-relaxed text-muted-foreground",
											children: f.answer
										})
									})
								})]
							}, f.question);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ServicePage as t };
