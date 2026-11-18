import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

interface CityIntentPageProps {
  params: Promise<{
    intent: string;
    state: string;
    city: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400; // 24 hours ISR

const INTENT_LABELS: Record<
  string,
  {
    title: string;
    form: string;
    description: string;
  }
> = {
  registration: {
    title: "Trademark Registration",
    form: "Form TM-A",
    description: "Official trademark registration and legal representation under the Trade Marks Act 1999.",
  },
  renewal: {
    title: "Trademark Renewal",
    form: "Form TM-R",
    description: "Maintain continuous statutory brand ownership through timely 10-year renewal filings.",
  },
  "objection-sec9": {
    title: "Section 9 Trademark Objection Reply",
    form: "Examination Report Reply",
    description: "Overcome absolute grounds of refusal with evidence-backed legal rebuttals.",
  },
  "objection-sec11": {
    title: "Section 11 Trademark Objection Reply",
    form: "Examination Report Reply",
    description: "Overcome cited conflicting trademarks with prior use and commercial distinction evidence.",
  },
  opposition: {
    title: "Trademark Opposition & Counter-Statement",
    form: "Form TM-O",
    description: "Statutory opposition representation and defense before the Trade Marks Registry.",
  },
};

export async function generateMetadata({ params }: CityIntentPageProps): Promise<Metadata> {
  const { intent, state } = await params;
  const intentMeta = INTENT_LABELS[intent] || {
    title: "Trademark Services",
    form: "TM-A",
    description: "Official trademark registration and legal representation."
  };
  const formattedState = state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, " ");

  return {
    title: `${intentMeta.title} in ${formattedState} | IP India Advisory & Filing`,
    description: `Official ${intentMeta.title.toLowerCase()} services across ${formattedState}. Form ${intentMeta.form} statutory filing.`,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `https://servicedialtm.com/ip-services/trademarks/${intent}/${state}`,
    },
  };
}

export default async function CityIntentPage({ params }: CityIntentPageProps) {
  const { intent, state } = await params;
  const intentData = INTENT_LABELS[intent];

  if (!intentData) {
    notFound();
  }

  // Permanent 301 consolidation from city-intent to authoritative State Hub
  // Eliminates 3,500 programmatic doorway pages across all districts
  permanentRedirect(`/ip-services/trademarks/${intent}/${state}`);
}
