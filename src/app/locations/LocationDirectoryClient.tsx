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
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm mb-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {/* Search Input */}
          <div className="sm:col-span-1">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-semibold">
              Search City, Cluster or LGD:
            </label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. Hinjawadi, BKC, Salt Lake, 521..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0284c7] focus:bg-white focus:ring-1 focus:ring-[#0284c7]/30 focus:outline-none transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* State Filter */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-semibold">
              State Jurisdiction:
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#0284c7] focus:bg-white focus:ring-1 focus:ring-[#0284c7]/30 focus:outline-none transition-colors"
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

          {/* Tier Filter */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-semibold">
              Classification Tier:
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedTier("all")}
                className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                  selectedTier === "all"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                All ({cities.length})
              </button>
              <button
                onClick={() => setSelectedTier("1")}
                className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                  selectedTier === "1"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Tier 1
              </button>
              <button
                onClick={() => setSelectedTier("2")}
                className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
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

        {/* Results Count & Reset */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            Active Coverage: <strong className="text-slate-900 font-mono">{filteredCities.length}</strong> of{" "}
            {cities.length} verified commercial metros
          </span>
          {(search || selectedState !== "all" || selectedTier !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedState("all");
                setSelectedTier("all");
              }}
              className="text-[#0284c7] font-semibold hover:underline font-mono"
            >
              Reset Filters
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
          {filteredCities.map((city) => (
            <div
              key={city.slug}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-slate-900 flex items-center gap-2 group-hover:text-[#b80f68] transition-colors">
                      {city.name}
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
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
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                    LGD: {city.lgdCode}
                  </span>
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
                        className="text-[10px] font-mono bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200 truncate max-w-full"
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
                      className="text-slate-700 hover:text-[#b80f68] transition-colors truncate font-medium flex items-center gap-1.5"
                    >
                      <span className="text-[#0284c7]">→</span>
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
