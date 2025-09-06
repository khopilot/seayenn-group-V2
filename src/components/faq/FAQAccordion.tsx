"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { faqData, searchFAQs } from "@/data/faq-data";
import FAQCategory from "./FAQCategory";
import FAQItem from "./FAQItem";
import { cn } from "@/lib/utils";

export default function FAQAccordion() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return { type: "categories" as const, data: faqData };
    }

    const searchResults = searchFAQs(searchQuery);
    return { type: "search" as const, data: searchResults };
  }, [searchQuery]);

  return (
    <div className="mx-auto max-w-4xl">
      {/* Search Bar */}
      <div className="mb-12">
        <div className={cn(
          "relative transition-all duration-300",
          isFocused && "scale-[1.01]"
        )}>
          <div className={cn(
            "absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary to-seayeen-600 opacity-0 blur-xl transition-opacity duration-300",
            isFocused && "opacity-20"
          )} />
          
          <div className="relative">
            <Search className={cn(
              "absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors duration-300",
              isFocused ? "text-brand-primary" : "text-gray-400"
            )} />
            
            <input
              type="text"
              placeholder="Type your question here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                "w-full rounded-xl border-2 bg-white py-4 pl-12 pr-12",
                "text-base placeholder:text-gray-400",
                "transition-all duration-300",
                "focus:outline-none",
                isFocused 
                  ? "border-brand-primary shadow-lg shadow-brand-primary/10" 
                  : "border-gray-200 hover:border-gray-300 shadow-sm"
              )}
            />
            
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredData.type === "categories" ? (
        <div>
          {faqData.map((category, index) => (
            <FAQCategory 
              key={category.id} 
              category={category} 
              categoryIndex={index}
            />
          ))}
        </div>
      ) : (
        <div>
          {filteredData.data.length > 0 ? (
            <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
              <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-6 py-4">
                <p className="text-sm font-medium text-gray-700">
                  Found {filteredData.data.length} matching question{filteredData.data.length !== 1 ? "s" : ""}
                </p>
              </div>
              {filteredData.data.map((item, index) => (
                <FAQItem key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-white p-16 text-center shadow-sm ring-1 ring-gray-100">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <Search className="h-7 w-7 text-gray-400" />
              </div>
              <p className="text-lg font-medium text-gray-900">No matching questions found</p>
              <p className="mt-2 text-sm text-gray-600">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}