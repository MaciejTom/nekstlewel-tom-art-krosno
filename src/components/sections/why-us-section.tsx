"use client";

import Image from "next/image";
import { whyUsContent } from "@/lib/content";

const s = {
  section: "bg-background py-20 md:py-24 relative overflow-hidden",

  // Background grid
  bgGrid: "absolute inset-0 z-0 opacity-[0.03]",

  container: "container mx-auto px-6 relative z-10",

  header: "text-center mb-16 max-w-3xl mx-auto",
  headerLabel: "text-primary font-heading text-sm tracking-widest uppercase mb-4 block",
  headline: "text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6 tracking-tight",
  headlineAccent: "text-primary",
  description: "text-muted-foreground text-lg leading-relaxed",

  grid: "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12",

  // Card
  card: "group relative p-6 flex flex-col items-center text-center transition-all duration-300",
  cardLine: "absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",

  // Icon container
  iconWrapper: "relative w-40 h-40 md:w-48 md:h-48 mb-6 flex items-center justify-center",
  iconGlow: "absolute inset-0 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  iconInner: "relative w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-105",

  // Fallback icon (material symbols)
  iconFallback: "w-32 h-32 md:w-40 md:h-40 bg-card border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary",
  iconFallbackSymbol: "text-6xl md:text-7xl text-primary",

  cardTitle: "font-heading text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors",
  cardDesc: "text-muted-foreground text-sm leading-relaxed mb-4",

  // Memorable quote
  cardMemorable: "mt-auto pt-4 border-t border-border/50",
  cardMemorableText: "text-primary font-heading text-xs md:text-sm tracking-wide",

  // CTA
  ctaWrapper: "mt-16 text-center",
  ctaButton: "inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 font-heading text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300",
};

// Map features to icons
const featureIcons: Record<string, string | null> = {
  "Call": "/icon-phone.png",
  "Layers": null, // Use material symbol
  "LocationOn": "/icon-location.png",
};

const materialIcons: Record<string, string> = {
  "Layers": "layers",
};

export function WhyUsSection() {
  return (
    <section id="dlaczego" className={s.section}>
      {/* Background Grid */}
      <div
        className={s.bgGrid}
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <span className={s.headerLabel}>Dlaczego ja?</span>
          <h2 className={s.headline}>
            {whyUsContent.headline.split("?")[0]}
            <span className={s.headlineAccent}>?</span>
          </h2>
          <p className={s.description}>
            Jeden wykonawca. Jedna odpowiedzialność. Zero "to nie moja działka".
          </p>
        </div>

        {/* Features Grid */}
        <div className={s.grid}>
          {whyUsContent.features.map((feature, i) => {
            const iconImage = featureIcons[feature.icon];
            const materialIcon = materialIcons[feature.icon];

            return (
              <div key={i} className={s.card}>
                {/* Top accent line */}
                <div className={s.cardLine} />

                {/* Icon */}
                <div className={s.iconWrapper}>
                  <div className={s.iconGlow} />
                  {iconImage ? (
                    <div className={s.iconInner}>
                      <Image
                        src={iconImage}
                        alt={feature.title}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className={s.iconFallback}>
                      <span className={`material-symbols-outlined ${s.iconFallbackSymbol}`}>
                        {materialIcon || "check_circle"}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className={s.cardTitle}>{feature.title}</h3>
                <p className={s.cardDesc}>{feature.description}</p>

                {/* Memorable */}
                {feature.memorable && (
                  <div className={s.cardMemorable}>
                    <p className={s.cardMemorableText}>"{feature.memorable}"</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={s.ctaWrapper}>
          <a href="#kontakt" className={s.ctaButton}>
            <span className="material-symbols-outlined text-lg">call</span>
            Zadzwoń teraz
          </a>
        </div>
      </div>
    </section>
  );
}
