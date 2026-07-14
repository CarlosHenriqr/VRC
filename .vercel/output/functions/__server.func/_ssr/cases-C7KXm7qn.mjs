import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { O as ArrowUpRight, l as Search, n as X, u as RotateCcw } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Cta } from "./CtaFooter-CJKfizqV.mjs";
import { t as CASES } from "./cases-CzeAt3pd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases-C7KXm7qn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ALL = "Todos";
var sectors = [ALL, ...Array.from(new Set(CASES.map((c) => c.sector))).sort()];
var solutions = [ALL, ...Array.from(new Set(CASES.map((c) => c.solution))).sort()];
function FilterChip({ label, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 ${active ? "bg-sea text-white" : "border border-hairline text-muted-foreground hover:border-sea hover:text-foreground"}`,
		children: label
	});
}
function ActiveTag({ label, onClear }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onClear,
		className: "inline-flex items-center gap-1.5 rounded-full bg-sea/10 px-2.5 py-1 text-xs font-medium text-sea ring-1 ring-sea/20 transition-colors hover:bg-sea/15",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
			className: "h-3 w-3",
			strokeWidth: 2
		})]
	});
}
function EmptyState({ onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-16 w-16 place-items-center rounded-full border border-hairline text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-xl font-semibold text-foreground",
				children: "Nenhum case encontrado"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Tente outros termos ou limpe os filtros para ver todos os projetos."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onReset,
				className: "pill-outline mt-6 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Limpar filtros"]
			})
		]
	});
}
function CasesPage() {
	const [search, setSearch] = (0, import_react.useState)("");
	const [sector, setSector] = (0, import_react.useState)(ALL);
	const [solution, setSolution] = (0, import_react.useState)(ALL);
	const filtered = (0, import_react.useMemo)(() => {
		const q = search.toLowerCase();
		return CASES.filter((c) => {
			const matchSearch = q === "" || c.title.toLowerCase().includes(q) || c.client.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
			const matchSector = sector === ALL || c.sector === sector;
			const matchSolution = solution === ALL || c.solution === solution;
			return matchSearch && matchSector && matchSolution;
		});
	}, [
		search,
		sector,
		solution
	]);
	const hasActiveFilter = search !== "" || sector !== ALL || solution !== ALL;
	const resultLabel = filtered.length === 1 ? "1 case encontrado" : `${filtered.length} cases encontrados`;
	function resetFilters() {
		setSearch("");
		setSector(ALL);
		setSolution(ALL);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20",
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
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "kicker flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-sea" }), "Cases"]
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
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mt-6 font-display text-[3rem] font-bold leading-[0.92] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl",
							children: [
								"Resultado entregue",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sea",
									children: "em todos os setores"
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
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
							children: "Uma seleção de projetos desenvolvidos para empresas em diferentes segmentos — do primeiro commit à operação em escala."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-[4.5rem] z-40 border-b border-hairline bg-background/95 shadow-[0_8px_24px_-16px_rgba(2,12,27,0.18)] backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl space-y-3 px-6 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "search",
										placeholder: "Buscar por projeto, cliente ou descrição…",
										value: search,
										onChange: (e) => setSearch(e.target.value),
										className: "w-full rounded-full border border-hairline bg-background py-2.5 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-150 focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/20"
									}),
									search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSearch(""),
										"aria-label": "Limpar busca",
										className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 items-center justify-between gap-3 sm:justify-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-medium text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-sea",
										children: filtered.length
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											" ",
											"de ",
											CASES.length,
											" case",
											CASES.length !== 1 ? "s" : ""
										]
									})]
								}), hasActiveFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: resetFilters,
									className: "inline-flex items-center gap-1.5 rounded-full border border-sea/30 bg-sea/10 px-3.5 py-2 text-xs font-medium text-sea transition-colors hover:bg-sea hover:text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" }), "Limpar"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker mr-1",
								children: "Setor"
							}), sectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								label: s,
								active: sector === s,
								onClick: () => setSector(s)
							}, s))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker mr-1",
								children: "Solução"
							}), solutions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								label: s,
								active: solution === s,
								onClick: () => setSolution(s)
							}, s))]
						}),
						hasActiveFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 border-t border-hairline pt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Ativos:"
								}),
								search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveTag, {
									label: `Busca: “${search.length > 24 ? `${search.slice(0, 24)}…` : search}”`,
									onClear: () => setSearch("")
								}),
								sector !== ALL && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveTag, {
									label: `Setor: ${sector}`,
									onClear: () => setSector(ALL)
								}),
								solution !== ALL && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveTag, {
									label: `Solução: ${solution}`,
									onClear: () => setSolution(ALL)
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cloud py-16 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: resultLabel
					}), filtered.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group card-soft flex flex-col p-7 transition-shadow duration-200 hover:shadow-[0_24px_48px_-24px_rgba(2,12,27,0.25)]",
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
									className: "mt-6 font-display text-xl font-semibold tracking-tight text-foreground",
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
						}, c.slug))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onReset: resetFilters })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CasesPage as component };
