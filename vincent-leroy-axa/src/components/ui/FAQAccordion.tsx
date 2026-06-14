"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  withSchema?: boolean;
}

export default function FAQAccordion({ items, withSchema = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-brand-gray-200 rounded-lg overflow-hidden"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-brand-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-brand-blue-dark pr-4" itemProp="name">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div
                className="px-5 pb-5 text-brand-gray-600 leading-relaxed text-sm"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{item.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
