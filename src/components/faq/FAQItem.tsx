"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem as FAQItemType } from "@/data/faq-data";

interface FAQItemProps {
  item: FAQItemType;
  defaultOpen?: boolean;
  index: number;
}

export default function FAQItem({ item, defaultOpen = false, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div 
      className={cn(
        "group relative overflow-hidden",
        "border-b border-gray-100 last:border-0",
        "transition-all duration-300",
        isOpen && "bg-gradient-to-r from-seayeen-50/30 via-transparent to-transparent"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-start justify-between px-8 py-6",
          "text-left transition-all duration-300",
          "hover:px-10",
          isOpen ? "bg-transparent" : "hover:bg-gray-50/50"
        )}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <div className="flex items-start gap-4 pr-4 flex-1">
          <div 
            className={cn(
              "mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center",
              "rounded-lg transition-all duration-300",
              isOpen 
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25 scale-110" 
                : "bg-gray-100 text-gray-600"
            )}
          >
            <span className="text-sm font-semibold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="flex-1">
            <h3 className={cn(
              "text-base font-medium leading-relaxed",
              "transition-colors duration-300",
              isOpen ? "text-brand-dark" : "text-gray-800 group-hover:text-gray-900"
            )}>
              {item.question}
            </h3>
          </div>
        </div>
        <div 
          className={cn(
            "mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center",
            "rounded-full transition-all duration-500",
            isOpen 
              ? "bg-brand-primary text-white rotate-180 shadow-md" 
              : "bg-gray-200 text-gray-600 group-hover:bg-seayeen-100 group-hover:text-brand-primary"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>
      
      <div
        id={`faq-answer-${item.id}`}
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-8 pb-6 pl-20 pr-12">
          <p className="text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
      
      {/* Accent line */}
      <div 
        className={cn(
          "absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-brand-primary to-seayeen-600",
          "transition-all duration-500",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}