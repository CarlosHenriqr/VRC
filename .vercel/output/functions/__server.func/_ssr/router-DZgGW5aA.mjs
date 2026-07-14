import { o as __toESM } from "../_runtime.mjs";
import { t as automacaoService } from "./automacao-BHmRrfVZ.mjs";
import { i as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { I as useRouter, _ as Link, c as HeadContent, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, m as lazyRouteComponent, p as Outlet, s as Scripts, u as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as consultoriaService } from "./consultoria-nP-sRfXn.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as desenvolvimentoWebService } from "./desenvolvimento-web-Rh76CUdc.mjs";
import { t as educacaoSector } from "./educacao-BcJFiMom.mjs";
import { t as erpCrmService } from "./erp-crm-JjWppOY-.mjs";
import { t as fintechSector } from "./fintech-BE8f95js.mjs";
import { t as varejoSector } from "./varejo-8KQ2iBdN.mjs";
import { t as saudeSector } from "./saude-B_a6Kf6F.mjs";
import { t as saasB2bSector } from "./saas-b2b-C507y8qB.mjs";
import { t as logisticaSector } from "./logistica-Cgrxe3DS.mjs";
import { t as industriaSector } from "./industria-ssKI5g5j.mjs";
import { t as mobileService } from "./mobile-B_bkrfBU.mjs";
import { t as inteligenciaArtificialService } from "./inteligencia-artificial-B6-t0yIF.mjs";
import { t as integracaoSistemasService } from "./integracao-de-sistemas-BfnWVtZG.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DZgGW5aA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "vrc_cookie_consent";
function getCookieConsent() {
	if (typeof window === "undefined") return null;
	const value = localStorage.getItem(STORAGE_KEY);
	return value === "accepted" || value === "rejected" ? value : null;
}
function setCookieConsent(value) {
	localStorage.setItem(STORAGE_KEY, value);
	window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
}
function hasAnalyticsConsent() {
	return getCookieConsent() === "accepted";
}
async function applyAnalyticsConsent() {
	if (!hasAnalyticsConsent()) return;
	const { initFirebaseAnalytics } = await import("./firebase-fCf2-f74.mjs");
	await initFirebaseAnalytics();
}
var appInstance = null;
var analyticsInstance = null;
var initPromise = null;
function getFirebaseConfig() {
	return {
		apiKey: "AIzaSyBV1K5ks4xkBWFQwmoyissJ0Yv3Ej9LmRY",
		authDomain: "vrc-solutions.firebaseapp.com",
		projectId: "vrc-solutions",
		storageBucket: "vrc-solutions.firebasestorage.app",
		messagingSenderId: "110577242459",
		appId: "1:110577242459:web:4f4c6ba788d5e4652dca7e",
		measurementId: "G-260BJH0PEN"
	};
}
async function initFirebaseAnalytics() {
	if (typeof window === "undefined") return null;
	if (!hasAnalyticsConsent()) return null;
	if (analyticsInstance) return analyticsInstance;
	if (initPromise) return initPromise;
	initPromise = (async () => {
		const config = getFirebaseConfig();
		if (!config) {
			console.warn("Firebase Analytics: variáveis VITE_FIREBASE_* não configuradas.");
			return null;
		}
		const { initializeApp, getApps } = await import("../_libs/firebase.mjs").then((n) => n.t);
		const { initializeAnalytics, isSupported, logEvent } = await import("../_libs/firebase.mjs").then((n) => n.n);
		if (!await isSupported()) return null;
		appInstance = getApps()[0] ?? initializeApp(config);
		analyticsInstance = initializeAnalytics(appInstance, void 0);
		return analyticsInstance;
	})();
	try {
		return await initPromise;
	} finally {
		initPromise = null;
	}
}
var styles_default = "/assets/styles-CpRQIBaf.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function CookieConsent() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const consent = getCookieConsent();
		setVisible(consent === null);
		if (consent === "accepted") applyAnalyticsConsent();
	}, []);
	function respond(choice) {
		setCookieConsent(choice);
		setVisible(false);
		if (choice === "accepted") applyAnalyticsConsent();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		role: "dialog",
		"aria-labelledby": "cookie-consent-title",
		"aria-describedby": "cookie-consent-desc",
		initial: {
			y: 24,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		exit: {
			y: 24,
			opacity: 0
		},
		transition: {
			duration: .35,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-hairline bg-background/95 p-5 shadow-lg backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "cookie-consent-title",
					className: "kicker",
					children: "Cookies"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					id: "cookie-consent-desc",
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: [
						"Utilizamos cookies essenciais para o funcionamento do site. Com sua autorização, também podemos usar cookies para análise e melhoria da experiência. Saiba mais em nossa",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/politica-de-privacidade",
							className: "text-sea underline-offset-4 hover:underline",
							children: "Política de Privacidade"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => respond("rejected"),
					className: "pill-outline px-5 py-2.5 text-sm",
					children: "Recusar opcionais"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => respond("accepted"),
					className: "pill px-5 py-2.5 text-sm",
					children: "Aceitar todos"
				})]
			})]
		})
	}) });
}
function FirebaseAnalytics() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		if (hasAnalyticsConsent()) applyAnalyticsConsent();
		function onConsentChange(event) {
			if (event.detail === "accepted") applyAnalyticsConsent();
		}
		window.addEventListener("cookie-consent-change", onConsentChange);
		return () => window.removeEventListener("cookie-consent-change", onConsentChange);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hasAnalyticsConsent()) return;
		(async () => {
			const analytics = await initFirebaseAnalytics();
			if (!analytics) return;
			const { logEvent } = await import("../_libs/firebase.mjs").then((n) => n.n);
			logEvent(analytics, "page_view", {
				page_path: pathname,
				page_title: document.title
			});
		})();
	}, [pathname]);
	return null;
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-10 flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Erro 404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-7xl font-medium text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-lg font-medium text-foreground",
					children: "Página não encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A página que você procura não existe ou foi movida."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "pill",
						children: "Voltar ao início"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-10 flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Algo deu errado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-2xl font-medium tracking-tight text-foreground",
					children: "Esta página não carregou"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Ocorreu um problema do nosso lado. Tente atualizar ou volte ao início."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "pill",
						children: "Tentar novamente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "pill-outline",
						children: "Voltar ao início"
					})]
				})
			]
		})
	});
}
var Route$20 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "VRC Solutions — Engenharia de software sob medida" },
			{
				name: "description",
				content: "Desenvolvemos sistemas, aplicativos, automações e soluções de IA sob medida para acelerar o crescimento da sua empresa."
			},
			{
				property: "og:title",
				content: "VRC Solutions — Engenharia de software sob medida"
			},
			{
				property: "og:description",
				content: "Sistemas, mobile, automações e IA para transformar desafios em resultado."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Schibsted+Grotesk:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$20.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FirebaseAnalytics, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				richColors: true,
				position: "top-center"
			})
		]
	});
}
var $$splitComponentImporter$19 = () => import("./termos-de-uso-46t5kuMk.mjs");
var Route$19 = createFileRoute("/termos-de-uso")({
	head: () => ({ meta: [{ title: "Termos de Uso — VRC Solutions" }, {
		name: "description",
		content: "Termos e condições de uso do site e dos serviços oferecidos pela VRC Solutions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./sobre-_1PuWf9O.mjs");
var Route$18 = createFileRoute("/sobre")({
	head: () => ({ meta: [{ title: "Sobre — VRC Solutions" }, {
		name: "description",
		content: "Conheça a VRC Solutions: engenharia de software sob medida, automação e IA para transformar negócios com inovação."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./politica-de-privacidade-CnhN9BHL.mjs");
var Route$17 = createFileRoute("/politica-de-privacidade")({
	head: () => ({ meta: [{ title: "Política de Privacidade — VRC Solutions" }, {
		name: "description",
		content: "Saiba como a VRC Solutions coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./contato-DP_nF5FV.mjs");
var Route$16 = createFileRoute("/contato")({
	head: () => ({ meta: [{ title: "Contato — VRC Solutions" }, {
		name: "description",
		content: "Entre em contato com a VRC Solutions. Nossa equipe está pronta para ajudar você a construir a solução digital certa."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./cases-C7KXm7qn.mjs");
var Route$15 = createFileRoute("/cases")({
	head: () => ({ meta: [{ title: "Cases — VRC Solutions" }, {
		name: "description",
		content: "Conheça os projetos entregues pela VRC Solutions para empresas em diferentes setores e segmentos."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./routes-DINQCQCM.mjs");
var Route$14 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "VRC Solutions — Engenharia de software sob medida" },
		{
			name: "description",
			content: "Desenvolvemos sistemas, aplicativos, automações e soluções de IA sob medida para acelerar o crescimento da sua empresa."
		},
		{
			property: "og:title",
			content: "VRC Solutions — Engenharia de software sob medida"
		},
		{
			property: "og:description",
			content: "Sistemas, mobile, automações e IA para transformar desafios em resultado."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./varejo-D-9QD5xV.mjs");
var Route$13 = createFileRoute("/setores/varejo")({
	head: () => ({ meta: [{ title: varejoSector.seo.title }, {
		name: "description",
		content: varejoSector.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./saude-DAhr8wCZ.mjs");
var Route$12 = createFileRoute("/setores/saude")({
	head: () => ({ meta: [{ title: saudeSector.seo.title }, {
		name: "description",
		content: saudeSector.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./saas-b2b-D5QIS8sg.mjs");
var Route$11 = createFileRoute("/setores/saas-b2b")({
	head: () => ({ meta: [{ title: saasB2bSector.seo.title }, {
		name: "description",
		content: saasB2bSector.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./logistica-CpPujXrJ.mjs");
var Route$10 = createFileRoute("/setores/logistica")({
	head: () => ({ meta: [{ title: logisticaSector.seo.title }, {
		name: "description",
		content: logisticaSector.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./industria-FQsUXjAO.mjs");
var Route$9 = createFileRoute("/setores/industria")({
	head: () => ({ meta: [{ title: industriaSector.seo.title }, {
		name: "description",
		content: industriaSector.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./fintech-BcqP4k03.mjs");
var Route$8 = createFileRoute("/setores/fintech")({
	head: () => ({ meta: [{ title: fintechSector.seo.title }, {
		name: "description",
		content: fintechSector.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./educacao-CoUJDXYl2.mjs");
var Route$7 = createFileRoute("/setores/educacao")({
	head: () => ({ meta: [{ title: educacaoSector.seo.title }, {
		name: "description",
		content: educacaoSector.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./mobile-BGOzQoAa.mjs");
var Route$6 = createFileRoute("/servicos/mobile")({
	head: () => ({ meta: [{ title: mobileService.seo.title }, {
		name: "description",
		content: mobileService.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./inteligencia-artificial-Dd1TTwHJ.mjs");
var Route$5 = createFileRoute("/servicos/inteligencia-artificial")({
	head: () => ({ meta: [{ title: inteligenciaArtificialService.seo.title }, {
		name: "description",
		content: inteligenciaArtificialService.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./integracao-de-sistemas-DanpHL5D.mjs");
var Route$4 = createFileRoute("/servicos/integracao-de-sistemas")({
	head: () => ({ meta: [{ title: integracaoSistemasService.seo.title }, {
		name: "description",
		content: integracaoSistemasService.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./erp-crm-CNvAClAP.mjs");
var Route$3 = createFileRoute("/servicos/erp-crm")({
	head: () => ({ meta: [{ title: erpCrmService.seo.title }, {
		name: "description",
		content: erpCrmService.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./desenvolvimento-web-yz-PwGAC.mjs");
var Route$2 = createFileRoute("/servicos/desenvolvimento-web")({
	head: () => ({ meta: [{ title: desenvolvimentoWebService.seo.title }, {
		name: "description",
		content: desenvolvimentoWebService.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./consultoria-DpjJiL9G.mjs");
var Route$1 = createFileRoute("/servicos/consultoria")({
	head: () => ({ meta: [{ title: consultoriaService.seo.title }, {
		name: "description",
		content: consultoriaService.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./automacao-2vlBu_H9.mjs");
var Route = createFileRoute("/servicos/automacao")({
	head: () => ({ meta: [{ title: automacaoService.seo.title }, {
		name: "description",
		content: automacaoService.seo.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TermosDeUsoRoute = Route$19.update({
	id: "/termos-de-uso",
	path: "/termos-de-uso",
	getParentRoute: () => Route$20
});
var SobreRoute = Route$18.update({
	id: "/sobre",
	path: "/sobre",
	getParentRoute: () => Route$20
});
var PoliticaDePrivacidadeRoute = Route$17.update({
	id: "/politica-de-privacidade",
	path: "/politica-de-privacidade",
	getParentRoute: () => Route$20
});
var ContatoRoute = Route$16.update({
	id: "/contato",
	path: "/contato",
	getParentRoute: () => Route$20
});
var CasesRoute = Route$15.update({
	id: "/cases",
	path: "/cases",
	getParentRoute: () => Route$20
});
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var SetoresVarejoRoute = Route$13.update({
	id: "/setores/varejo",
	path: "/setores/varejo",
	getParentRoute: () => Route$20
});
var SetoresSaudeRoute = Route$12.update({
	id: "/setores/saude",
	path: "/setores/saude",
	getParentRoute: () => Route$20
});
var SetoresSaasB2bRoute = Route$11.update({
	id: "/setores/saas-b2b",
	path: "/setores/saas-b2b",
	getParentRoute: () => Route$20
});
var SetoresLogisticaRoute = Route$10.update({
	id: "/setores/logistica",
	path: "/setores/logistica",
	getParentRoute: () => Route$20
});
var SetoresIndustriaRoute = Route$9.update({
	id: "/setores/industria",
	path: "/setores/industria",
	getParentRoute: () => Route$20
});
var SetoresFintechRoute = Route$8.update({
	id: "/setores/fintech",
	path: "/setores/fintech",
	getParentRoute: () => Route$20
});
var SetoresEducacaoRoute = Route$7.update({
	id: "/setores/educacao",
	path: "/setores/educacao",
	getParentRoute: () => Route$20
});
var ServicosMobileRoute = Route$6.update({
	id: "/servicos/mobile",
	path: "/servicos/mobile",
	getParentRoute: () => Route$20
});
var ServicosInteligenciaArtificialRoute = Route$5.update({
	id: "/servicos/inteligencia-artificial",
	path: "/servicos/inteligencia-artificial",
	getParentRoute: () => Route$20
});
var ServicosIntegracaoDeSistemasRoute = Route$4.update({
	id: "/servicos/integracao-de-sistemas",
	path: "/servicos/integracao-de-sistemas",
	getParentRoute: () => Route$20
});
var ServicosErpCrmRoute = Route$3.update({
	id: "/servicos/erp-crm",
	path: "/servicos/erp-crm",
	getParentRoute: () => Route$20
});
var ServicosDesenvolvimentoWebRoute = Route$2.update({
	id: "/servicos/desenvolvimento-web",
	path: "/servicos/desenvolvimento-web",
	getParentRoute: () => Route$20
});
var ServicosConsultoriaRoute = Route$1.update({
	id: "/servicos/consultoria",
	path: "/servicos/consultoria",
	getParentRoute: () => Route$20
});
var rootRouteChildren = {
	IndexRoute,
	CasesRoute,
	ContatoRoute,
	PoliticaDePrivacidadeRoute,
	SobreRoute,
	TermosDeUsoRoute,
	ServicosAutomacaoRoute: Route.update({
		id: "/servicos/automacao",
		path: "/servicos/automacao",
		getParentRoute: () => Route$20
	}),
	ServicosConsultoriaRoute,
	ServicosDesenvolvimentoWebRoute,
	ServicosErpCrmRoute,
	ServicosIntegracaoDeSistemasRoute,
	ServicosInteligenciaArtificialRoute,
	ServicosMobileRoute,
	SetoresEducacaoRoute,
	SetoresFintechRoute,
	SetoresIndustriaRoute,
	SetoresLogisticaRoute,
	SetoresSaasB2bRoute,
	SetoresSaudeRoute,
	SetoresVarejoRoute
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, initFirebaseAnalytics as n, getFirebaseConfig as t };
