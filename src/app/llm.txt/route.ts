import { NextResponse } from 'next/server';

export const revalidate = 86400; // 24 hours ISR

export async function GET() {
  const content = `# Service Dial IP - Platform Overview

Service Dial IP is a specialized intellectual property (IP) services platform for Indian businesses, startups, and entrepreneurs. We provide transparent, technology-driven trademark registration, renewal, and legal defense services across India.

## Core Services (Intents)
1. **Trademark Registration (Form TM-A):** New application filing with 50% govt fee subsidies for Individuals, Startups (DPIIT), and MSMEs (Udyam).
2. **Trademark Renewal (Form TM-R):** 10-year protection extension filings to prevent abandonment.
3. **Objection Reply (Section 9):** Absolute grounds defense (lack of distinctiveness/descriptive marks).
4. **Objection Reply (Section 11):** Relative grounds defense (conflicting/similar marks).
5. **Trademark Opposition (Form TM-O):** Defending or filing third-party opposition notices.
6. **Show Cause Hearing:** Virtual hearing representation before the CGPDTM Registry.

## Jurisdiction & Coverage
We handle IP applications routed to the 5 territorial registries of India under CGPDTM (Controller General of Patents, Designs and Trade Marks):
- Mumbai Registry
- New Delhi Registry
- Chennai Registry
- Kolkata Registry
- Ahmedabad Registry

We support businesses across all states and major industrial hubs in India.

## Pricing Transparency
We separate government statutory fees from our professional fees:
- **Individuals / MSME / Startups:** ₹4,500 Govt Fee per class
- **Corporates / Companies:** ₹9,000 Govt Fee per class

## Detailed Information
For a complete list of all 45 Nice Classification guidelines, detailed fee rules, and comprehensive legal processes, please read our full LLM documentation at:
https://servicedialtm.com/llm-full.txt
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
