'use client';

import { useState } from 'react';
import type { FAQItem } from '@/data/faq';

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <dl className="divide-y divide-stone-100">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <dt>
              <button
                className="w-full text-left py-5 flex items-center justify-between gap-6 group"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-normal text-stone-800 group-hover:text-stone-600 transition-colors">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 flex items-center justify-center w-5 h-5 border border-stone-300 rounded-full transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className="w-2.5 h-2.5 text-stone-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-stone-500 leading-relaxed pb-5">{item.answer}</p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
