"use client";

import { servicesContent, siteConfig } from "@/lib/content";

const s = {
  section: "bg-background section-spacing relative",
  container: "container mx-auto px-6 relative z-10",

  header: "text-center max-w-3xl mx-auto mb-20",
  headline: "font-heading text-4xl sm:text-5xl md:text-6xl text-foreground h2-industrial-center",
  description: "mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto",

  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  gridBottom: "flex flex-wrap justify-center gap-8 mt-8",
  cardBottomWrapper: "w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]",

  card: "bg-card border border-border/30 p-8 card-hover hover:border-primary/60 group h-full relative overflow-hidden transition-all duration-300",
  cardGlow: "absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors",
  
  cardIcon: "icon-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 rounded-xl relative z-10",
  cardIconGlow: "absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  cardIconInner: "text-primary relative z-20",
  
  cardTitle: "font-heading text-2xl text-foreground mb-2 group-hover:text-primary transition-colors",
  cardSubtitle: "text-sm text-primary font-medium tracking-wide uppercase mb-4 opacity-80",
  cardDesc: "text-muted-foreground text-sm leading-relaxed mb-6",

  featureList: "space-y-3 pt-6 border-t border-border/30",
  featureItem: "flex items-start gap-3 text-sm text-muted-foreground",
  featureDot: "w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-primary transition-colors",

  ctaWrapper: "flex justify-center mt-16",
  ctaCard: "bg-primary p-8 md:p-12 flex flex-col items-center justify-center text-center max-w-2xl w-full relative overflow-hidden rounded-sm",
  ctaGlow: "absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500",
  ctaTitle: "font-heading text-3xl md:text-4xl text-primary-foreground mb-4 relative z-10",
  ctaButton: "inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 font-heading text-xl tracking-wider btn-hover hover:bg-foreground hover:text-background shadow-2xl relative z-10",
};

const iconMap: Record<string, string> = {
  FormatPaint: "format_paint",
  Brush: "brush",
  GridOn: "grid_on",
  Home: "home",
  ElectricalServices: "electrical_services",
};

export function ServicesSection() {
  const { services } = servicesContent;
  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3, 5);

  const renderCard = (service: typeof services[0]) => (
    <div key={service.id} className={s.card}>
      <div className={s.cardGlow} />
      <div className={s.cardIcon}>
        <div className={s.cardIconGlow} />
        <span className={`material-symbols-outlined text-3xl ${s.cardIconInner}`}>
          {iconMap[service.icon] || "build"}
        </span>
      </div>
      <h3 className={s.cardTitle}>{service.title}</h3>
      {service.subtitle && <p className={s.cardSubtitle}>{service.subtitle}</p>}
      <p className={s.cardDesc}>{service.description}</p>
      <ul className={s.featureList}>
        {service.features.map((feature, i) => (
          <li key={i} className={s.featureItem}>
            <span className={s.featureDot} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="uslugi" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.headline}>{servicesContent.headline}</h2>
          <p className={s.description}>{servicesContent.description}</p>
        </div>

        {/* Top Row - 3 cards */}
        <div className={s.grid}>
          {topServices.map(renderCard)}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className={s.gridBottom}>
          {bottomServices.map((service) => (
            <div key={service.id} className={s.cardBottomWrapper}>
              {renderCard(service)}
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className={s.ctaWrapper}>
          <div className={s.ctaCard}>
            <div className={s.ctaGlow} />
            <h3 className={s.ctaTitle}>Potrzebujesz wyceny?</h3>
            <a href={siteConfig.phoneHref} className={s.ctaButton}>
              <span className="material-symbols-outlined text-2xl">call</span>
              Zadzwoń: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
