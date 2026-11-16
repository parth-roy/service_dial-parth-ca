"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { CityData, StateData } from "@/data/locations";
import { ServicePillar } from "@/data/services";

interface Props {
  cities: CityData[];
  states: StateData[];
  services: ServicePillar[];
}

const POPULAR_CORRIDORS = [
  { label: "All Hubs", query: "" },
  { label: "Bengaluru (Peenya / Whitefield)", query: "Bengaluru" },
  { label: "Pune (Chakan / Bhosari)", query: "Pune" },
  { label: "Mumbai & Thane (BKC)", query: "Mumbai" },
  { label: "Delhi NCR (Manesar / Noida)", query: "Gurugram" },
  { label: "Chennai (Sriperumbudur / Ambattur)", query: "Chennai" },
  { label: "Gujarat (Sanand / Dahej)", query: "Sanand" },
  { label: "Odisha (Kalinganagar / Paradeep)", query: "Kalinganagar" },
  { label: "Hyderabad (HITEC City)", query: "Hyderabad" },
  { label: "Kolkata (Salt Lake / Howrah)", query: "Kolkata" },
];

export default function LocationDirectoryClient({
  cities,
  states,
  services,
}: Props) {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedTier, setSelectedTier] = useState<"all" | "1" | "2">("all");

  const filteredCities = useMemo(() => {
    return cities.filter((city) => {
      // State filter
      if (selectedState !== "all" && city.stateSlug !== selectedState) {
        return false;
      }

      // Tier filter
      if (selectedTier !== "all" && city.tier !== Number(selectedTier)) {
        return false;
      }

      // Search query
      if (!search.trim()) return true;
      const query = search.toLowerCase();

      const nameMatch = city.name.toLowerCase().includes(query);
      const stateMatch = city.state.toLowerCase().includes(query);
      const lgdMatch = city.lgdCode.toString().includes(query);
      const clusterMatch = city.clusters.some(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.keyZones.some((z) => z.toLowerCase().includes(query))
      );
      const industryMatch = city.dominantIndustries.some((ind) =>
        ind.toLowerCase().includes(query)
      );

      return nameMatch || stateMatch || lgdMatch || clusterMatch || industryMatch;
    });
  }, [cities, search, selectedState, selectedTier]);

  return (
    <div>
      {/* Search and Filters Bar */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-sm mb-8">
        <div className="grid sm:grid-cols-12 gap-4 items-end">
          {/* Search Input (Takes 5 cols) */}
          <div className="sm:col-span-12 lg:col-span-5">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 mb-1.5 font-bold flex items-center justify-between">
              <span>Search City, Cluster, SEZ or LGD:</span>
              <span className="text-[10px] text-slate-400 font-normal">Real-time filter</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search e.g. Peenya, Chakan, Sanand, BKC, Salt Lake, 521..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#0284c7]/20 focus:outline-none transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 px-1 py-0.5 rounded"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* State Filter (Takes 4 cols) */}
          <div className="sm:col-span-6 lg:col-span-4">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 mb-1.5 font-bold">
              State Jurisdiction:
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#0284c7]/20 focus:outline-none transition-all"
            >
              <option value="all" className="text-slate-900">
                All States &amp; UTs ({states.length})
              </option>
              {states.map((st) => (
                <option key={st.slug} value={st.slug} className="text-slate-900">
                  {st.name} (LGD: {st.lgdStateCode})
                </option>
              ))}
            </select>
          </div>

          {/* Tier Filter (Takes 3 cols) */}
          <div className="sm:col-span-6 lg:col-span-3">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-700 mb-1.5 font-bold">
              Classification Tier:
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedTier("all")}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl border transition-all ${
                  selectedTier === "all"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                All ({cities.length})
              </button>
              <button
                onClick={() => setSelectedTier("1")}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl border transition-all ${
                  selectedTier === "1"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Tier 1
              </button>
              <button
                onClick={() => setSelectedTier("2")}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl border transition-all ${
                  selectedTier === "2"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Tier 2
              </button>
            </div>
          </div>
        </div>

        {/* Quick Corridor Chips */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider font-semibold mr-1 shrink-0">
            Popular Corridors:
          </span>
          {POPULAR_CORRIDORS.map((item) => {
            const isActive =
              (item.query === "" && !search && selectedState === "all") ||
              (item.query !== "" && search.toLowerCase().includes(item.query.toLowerCase()));
            return (
              <button
                key={item.label}
                onClick={() => {
                  setSearch(item.query);
                  setSelectedState("all");
                  setSelectedTier("all");
                }}
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#b80f68] to-[#2e0d82] text-white shadow-xs font-semibold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Results Count & Reset */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Active Coverage: <strong className="text-slate-900 font-mono">{filteredCities.length}</strong> of{" "}
            {cities.length} verified commercial metros &amp; industrial hubs
          </span>
          {(search || selectedState !== "all" || selectedTier !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedState("all");
                setSelectedTier("all");
              }}
              className="text-[#0284c7] font-semibold hover:underline font-mono inline-flex items-center gap-1"
            >
              <span>✕</span> Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Grid of Results */}
      {filteredCities.length === 0 ? (
        <div className="rounded-3xl border border-slate-200/90 bg-white p-12 text-center shadow-sm">
          <p className="text-base font-bold text-slate-900 mb-1">No matching commercial hubs found</p>
          <p className="text-xs text-slate-500 mb-5">
            Try adjusting your search query or reset your jurisdiction filter.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedState("all");
              setSelectedTier("all");
            }}
            className="px-5 py-2 text-xs font-bold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city, idx) => (
            <div
              key={city.slug}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent gradient bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b80f68] via-[#2e0d82] to-[#01adf7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-slate-900 flex items-center gap-2 group-hover:text-[#b80f68] transition-colors">
                      {city.name}
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 group-hover:bg-[#b80f68]/10 group-hover:text-[#b80f68] group-hover:border-[#b80f68]/20 transition-colors">
                        Tier {city.tier}
                      </span>
                    </h3>
                    <Link
                      href={`/locations/${city.stateSlug}`}
                      className="text-xs font-mono text-[#0284c7] hover:underline"
                    >
                      {city.state}
                    </Link>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                      LGD: {city.lgdCode}
                    </span>
                    {city.averageSourcingSLA && (
                      <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded shadow-2xs">
                        {city.averageSourcingSLA} SLA
                      </span>
                    )}
                  </div>
                </div>

                <p className="font-sans text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {city.overview}
                </p>

                {/* Industrial Clusters */}
                <div className="mb-5">
                  <p className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-1.5 font-semibold">
                    Key Industrial Zones &amp; SEZs:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {city.clusters.map((c) => (
                      <span
                        key={c.name}
                        className="text-[10px] font-mono bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200 truncate max-w-full hover:border-slate-300 hover:bg-slate-100 transition-colors"
                        title={c.keyZones.join(", ")}
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service links */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[10px] font-mono uppercase text-slate-400 mb-2 tracking-wider font-semibold">
                  Direct Service Hubs in {city.name}:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}/${city.slug}`}
                      className="text-slate-700 hover:text-[#b80f68] transition-colors truncate font-medium flex items-center gap-1.5 group/link py-0.5"
                    >
                      <span className="text-[#0284c7] group-hover/link:text-[#b80f68] group-hover/link:translate-x-1 transition-all duration-200">
                        →
                      </span>
                      <span>{svc.shortName}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
