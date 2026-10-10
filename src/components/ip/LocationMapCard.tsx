"use client";

import React, { useState } from "react";

interface LocationMapCardProps {
  cityName: string;
  stateName: string;
  officeName: string;
  officialAddress: string;
  lgdCode?: number;
  locationType?: string;
}

export default function LocationMapCard({
  cityName,
  stateName,
  officeName,
  officialAddress,
  lgdCode,
  locationType = "Commercial District",
}: LocationMapCardProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Safe encode for Google Maps embed query
  const query = encodeURIComponent(`${cityName}, ${stateName}, India`);
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${query}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    `${cityName}, ${stateName}`
  )}&destination=${encodeURIComponent(officialAddress)}`;

  return (
    <div className="bg-white border border-sd-border rounded-2xl overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-sd-bg to-white border-b border-sd-border flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              ● Active Territorial Jurisdiction
            </span>
            <span className="text-xs text-sd-muted font-medium">
              {locationType} {lgdCode ? `(LGD Code: ${lgdCode})` : ""}
            </span>
          </div>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-sd-text">
            {cityName} Jurisdiction Map & Registry Routing
          </h3>
          <p className="text-xs sm:text-sm text-sd-muted mt-0.5">
            Geographic coverage for trademark applications originating in {cityName}, {stateName}
          </p>
        </div>

        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-sd-bg-2 hover:bg-sd-border/40 text-sd-text font-semibold text-xs sm:text-sm rounded-xl border border-sd-border transition-colors shadow-xs"
        >
          <svg
            className="w-4 h-4 text-sd-pink"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Get Route to Mumbai Registry
        </a>
      </div>

      {/* Grid: Map Embed + Jurisdiction Metadata Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Map Preview Embed */}
        <div className="lg:col-span-7 h-72 sm:h-96 w-full relative bg-sd-bg border-b lg:border-b-0 lg:border-r border-sd-border">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-sd-bg z-10 text-xs text-sd-muted">
              <span className="animate-pulse">Loading localized territorial map for {cityName}...</span>
            </div>
          )}
          <iframe
            title={`Territorial Map for ${cityName}`}
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            className="w-full h-full"
          />
        </div>

        {/* Right: Statutory Registry Advisory Details */}
        <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between bg-white space-y-4">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-sd-pink uppercase">
              Competent Trade Marks Authority
            </span>
            <h4 className="text-lg font-bold text-sd-text mt-0.5">
              {officeName} Registry Office
            </h4>
            <p className="text-xs text-sd-muted mt-1 leading-relaxed">
              Under Rule 8 of the Trade Marks Rules 2017, all commercial applications whose principal place of business is located in{" "}
              <strong className="text-sd-text font-semibold">{cityName}</strong> fall strictly under the sovereign purview of the {officeName} Registry.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-sd-bg border border-sd-border text-xs space-y-2">
            <div>
              <span className="text-sd-muted block font-medium">Official Registry Address:</span>
              <span className="text-sd-text font-semibold leading-snug block mt-0.5">
                {officialAddress}
              </span>
            </div>
            <div className="pt-2 border-t border-sd-border/60 flex items-center justify-between text-sd-muted">
              <span>Jurisdiction Rule:</span>
              <span className="font-semibold text-sd-text">Rule 8 & 9 (TM Rules 2017)</span>
            </div>
            <div className="flex items-center justify-between text-sd-muted">
              <span>Hearing Mode:</span>
              <span className="font-semibold text-emerald-700">Virtual (Webex) & In-Person</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex items-center gap-2 text-xs text-sd-muted mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Same-day E-Filing & TM-A number generation available for {cityName}</span>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(`${cityName}, ${stateName}, India`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-sd-pink hover:underline inline-flex items-center gap-1"
            >
              Explore {cityName} District Boundaries on Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
