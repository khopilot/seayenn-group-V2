import type { FAQCategory as FAQCategoryType } from "@/data/faq-data";
import FAQItem from "./FAQItem";
import { cn } from "@/lib/utils";

interface FAQCategoryProps {
  category: FAQCategoryType;
  categoryIndex: number;
}

export default function FAQCategory({ category, categoryIndex }: FAQCategoryProps) {
  const startIndex = categoryIndex === 0 ? 0 : 
    categoryIndex === 1 ? 4 : 10; // Adjust based on actual item counts

  return (
    <div 
      className="mb-16"
    >
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className={cn(
            "h-1 w-12 rounded-full",
            categoryIndex === 0 ? "bg-brand-primary" : "bg-gray-400"
          )} />
          <h2 className="text-2xl font-karnchang uppercase font-bold text-brand-dark">
            {category.title}
          </h2>
        </div>
        <p className="mt-3 ml-16 text-gray-600">
          {category.description}
        </p>
      </div>
      
      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow duration-300">
        {category.items.map((item, index) => (
          <FAQItem 
            key={item.id} 
            item={item} 
            defaultOpen={categoryIndex === 0 && index === 0} 
            index={startIndex + index}
          />
        ))}
      </div>
    </div>
  );
}