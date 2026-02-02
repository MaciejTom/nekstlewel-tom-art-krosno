"use client";

import Image from "next/image";
import { portfolioContent, siteConfig } from "@/lib/content";

const s = {
  section: "bg-secondary section-spacing relative",
  container: "container mx-auto px-6",

  header: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8",
  headline: "font-heading text-4xl sm:text-5xl md:text-6xl text-foreground h2-industrial",
  description: "text-muted-foreground max-w-lg mt-6 leading-relaxed text-lg",

  grid: "grid grid-cols-1 md:grid-cols-2 gap-8",

  card: "relative group overflow-hidden aspect-[4/3] bg-card border border-border/20 hover:border-primary/50 transition-colors transition-shadow duration-500 ease-out rounded-sm shadow-lg hover:shadow-2xl",
  cardImageWrapper: "absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform",
  cardImage: "object-cover",
  cardOverlay: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 ease-out",
  cardContent: "absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out",
  cardTitle: "font-heading text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500 ease-out",
  cardDesc: "text-sm text-gray-300 leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out line-clamp-2",
  cardTags: "flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100",
  cardTag: "px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30 backdrop-blur-sm",

  cta: "mt-20 text-center",
  ctaButton: "inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-6 font-heading text-xl tracking-wider btn-hover animate-glow-pulse shadow-xl hover:shadow-primary/20",
};

export function PortfolioSection() {
  return (
    <section id="realizacje" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <div>
            <h2 className={s.headline}>{portfolioContent.headline}</h2>
            <p className={s.description}>{portfolioContent.description}</p>
          </div>
        </div>

        {/* Grid */}
        <div className={s.grid}>
          {portfolioContent.items.map((item) => (
            <div key={item.id} className={s.card}>
              <div className={s.cardImageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={s.cardImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className={s.cardOverlay} />
              <div className={s.cardContent}>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardDesc}>{item.description}</p>
                <div className={s.cardTags}>
                  {item.tags.map((tag, i) => (
                    <span key={i} className={s.cardTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={s.cta}>
          <a href={siteConfig.phoneHref} className={s.ctaButton}>
            <span className="material-symbols-outlined text-3xl">call</span>
            {portfolioContent.cta.label}: {portfolioContent.cta.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
