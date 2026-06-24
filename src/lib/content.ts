import {
  Boxes,
  Compass,
  GitBranch,
  LineChart,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export type CaseStatus = "Shipped" | "In production" | "Ongoing";

export interface CaseStudy {
  name: string;
  industry: string;
  description: string;
  stack: string[];
  status: CaseStatus;
  year: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  services: string[];
  duration: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    icon: Workflow,
    title: "Operations platforms",
    description:
      "Internal systems that replace spreadsheets and manual handoffs with reliable, auditable workflows your team actually trusts.",
  },
  {
    icon: LineChart,
    title: "Data & reporting",
    description:
      "Pipelines and dashboards that turn fragmented operational data into a single source of truth for decision making.",
  },
  {
    icon: Boxes,
    title: "Product engineering",
    description:
      "End-to-end product teams that design, build, and ship customer-facing software with a clear sense of ownership.",
  },
  {
    icon: GitBranch,
    title: "Platform & integration",
    description:
      "APIs and integrations that connect legacy tools, vendors, and services without brittle one-off scripts.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability & security",
    description:
      "Observability, access control, and hardening practices built in from the first commit, not bolted on later.",
  },
  {
    icon: Compass,
    title: "Technical advisory",
    description:
      "Architecture reviews and roadmaps that help internal teams make confident, reversible technical decisions.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We map the operational problem, constraints, and stakeholders before writing a single line of code.",
  },
  {
    index: "02",
    title: "Planning",
    description:
      "Scope, architecture, and milestones are defined together so trade-offs are explicit and agreed.",
  },
  {
    index: "03",
    title: "Development",
    description:
      "Short iterations, working software, and weekly demos keep delivery transparent and on track.",
  },
  {
    index: "04",
    title: "Launch",
    description:
      "We roll out carefully with monitoring, documentation, and a clear plan for adoption.",
  },
  {
    index: "05",
    title: "Support",
    description:
      "Ongoing maintenance and improvements keep the system healthy long after launch day.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: "Meridian Logistics OS",
    industry: "Logistics",
    description:
      "A dispatch and fleet operations platform that consolidated six internal tools into one, cutting daily coordination time by 40%.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    status: "In production",
    year: "2025",
    challenge:
      "Dispatchers juggled six disconnected tools and a wall of spreadsheets to coordinate fleets across regions. Handoffs were manual, status was always stale, and no one trusted the numbers.",
    solution:
      "We designed a single operations platform with live dispatch boards, automated routing, and a unified data model. Every action is audited, and reporting is generated from the same source of truth dispatchers work in.",
    outcomes: [
      "40% less time spent on daily coordination",
      "Six legacy tools retired and consolidated into one",
      "Real-time fleet status replaced end-of-day reconciliation",
    ],
    services: ["Discovery", "Product engineering", "Data & reporting"],
    duration: "7 months",
  },
  {
    name: "Harbor Claims Engine",
    industry: "Insurance",
    description:
      "An automated claims intake and triage system replacing manual review, processing thousands of submissions per week.",
    stack: ["TypeScript", "Python", "Temporal", "GCP"],
    status: "Shipped",
    year: "2024",
    challenge:
      "Every claim was read and routed by hand, creating a multi-day backlog and inconsistent decisions during peak weeks. The team had no visibility into where a claim was stuck.",
    solution:
      "We built a durable intake and triage pipeline that validates submissions, classifies them, and routes edge cases to humans. Long-running workflows are orchestrated reliably so nothing is silently dropped.",
    outcomes: [
      "Thousands of claims processed automatically each week",
      "Average triage time reduced from days to minutes",
      "Full audit trail for every routing decision",
    ],
    services: ["Platform & integration", "Product engineering", "Reliability"],
    duration: "5 months",
  },
  {
    name: "Atlas Procurement",
    industry: "Manufacturing",
    description:
      "A supplier and purchase-order workflow with approvals, audit trails, and ERP integration for a multi-plant operation.",
    stack: ["Next.js", "Go", "Kafka", "Kubernetes"],
    status: "In production",
    year: "2024",
    challenge:
      "Purchasing across multiple plants ran on email approvals and a brittle set of scripts bolted onto an aging ERP. Reconciling orders was slow and error-prone.",
    solution:
      "We delivered a procurement workflow with structured approvals, event-driven ERP synchronization, and a complete audit trail, deployed on infrastructure the in-house team can operate themselves.",
    outcomes: [
      "Standardized approvals across all plants",
      "Event-driven ERP sync replaced nightly batch scripts",
      "End-to-end audit trail for compliance reviews",
    ],
    services: ["Operations platforms", "Platform & integration", "Technical advisory"],
    duration: "9 months",
  },
  {
    name: "Lumen Care Scheduling",
    industry: "Healthcare",
    description:
      "A staff scheduling and compliance platform handling shift rules, certifications, and reporting across clinics.",
    stack: ["React", "Rails", "Redis", "Azure"],
    status: "Ongoing",
    year: "2023",
    challenge:
      "Clinic managers built staff schedules by hand while tracking certifications and shift rules in separate spreadsheets, risking compliance gaps and last-minute gaps in coverage.",
    solution:
      "We built a scheduling platform that encodes shift rules and certification requirements, flags conflicts before they happen, and produces the compliance reports managers previously assembled manually.",
    outcomes: [
      "Certification and shift-rule conflicts caught automatically",
      "Compliance reporting generated instead of hand-built",
      "Coverage planning unified across all clinics",
    ],
    services: ["Discovery", "Product engineering", "Reliability"],
    duration: "Ongoing",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They understood our operations faster than teams we'd worked with for years. The system they built is still the backbone of how we run.",
    name: "Daniel Okafor",
    role: "COO, Meridian Logistics",
    initials: "DO",
  },
  {
    quote:
      "No theatrics, no buzzwords. Clear scope, weekly demos, and software that worked on day one of launch.",
    name: "Sarah Lindqvist",
    role: "VP Engineering, Harbor",
    initials: "SL",
  },
  {
    quote:
      "They pushed back when our requirements didn't make sense and were right every time. That's rare and worth a lot.",
    name: "Marcus Reyes",
    role: "Head of Operations, Atlas",
    initials: "MR",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do engagements typically start?",
    answer:
      "Most begin with a short discovery phase. We spend one to two weeks understanding the problem, your constraints, and success criteria before proposing scope and a fixed plan.",
  },
  {
    question: "Do you work with existing internal teams?",
    answer:
      "Yes. We frequently embed alongside in-house engineers, share architecture decisions openly, and hand over thoroughly documented systems your team can own.",
  },
  {
    question: "What size of company do you usually work with?",
    answer:
      "We focus on established organizations with real operational complexity, from scaling mid-market companies to enterprise teams replacing legacy systems.",
  },
  {
    question: "How do you handle pricing?",
    answer:
      "We scope projects into clear milestones with fixed deliverables. For longer relationships we offer dedicated teams billed on a predictable monthly basis.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing support and maintenance plans, but we design every system to be maintainable by your own engineers without lock-in.",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Careers", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Operations platforms", href: "#services" },
      { label: "Data & reporting", href: "#services" },
      { label: "Product engineering", href: "#services" },
      { label: "Technical advisory", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Case studies", href: "#portfolio" },
      { label: "FAQ", href: "#faq" },
      { label: "Engineering notes", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@nexusdigital.com", href: "mailto:hello@nexusdigital.com" },
      { label: "+1 (415) 555-0199", href: "tel:+14155550199" },
      { label: "San Francisco, CA", href: "#" },
      { label: "Remote, worldwide", href: "#" },
    ],
  },
];
