export type ServiceCapability = {
  title: string;
  description: string;
};

export type ServiceReason = {
  title: string;
  description: string;
};

export type ServiceMetric = {
  value: string;
  label: string;
};

export type ServiceOffer = {
  title: string;
  items: string[];
};

export type ServiceMethodStep = {
  step: string;
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceContent = {
  slug: string;
  name: string;
  /** Valor de `Case.solution` para filtrar cases (pode ficar vazio se não houver match). */
  caseSolution: string;
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
  capabilities: {
    kicker: string;
    title: string;
    subtitle: string;
    items: ServiceCapability[];
  };
  reasons: {
    kicker: string;
    title: string;
    items: ServiceReason[];
  };
  metrics: {
    kicker: string;
    title: string;
    items: ServiceMetric[];
  };
  offers: {
    kicker: string;
    title: string;
    subtitle: string;
    items: ServiceOffer[];
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
    steps: ServiceMethodStep[];
  };
  faq: {
    kicker: string;
    title: string;
    items: ServiceFaq[];
  };
};
