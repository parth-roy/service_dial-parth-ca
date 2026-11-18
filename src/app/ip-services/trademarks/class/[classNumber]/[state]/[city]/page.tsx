import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

interface ClassCityPageProps {
  params: Promise<{
    classNumber: string;
    state: string;
    city: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 86400; // 24 hours ISR

function parseStrictClassNumber(raw: string): number | null {
  if (!/^\d+$/.test(raw)) return null;
  const num = Number(raw);
  return num >= 1 && num <= 45 ? num : null;
}

export async function generateMetadata({ params }: ClassCityPageProps): Promise<Metadata> {
  const { classNumber } = await params;
  const num = parseStrictClassNumber(classNumber);
  
  return {
    title: num ? `Trademark Class ${num} Registration Guide` : "Trademark Class Not Found",
    description: num 
      ? `Official national Nice Classification guidelines for Trademark Class ${num} registration in India.`
      : "Trademark class guide.",
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: num 
        ? `https://servicedialtm.com/ip-services/trademarks/class/${num}`
        : "https://servicedialtm.com/ip-services",
    },
  };
}

export default async function ClassCityPage({ params }: ClassCityPageProps) {
  const { classNumber } = await params;
  const num = parseStrictClassNumber(classNumber);

  // Permanent 301 consolidation to canonical National Nice Class Guide
  // Eliminates 31,500 programmatic doorway URLs across all districts
  if (num && num >= 1 && num <= 45) {
    permanentRedirect(`/ip-services/trademarks/class/${num}`);
  }

  notFound();
}
