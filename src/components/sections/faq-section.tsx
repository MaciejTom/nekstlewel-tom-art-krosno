"use client";

import { useState } from "react";
import { faqContent } from "@/lib/content";

const s = {
  section: "bg-background section-spacing",
  container: "container mx-auto px-6",

  header: "text-center mb-14",
  headline: "font-heading text-3xl md:text-4xl lg:text-5xl text-foreground h2-industrial-center",

  items: "max-w-3xl mx-auto space-y-3",
  item: "border border-border/30 bg-card overflow-hidden transition-all duration-300 hover:border-border/50",
  itemOpen: "border-primary/50 shadow-lg shadow-primary/5",

  question: "w-full flex justify-between items-center p-5 md:p-6 text-left cursor-pointer hover:bg-secondary/30 transition-colors",
  questionText: "font-heading text-base md:text-lg text-foreground pr-4 transition-colors",
  questionTextOpen: "text-primary",
  questionIcon: "w-9 h-9 md:w-10 md:h-10 bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300",
  questionIconOpen: "bg-primary rotate-180",
  questionIconInner: "text-primary transition-transform duration-300",
  questionIconInnerOpen: "text-primary-foreground",

  // Animated answer wrapper
  answerWrapper: "grid transition-all duration-300 ease-out",
  answerWrapperClosed: "grid-rows-[0fr] opacity-0",
  answerWrapperOpen: "grid-rows-[1fr] opacity-100",
  answerInner: "overflow-hidden",
  answer: "px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed text-base border-t border-border/20 pt-4",
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.headline}>{faqContent.headline}</h2>
        </div>

        {/* FAQ Items */}
        <div className={s.items}>
          {faqContent.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${s.item} ${isOpen ? s.itemOpen : ""}`}
                style={{
                  animationDelay: `${i * 50}ms`,
                }}
              >
                <button
                  className={s.question}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`${s.questionText} ${isOpen ? s.questionTextOpen : ""}`}>
                    {item.question}
                  </span>
                  <div className={`${s.questionIcon} ${isOpen ? s.questionIconOpen : ""}`}>
                    <span
                      className={`material-symbols-outlined text-xl ${isOpen ? s.questionIconInnerOpen : s.questionIconInner}`}
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      expand_more
                    </span>
                  </div>
                </button>

                {/* Animated answer */}
                <div className={`${s.answerWrapper} ${isOpen ? s.answerWrapperOpen : s.answerWrapperClosed}`}>
                  <div className={s.answerInner}>
                    <div className={s.answer}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
