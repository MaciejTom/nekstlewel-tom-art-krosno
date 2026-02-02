"use client";

import { siteConfig, navItems } from "@/lib/content";

const s = {
  footer: "bg-background border-t border-border/20",
  container: "container mx-auto px-6",

  // Main grid - compact single row on desktop
  main: "py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6",

  // Logo - minimal
  logo: "flex items-center gap-2 group",
  logoBox: "w-8 h-8 bg-primary flex items-center justify-center transition-transform group-hover:scale-105",
  logoLetter: "font-heading text-sm text-primary-foreground",
  logoText: "font-heading text-lg text-foreground",

  // Nav - horizontal, subtle
  nav: "flex flex-wrap justify-center gap-6",
  navLink: "text-sm text-muted-foreground/70 hover:text-primary transition-colors",

  // Contact inline
  contact: "flex items-center gap-4 text-sm",
  contactLink: "flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors",
  contactIcon: "text-primary text-base",

  // Bottom bar - copyright
  bottom: "py-4 border-t border-border/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/50",
};

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        {/* Main Row */}
        <div className={s.main}>
          {/* Logo */}
          <a href="/" className={s.logo}>
            <div className={s.logoBox}>
              <span className={s.logoLetter}>T</span>
            </div>
            <span className={s.logoText}>TOM-ART</span>
          </a>

          {/* Navigation */}
          <nav className={s.nav}>
            {navItems.map((item, i) => (
              <a key={i} href={item.href} className={s.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className={s.contact}>
            <a href={siteConfig.phoneHref} className={s.contactLink}>
              <span className={`material-symbols-outlined ${s.contactIcon}`}>call</span>
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className={s.bottom}>
          <span>&copy; {year} {siteConfig.name} · {siteConfig.owner}</span>
          <span>{siteConfig.address} · NIP: {siteConfig.nip}</span>
        </div>
      </div>
    </footer>
  );
}
