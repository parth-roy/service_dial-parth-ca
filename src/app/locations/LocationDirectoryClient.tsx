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
      <div className="rounded-lg border border-sd-border bg-white p-5 shadow-xs mb-8">
        <div className="grid sm:grid-cols-3 gap-3">
          {/* Search Input */}
          <div className="sm:col-span-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-sd-muted mb-1">
              Search City, Cluster or LGD:
            </label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. Hinjawadi, BKC, SEZ, 521..."
                className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text placeholder-sd-muted-2 focus:border-sd-pink/60 focus:bg-white focus:outline-none transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-2 text-xs text-sd-muted hover:text-sd-text"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* State Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-sd-muted mb-1">
              Filter by State Jurisdiction:
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full rounded border border-sd-border bg-sd-bg-2 px-3 py-2 text-xs text-sd-text focus:border-sd-pink/60 focus:bg-white focus:outline-none transition-colors"
            >
              <option value="all">All States & UTs ({states.length})</option>
              {states.map((st) => (
                <option key={st.slug} value={st.slug}>
                  {st.name} (LGD: {st.lgdStateCode})
                </option>
              ))}
            </select>
          </div>

          {/* Tier Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-sd-muted mb-1">
              Classification Tier:
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedTier("all")}
                className={`flex-1 py-2 text-xs rounded border transition-colors ${
                  selectedTier === "all"
                    ? "bg-sd-pink text-white border-sd-pink font-semibold"
                    : "bg-sd-bg-2 border-sd-border text-sd-muted hover:text-sd-text"
                }`}
              >
                All ({cities.length})
              </button>
              <button
                onClick={() => setSelectedTier("1")}
                className={`flex-1 py-2 text-xs rounded border transition-colors ${
                  selectedTier === "1"
                    ? "bg-sd-pink text-white border-sd-pink font-semibold"
                    : "bg-sd-bg-2 border-sd-border text-sd-muted hover:text-sd-text"
                }`}
              >
                Tier 1
              </button>
              <button
                onClick={() => setSelectedTier("2")}
                className={`flex-1 py-2 text-xs rounded border transition-colors ${
                  selectedTier === "2"
                    ? "bg-sd-pink text-white border-sd-pink font-semibold"
                    : "bg-sd-bg-2 border-sd-border text-sd-muted hover:text-sd-text"
                }`}
              >
                Tier 2
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-3 pt-3 border-t border-sd-border flex items-center justify-between text-xs text-sd-muted">
          <span>
            Showing <strong className="text-sd-text">{filteredCities.length}</strong> of{" "}
            {cities.length} verified commercial metros
          </span>
          {(search || selectedState !== "all" || selectedTier !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedState("all");
                setSelectedTier("all");
              }}
              className="text-sd-pink hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Grid of Results */}
      {filteredCities.length === 0 ? (
        <div className="rounded-lg border border-sd-border bg-white p-12 text-center">
          <p className="text-base font-bold text-sd-text mb-1">No matching locations found</p>
          <p className="text-xs text-sd-muted mb-4">
            Try searching for another commercial district or clearing your active filters.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedState("all");
              setSelectedTier("all");
            }}
            className="px-4 py-2 text-xs font-semibold bg-sd-pink text-white rounded hover:bg-sd-pink-dark transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCities.map((city) => (
            <div
              key={city.slug}
              className="rounded-lg border border-sd-border bg-white p-6 shadow-xs hover:border-sd-pink/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-sd-text flex items-center gap-2">
                      {city.name}
                      <span className="text-[10px] font-semibold uppercase text-sd-pink bg-sd-pink/5 border border-sd-pink/20 px-1.5 py-0.2 rounded">
                        Tier {city.tier}
                      </span>
                    </h3>
                    <Link
                      href={`/locations/${city.stateSlug}`}
                      className="text-xs font-medium text-sd-pink hover:underline"
                    >
                      {city.state}
                    </Link>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-sd-bg-2 text-sd-muted border border-sd-border px-1.5 py-0.5 rounded">
                    LGD: {city.lgdCode}
                  </span>
                </div>

                <p className="text-xs text-sd-muted leading-relaxed mb-4 line-clamp-3">
                  {city.overview}
                </p>

                {/* Clusters */}
                <div className="mb-4">
                  <p className="text-[11px] font-semibold text-sd-text uppercase tracking-wider mb-1.5">
                    Key Industrial Zones:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {city.clusters.map((c) => (
                      <span
                        key={c.name}
                        className="text-[11px] bg-sd-bg-2 text-sd-muted px-2 py-0.5 rounded border border-sd-border truncate max-w-full"
                        title={c.keyZones.join(", ")}
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service links */}
              <div className="pt-4 border-t border-sd-border">
                <p className="text-[10px] uppercase font-bold text-sd-muted mb-2 tracking-wider">
                  Direct Service Hubs in {city.name}:
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}/${city.slug}`}
                      className="text-sd-text hover:text-sd-pink transition-colors truncate font-medium hover:underline flex items-center gap-1"
                    >
                      <span className="text-sd-pink">→</span>
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
