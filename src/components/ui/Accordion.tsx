import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev => 
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-stone-200/80 border-y border-stone-200/80 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="py-5 sm:py-6 group">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-start justify-between text-left focus:outline-none focus:ring-2 focus:ring-gold-500/50 rounded-lg py-1"
              aria-expanded={isOpen}
            >
              <div className="flex items-start pr-4">
                <span className="text-xs font-mono text-gold-500 font-medium mr-4 mt-1">
                  0{index + 1}
                </span>
                <span className="font-serif text-lg sm:text-xl text-charcoal-900 group-hover:text-gold-700 transition-colors">
                  {item.question}
                </span>
              </div>
              <div className={`p-1.5 rounded-full bg-ivory-200 text-charcoal-700 group-hover:bg-gold-100 group-hover:text-gold-800 transition-transform duration-300 flex-shrink-0 ${
                isOpen ? 'rotate-180 bg-gold-200 text-gold-900' : ''
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="mt-3 pl-8 pr-4 text-stone-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
