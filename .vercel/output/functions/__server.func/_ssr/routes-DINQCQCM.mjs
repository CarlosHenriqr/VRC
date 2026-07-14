import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { C as ClipboardList, E as Brain, M as CodeXml, O as ArrowUpRight, S as Compass, d as Rocket, f as Plus, j as TestTubeDiagonal, k as ArrowRight, l as Search, o as Smartphone, r as Workflow, v as LifeBuoy, y as LayoutGrid } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Cta } from "./CtaFooter-CJKfizqV.mjs";
import { t as CASES } from "./cases-CzeAt3pd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DINQCQCM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Fixed scroll progress counter (00% -> 100%) — a signature element of sui.io.
* Sits in the lower-left corner and tracks how far the page has been scrolled.
*/
function ScrollProgress() {
	const [pct, setPct] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const update = () => {
			const scrollable = document.documentElement.scrollHeight - window.innerHeight;
			const p = scrollable > 0 ? window.scrollY / scrollable : 0;
			setPct(Math.round(Math.min(1, Math.max(0, p)) * 100));
		};
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed bottom-6 left-6 z-40 hidden items-center gap-3 md:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-mono text-xs tabular-nums text-muted-foreground",
			children: [String(pct).padStart(2, "0"), "%"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative h-px w-16 overflow-hidden bg-[var(--hairline)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute inset-y-0 left-0 bg-sea transition-[width] duration-150",
				style: { width: `${pct}%` }
			})
		})]
	});
}
/**
* Subtle WebGL backdrop for the hero: a slow, drifting particle field in the
* warm graphite/gold palette. Three.js is loaded dynamically (client-only) so
* it never blocks SSR or the initial bundle. Falls back to nothing when WebGL
* is unavailable or the user prefers reduced motion — the CSS vignette covers
* the background in that case.
*/
function HeroCanvas() {
	const mountRef = (0, import_react.useRef)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!mountRef.current) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let disposed = false;
		let cleanup = () => {};
		(async () => {
			let THREE;
			try {
				THREE = await import("../_libs/three.mjs").then((n) => n.t);
			} catch {
				return;
			}
			if (disposed || !mountRef.current) return;
			let renderer;
			try {
				renderer = new THREE.WebGLRenderer({
					alpha: true,
					antialias: true,
					powerPreference: "low-power"
				});
			} catch {
				return;
			}
			const host = mountRef.current;
			const width = host.clientWidth;
			const height = host.clientHeight;
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
			renderer.setSize(width, height);
			host.appendChild(renderer.domElement);
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(60, width / height, .1, 100);
			camera.position.z = 14;
			const COUNT = Math.min(900, Math.floor(width * height / 2600) + 300);
			const positions = new Float32Array(COUNT * 3);
			for (let i = 0; i < COUNT; i++) {
				const r = 8 + Math.random() * 7;
				const theta = Math.random() * Math.PI * 2;
				const phi = Math.acos(2 * Math.random() - 1);
				positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
				positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * .6;
				positions[i * 3 + 2] = r * Math.cos(phi);
			}
			const geometry = new THREE.BufferGeometry();
			geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
			const material = new THREE.PointsMaterial({
				color: new THREE.Color("#4DA2FF"),
				size: .07,
				sizeAttenuation: true,
				transparent: true,
				opacity: .7,
				depthWrite: false,
				blending: THREE.NormalBlending
			});
			const points = new THREE.Points(geometry, material);
			scene.add(points);
			const pointer = {
				x: 0,
				y: 0
			};
			const onPointerMove = (e) => {
				pointer.x = (e.clientX / window.innerWidth - .5) * .4;
				pointer.y = (e.clientY / window.innerHeight - .5) * .4;
			};
			window.addEventListener("pointermove", onPointerMove, { passive: true });
			const onResize = () => {
				if (!mountRef.current) return;
				const w = mountRef.current.clientWidth;
				const h = mountRef.current.clientHeight;
				renderer.setSize(w, h);
				camera.aspect = w / h;
				camera.updateProjectionMatrix();
			};
			window.addEventListener("resize", onResize);
			let visible = true;
			const io = new IntersectionObserver(([entry]) => {
				visible = entry.isIntersecting;
			}, { threshold: 0 });
			io.observe(host);
			let raf = 0;
			const clock = new THREE.Clock();
			const render = () => {
				raf = requestAnimationFrame(render);
				if (!visible) return;
				const t = clock.getElapsedTime();
				points.rotation.y = t * .04;
				points.rotation.x = Math.sin(t * .05) * .12;
				camera.position.x += (pointer.x - camera.position.x) * .03;
				camera.position.y += (-pointer.y - camera.position.y) * .03;
				camera.lookAt(scene.position);
				renderer.render(scene, camera);
			};
			render();
			setReady(true);
			cleanup = () => {
				cancelAnimationFrame(raf);
				io.disconnect();
				window.removeEventListener("resize", onResize);
				window.removeEventListener("pointermove", onPointerMove);
				geometry.dispose();
				material.dispose();
				renderer.dispose();
				if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
			};
		})();
		return () => {
			disposed = true;
			cleanup();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mountRef,
		"aria-hidden": "true",
		className: `pointer-events-none absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`
	});
}
var ease = [
	.22,
	1,
	.36,
	1
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCanvas, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6",
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-sea" }), "Engenharia de software sob medida"]
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
					className: "mt-6 font-display text-[3.25rem] font-bold leading-[0.92] tracking-[-0.045em] text-foreground sm:text-7xl lg:text-[7.5rem]",
					children: [
						"Software",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sea",
							children: "sob medida"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
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
						className: "max-w-xl text-lg leading-relaxed text-muted-foreground",
						children: "A VRC Solutions projeta e constrói sistemas, plataformas e automações sob medida — com a engenharia, o cuidado e a previsibilidade que uma operação séria exige."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							delay: .2,
							ease
						},
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contato",
							className: "pill group",
							children: ["Solicitar orçamento", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#servicos",
							className: "pill-outline",
							children: "Conhecer serviços"
						})]
					})]
				})
			]
		})]
	});
}
var sectors = [
	{
		label: "SaaS",
		to: "/setores/saas-b2b"
	},
	{
		label: "Fintech",
		to: "/setores/fintech"
	},
	{
		label: "Logística",
		to: "/setores/logistica"
	},
	{
		label: "Indústria",
		to: "/setores/industria"
	},
	{
		label: "Saúde",
		to: "/setores/saude"
	},
	{
		label: "Educação",
		to: "/setores/educacao"
	}
];
function LogosStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-y border-hairline bg-cloud py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker text-center",
				children: "Setores que atendemos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6",
				children: sectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: s.to,
					className: "font-display text-xl font-bold tracking-tight text-foreground/35 transition-colors hover:text-sea",
					children: s.label
				}, s.label))
			})]
		})
	});
}
var services = [
	{
		icon: CodeXml,
		label: "Desenvolvimento Web",
		title: "Sistemas e plataformas",
		desc: "ERPs, CRMs, SaaS, sistemas internos e portais corporativos sob medida.",
		to: "/servicos/desenvolvimento-web"
	},
	{
		icon: Smartphone,
		label: "Mobile",
		title: "Aplicativos nativos e híbridos",
		desc: "Apps para Android e iOS com experiência premium e alta performance.",
		to: "/servicos/mobile"
	},
	{
		icon: Workflow,
		label: "Automação",
		title: "Processos e integrações",
		desc: "APIs, bots e automações que economizam horas de operação.",
		to: "/servicos/automacao"
	},
	{
		icon: Brain,
		label: "Inteligência Artificial",
		title: "IA aplicada ao negócio",
		desc: "Chatbots, assistentes e soluções baseadas em modelos de IA.",
		to: "/servicos/inteligencia-artificial"
	},
	{
		icon: Compass,
		label: "Consultoria",
		title: "Arquitetura e estratégia",
		desc: "Modernização de sistemas e transformação digital com método.",
		to: "/servicos/consultoria"
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicos",
		className: "relative py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Serviços",
				title: "O stack completo para construir seu produto.",
				subtitle: "Engenharia, design e estratégia combinados para entregar soluções completas, do primeiro protótipo à operação em escala."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid overflow-hidden rounded-2xl border border-hairline sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
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
						duration: .5,
						delay: i * .06
					},
					className: "group relative -mr-px -mb-px border-r border-b border-hairline bg-background transition-colors duration-300 hover:bg-cloud",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: s.to,
						className: "block p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm text-sea",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 place-items-center rounded-full bg-cloud text-foreground transition-colors group-hover:bg-sea group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "h-5 w-5",
										strokeWidth: 1.75
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker mt-8",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-2 flex items-center gap-2 font-display text-2xl font-semibold tracking-tight",
								children: [s.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.95rem] leading-relaxed text-muted-foreground",
								children: s.desc
							})
						]
					})
				}, s.title))
			})]
		})
	});
}
function SectionHeader({ eyebrow, title, subtitle, center = false, dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: center ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: `kicker flex items-center gap-3 ${center ? "justify-center" : ""} ${dark ? "text-aqua" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-sea" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-4xl font-bold tracking-[-0.035em] sm:text-5xl lg:text-6xl lg:leading-[0.98]",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-6 text-lg leading-relaxed ${dark ? "text-aqua/80" : "text-muted-foreground"}`,
				children: subtitle
			})
		]
	});
}
var steps = [
	{
		icon: Search,
		title: "Descoberta",
		desc: "Entendemos o negócio, contexto e objetivos."
	},
	{
		icon: ClipboardList,
		title: "Requisitos",
		desc: "Mapeamos escopo, fluxos e critérios de sucesso."
	},
	{
		icon: LayoutGrid,
		title: "Planejamento",
		desc: "Arquitetura, sprints e marcos bem definidos."
	},
	{
		icon: CodeXml,
		title: "Desenvolvimento",
		desc: "Código limpo, revisado e versionado."
	},
	{
		icon: TestTubeDiagonal,
		title: "Testes",
		desc: "Qualidade validada em múltiplas camadas."
	},
	{
		icon: Rocket,
		title: "Implantação",
		desc: "Deploy seguro com monitoramento ativo."
	},
	{
		icon: LifeBuoy,
		title: "Suporte",
		desc: "Evolução contínua e suporte dedicado."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "processo",
		className: "relative py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Processo",
				title: "Como começamos a trabalhar juntos.",
				subtitle: "Um método claro, previsível e colaborativo — da primeira conversa à evolução contínua."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
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
						duration: .45,
						delay: i * .05
					},
					className: "group card-soft p-7 transition-colors hover:bg-cloud",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-foreground text-background transition-colors group-hover:bg-sea group-hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
									className: "h-5 w-5",
									strokeWidth: 1.75
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm text-muted-foreground",
								children: String(i + 1).padStart(2, "0")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-xl font-semibold tracking-tight",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.95rem] leading-relaxed text-muted-foreground",
							children: s.desc
						})
					]
				}, s.title))
			})]
		})
	});
}
var whyUs = [
	"Soluções sob medida, sem templates",
	"Código limpo, escalável e documentado",
	"Arquitetura moderna e segura por padrão",
	"Comunicação transparente em cada etapa"
];
var youGet = [
	"Entregas previsíveis em sprints",
	"Integrações com seus sistemas atuais",
	"Suporte e evolução contínua",
	"Um parceiro técnico dedicado"
];
function Differentials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "manifesto",
		className: "ocean relative overflow-hidden py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sea/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-aqua",
					children: "Por que a VRC Solutions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .6 },
					className: "mt-6 max-w-4xl font-display text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]",
					children: [
						"Construímos software para ser ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sea",
							children: "confiável"
						}),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sea",
							children: "escalável"
						}),
						" e",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sea",
							children: "verdadeiramente seu"
						}),
						". O resultado: produtos melhores, equipes mais rápidas e valor que fica na sua operação."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-12 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						title: "O que entregamos",
						items: whyUs
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						title: "O que você ganha",
						items: youGet
					})]
				})
			]
		})]
	});
}
function Column({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "kicker text-aqua",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-6",
		children: items.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
			initial: {
				opacity: 0,
				x: -8
			},
			whileInView: {
				opacity: 1,
				x: 0
			},
			viewport: {
				once: true,
				margin: "-40px"
			},
			transition: {
				duration: .4,
				delay: i * .05
			},
			className: "flex items-center gap-3 border-b border-white/10 py-4 text-lg text-white/90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-sea" }), label]
		}, label))
	})] });
}
var stats = [
	{
		value: 5,
		suffix: "+",
		label: "Especialidades técnicas"
	},
	{
		value: 100,
		suffix: "%",
		label: "Soluções sob medida"
	},
	{
		value: 1,
		suffix: "",
		label: "Parceiro dedicado por projeto"
	},
	{
		value: 0,
		suffix: "",
		label: "Templates prontos — tudo personalizado"
	}
];
function Counter({ to, decimals = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVal(to);
			return;
		}
		const duration = 1400;
		const start = performance.now();
		let raf = 0;
		const tick = (now) => {
			const p = Math.min(1, (now - start) / duration);
			setVal(to * (1 - Math.pow(1 - p, 3)));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		children: val.toFixed(decimals)
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px overflow-hidden rounded-2xl border border-hairline bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: "bg-background px-8 py-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-5xl font-bold tracking-[-0.04em] text-foreground sm:text-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							to: s.value,
							decimals: s.decimals ?? 0
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sea",
							children: s.suffix
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-sm text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})
		})
	});
}
var projects = [
	"helix-crm",
	"cargo-flow",
	"atlas-mobile",
	"vertex-ai-assist",
	"nimbus-erp",
	"loop-automations"
].map((slug) => {
	const c = CASES.find((item) => item.slug === slug);
	return {
		name: c.title,
		sector: c.sector,
		desc: c.desc,
		tech: c.tech
	};
});
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "relative bg-cloud py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Portfólio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 font-display text-4xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl",
					children: [
						"Resultado entregue",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"em todos os setores"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg text-muted-foreground",
					children: "Uma seleção de soluções desenvolvidas para empresas em diferentes segmentos."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cases",
						className: "pill text-sm",
						children: ["Ver todos os cases ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 18
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
							duration: .5,
							delay: i * .05
						},
						className: "group card-soft flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(2,12,27,0.25)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-cloud px-3 py-1 text-xs font-medium text-sea ring-1 ring-sea/20",
									children: p.sector
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors group-hover:border-sea group-hover:bg-sea group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-8 font-display text-2xl font-semibold tracking-tight",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-hairline pt-5",
								children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: t
								}, t))
							})
						]
					}, p.name))
				})
			]
		})
	});
}
var items = [
	{
		text: "Cada projeto começa do zero — sem templates, sem atalhos. Construímos exatamente o que o seu negócio precisa.",
		label: "Sob medida de verdade"
	},
	{
		text: "Comunicação clara desde o primeiro contato. Você acompanha escopo, prazos e entregas em cada etapa.",
		label: "Transparência total"
	},
	{
		text: "Arquitetura sólida, código limpo e documentação desde o início. Pensamos no futuro do seu produto.",
		label: "Engenharia que dura"
	},
	{
		text: "Somos parceiros, não fornecedores. Seu sucesso é o nosso critério de qualidade.",
		label: "Parceria real"
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setI((v) => (v + 1) % items.length), 6e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "ocean relative overflow-hidden py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sea/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-aqua",
					children: "Compromissos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-12 min-h-[260px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -12
							},
							transition: { duration: .4 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl",
								children: [
									"“",
									items[i].text,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-full bg-sea/20 px-4 py-1.5 font-mono text-xs font-medium text-aqua",
									children: items[i].label
								})
							})]
						}, i)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex justify-center gap-2",
					children: items.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI(k),
						"aria-label": `Compromisso ${k + 1}`,
						className: `h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-sea" : "w-5 bg-white/20"}`
					}, k))
				})
			]
		})]
	});
}
var faqs = [
	{
		q: "Quanto custa um projeto?",
		a: "Cada projeto é único. Após uma conversa inicial e levantamento de escopo, enviamos uma proposta com investimento, prazo e entregáveis detalhados."
	},
	{
		q: "Quanto tempo leva o desenvolvimento?",
		a: "Projetos menores ficam entre 4 e 8 semanas. Plataformas mais complexas seguem em sprints contínuos com entregas incrementais."
	},
	{
		q: "Vocês fazem manutenção?",
		a: "Sim. Oferecemos planos de suporte e evolução contínua, com SLA e canal direto com o time de engenharia."
	},
	{
		q: "É possível integrar com sistemas existentes?",
		a: "Sim. Integramos com ERPs, CRMs, gateways de pagamento, APIs públicas e sistemas legados via REST, GraphQL ou filas."
	},
	{
		q: "Vocês desenvolvem aplicativos?",
		a: "Desenvolvemos apps nativos e híbridos para Android e iOS com foco em performance e experiência do usuário."
	}
];
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "relative py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "FAQ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-5 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl",
				children: [
					"Perguntas",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"frequentes"
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-hairline",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(isOpen ? null : i),
							"aria-expanded": isOpen,
							className: "flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-sea",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-semibold tracking-tight",
								children: f.q
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
									children: f.a
								})
							})
						})]
					}, f.q);
				})
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 min-h-screen bg-transparent text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogosStrip, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Differentials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
