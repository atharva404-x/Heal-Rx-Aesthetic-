import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className={`divide-y divide-theme-border border-y border-theme-border ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="py-5 sm:py-6 group transition-colors">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-start justify-between text-left focus:outline-none focus:ring-2 focus:ring-theme-accent/40 rounded-lg py-1"
              aria-expanded={isOpen}
            >
              <div className="flex items-start pr-4">
                <span className="text-xs font-mono text-theme-accent font-medium mr-4 mt-1">
                  0{index + 1}
                </span>
                <span className="font-serif text-lg sm:text-xl text-theme-fg group-hover:text-theme-accent transition-colors">
                  {item.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`p-1.5 rounded-full border border-theme-border flex-shrink-0 transition-colors ${
                  isOpen
                    ? 'bg-theme-accent text-white'
                    : 'bg-theme-surface-elevated text-theme-fg-muted group-hover:text-theme-accent'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-1 pl-8 sm:pl-9 pr-4 text-theme-fg-muted text-sm sm:text-base leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
