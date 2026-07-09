export type SectorDomain = {
  title: string;
  description: string;
};

export type SectorReason = {
  title: string;
  description: string;
};

export type SectorMetric = {
  value: string;
  label: string;
};

export type SectorService = {
  title: string;
  items: string[];
};

export type SectorMethodStep = {
  step: string;
  title: string;
  description: string;
};

export type SectorFaq = {
  question: string;
  answer: string;
};

export type SectorContent = {
  slug: string;
  name: string;
  caseSector: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    kicker: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaLabel: string;
  };
  domains: {
    kicker: string;
    title: string;
    subtitle: string;
    items: SectorDomain[];
  };
  reasons: {
    kicker: string;
    title: string;
    items: SectorReason[];
  };
  metrics: {
    kicker: string;
    title: string;
    items: SectorMetric[];
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: SectorService[];
  };
  cases: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  methodology: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: SectorMethodStep[];
  };
  faq: {
    kicker: string;
    title: string;
    items: SectorFaq[];
  };
};
