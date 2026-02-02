"use client";

import { servicesContent, siteConfig } from "@/lib/content";

const s = {
  section: "bg-background section-spacing",
  container: "container mx-auto px-6",

  header: "text-center max-w-2xl mx-auto mb-12",
  headline: "font-heading text-3xl sm:text-4xl md:text-5xl text-foreground h2-bar-center",
  description: "mt-6 text-muted-foreground",

  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",

  card: "bg-card border border-border p-6 md:p-8 card-hover",
  cardHeader: "flex items-start justify-between mb-4",
  cardIcon: "w-12 h-12 bg-primary flex items-center justify-center",
  cardNumber: "font-heading text-4xl text-border",

  cardTitle: "font-heading text-xl md:text-2xl text-foreground mb-1",
  cardSubtitle: "text-sm text-primary uppercase tracking-wide mb-3",
  cardDesc: "text-muted-foreground text-sm mb-6",

  featureList: "space-y-2 pt-4 border-t border-border",
  featureItem: "flex items-start gap-2 text-sm text-muted-foreground",

  ctaSection: "mt-12",
  ctaCard: "bg-primary p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6",
  ctaText: "text-center md:text-left",
  ctaTitle: "font-heading text-2xl md:text-3xl text-primary-foreground",
  ctaSubtitle: "text-primary-foreground/80",
  ctaButton: "inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 font-heading text-lg tracking-wide hover:bg-foreground hover:text-background transition-colors",
};

const iconMap: Record<string, string> = {
  FormatPaint: "format_paint",
  Home: "home",
  Construction: "construction",
  Villa: "villa",
};

export function ServicesSection() {
  const { services } = servicesContent;

  return (
    <section id="uslugi" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <h2 className={s.headline}>{servicesContent.headline}</h2>
          <p className={s.description}>{servicesContent.description}</p>
        </div>

        <div className={s.grid}>
          {services.map((service, index) => (
            <div key={service.id} className={s.card}>
              <div className={s.cardHeader}>
                <div className={s.cardIcon}>
                  <span className="material-symbols-outlined text-2xl text-primary-foreground">
                    {iconMap[service.icon] || "build"}
                  </span>
                </div>
                <span className={s.cardNumber}>0{index + 1}</span>
              </div>

              <h3 className={s.cardTitle}>{service.title}</h3>
              {service.subtitle && <p className={s.cardSubtitle}>{service.subtitle}</p>}
              <p className={s.cardDesc}>{service.description}</p>

              <ul className={s.featureList}>
                {service.features.map((feature, i) => (
                  <li key={i} className={s.featureItem}>
                    <span className="material-symbols-outlined text-primary text-base">check</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={s.ctaSection}>
          <div className={s.ctaCard}>
            <div className={s.ctaText}>
              <h3 className={s.ctaTitle}>Potrzebujesz wyceny?</h3>
              <p className={s.ctaSubtitle}>Przyjadę, obejrzę, wycenię konkretnie.</p>
            </div>
            <a href={siteConfig.phoneHref} className={s.ctaButton}>
              <span className="material-symbols-outlined text-xl">call</span>
              Zadzwoń: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
