leadfusion/
├─ app/
│  ├─ link-in-bio/
│  │  └─ page.tsx
│  ├─ opengraph-image.tsx
│  ├─ twitter-image.tsx
│  ├─ sitemap.ts
│  ├─ robots.ts
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  └─ Button.tsx
├─ public/
│  └─ logo.svg
├─ styles/
│  └─ globals.css
├─ .gitignore
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ tsconfig.json
{
  "name": "leadfusion",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.429.0",
    "next": "14.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.7",
    "typescript": "^5.4.0"
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};
module.exports = nextConfig;
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2021", "DOM", "DOM.Iterable"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
# Dependencies
node_modules
# Production
.next
out
# Misc
.DS_Store
.env*
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          500: "#2563eb",   // azul moderno
          600: "#1d4ed8",
          900: "#0b1220"
        }
      }
    }
  },
  plugins: []
};
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }
html, body { height: 100%; }
body { @apply bg-[#0b0f17] text-white antialiased; }
.container { @apply mx-auto max-w-7xl px-6; }
.section { @apply py-16 md:py-24; }
.card { @apply rounded-2xl border border-white/10 bg-white/5 backdrop-blur; }
<svg width="160" height="36" viewBox="0 0 160 36" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#60A5FA"/>
      <stop offset="1" stop-color="#22D3EE"/>
    </linearGradient>
  </defs>
  <g fill="url(#g)">
    <rect rx="6" width="36" height="36"/>
    <path d="M11 18h14M18 11v14" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </g>
  <text x="46" y="25" font-size="18" font-family="system-ui,Segoe UI,Inter" fill="white">LeadFusion</text>
</svg>
import type { Metadata, Viewport } from "next";
import "./../styles/globals.css";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leadfusion.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LeadFusion — Agencia de Marketing con IA",
  description: "Creatividad + datos + IA para escalar demanda con leads calificados.",
  openGraph: {
    title: "LeadFusion — Crecimiento con IA",
    description: "Campañas, automatización y analítica para generar demanda predecible.",
    url: siteUrl,
    siteName: "LeadFusion",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "LeadFusion", description: "Crecimiento con IA" }
};

export const viewport: Viewport = { themeColor: "#0b0f17" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="es">
      <body>
        {/* Google Analytics (opcional) */}
        {GA_ID && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <Script id="ga4">{`
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}

        {/* Meta Pixel (opcional) */}
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel">{`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','${META_PIXEL_ID}'); fbq('track','PageView');
            `}</Script>
            <noscript>
              <img height="1" width="1" style={{display:"none"}} src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} />
            </noscript>
          </>
        )}

        {children}
      </body>
    </html>
  );
}
"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href = "#contacto"
}: { children: React.ReactNode; href?: string }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-medium text-white shadow-lg shadow-brand-500/30"
    >
      {children} <ArrowRight className="h-5 w-5" />
    </motion.a>
  );
}
import { Check, LineChart, Rocket, Zap, Mail, Phone } from "lucide-react";
import Button from "@/components/Button";
import { MotionDiv } from "./utils";

export const revalidate = 60;

export default function Page() {
  return (
    <main>
      {/* NAV */}
      <header className="container flex items-center justify-between py-6">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="LeadFusion" className="h-8 w-auto" />
        </a>
        <nav className="hidden gap-8 md:flex">
          <a href="#servicios" className="text-white/80 hover:text-white">Servicios</a>
          <a href="#proceso" className="text-white/80 hover:text-white">Proceso</a>
          <a href="#casos" className="text-white/80 hover:text-white">Resultados</a>
          <a href="#precios" className="text-white/80 hover:text-white">Planes</a>
          <a href="#contacto" className="text-white/80 hover:text-white">Contacto</a>
        </nav>
        <Button href="#contacto">Agendar consultoría</Button>
      </header>

      {/* HERO */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Crece con <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">LeadFusion</span>:
              demanda predecible impulsada por IA
            </h1>
            <p className="mt-5 text-white/70">
              Combinamos creatividad, datos e inteligencia artificial para generar leads calificados,
              optimizar ROAS y construir un motor de crecimiento 24/7.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#contacto">Quiero más leads</Button>
              <a href="#casos" className="text-white/70 underline-offset-4 hover:underline">Ver resultados</a>
            </div>
            <ul className="mt-8 grid grid-cols-3 gap-4 text-sm text-white/70">
              <li className="card p-4"><div className="text-2xl font-semibold">+210%</div>ROAS medio</li>
              <li className="card p-4"><div className="text-2xl font-semibold">-38%</div>CPL promedio</li>
              <li className="card p-4"><div className="text-2xl font-semibold">30 días</div>para ver impacto</li>
            </ul>
          </div>

          <div className="card p-6">
            <div className="grid gap-4">
              <Item icon={<Rocket />} title="Performance Ads" desc="Campañas multicanal enfocadas en resultados." />
              <Item icon={<LineChart />} title="Analítica & CRO" desc="Optimización continua basada en datos." />
              <Item icon={<Zap />} title="Automatización" desc="Flujos con IA para gestión de leads." />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section bg-white/5">
        <div className="container">
          <h2 className="text-3xl font-semibold">Servicios</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Performance Ads", ["Google/Meta Ads", "Lanzamientos y escalado", "Creatividades que convierten"]],
              ["SEO & Contenido", ["Arquitectura SEO", "Contenido con IA", "Backlinks de calidad"]],
              ["Automatización & CRM", ["Lead scoring", "Email/SMS flows", "Integraciones (HubSpot/Make)"]]
            ].map(([t, items]) => (
              <div key={t as string} className="card p-6">
                <h3 className="text-xl font-semibold">{t as string}</h3>
                <ul className="mt-4 space-y-2 text-white/70">
                  {(items as string[]).map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-cyan-300" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="section">
        <div className="container">
          <h2 className="text-3xl font-semibold">Nuestro proceso</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {["Diagnóstico", "Estrategia", "Implementación", "Optimización"].map((p, idx) => (
              <div key={p} className="card p-6">
                <div className="text-2xl font-semibold">{idx + 1}</div>
                <div className="mt-2">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="section bg-white/5">
        <div className="container">
          <h2 className="text-3xl font-semibold">Resultados</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Ecommerce moda", "+260% ventas / 90 días"],
              ["Edtech B2C", "CPL -42% manteniendo volumen"],
              ["SaaS B2B", "Pipeline x3 con lead scoring"]
            ].map(([t, d]) => (
              <div key={t} className="card p-6">
                <div className="text-xl font-semibold">{t}</div>
                <div className="mt-2 text-white/70">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="section">
        <div className="container">
          <h2 className="text-3xl font-semibold">Planes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Launch", "Ideal para validar rápido", "USD 499/mes", ["1 canal de ads", "Reporting mensual", "Automatización básica"]],
              ["Scale", "Para escalar rendimiento", "USD 1,499/mes", ["3 canales", "CRO + contenidos", "Automatización avanzada"]],
              ["Elite", "Crecimiento agresivo", "USD 2,999/mes", ["Multicanal + UGC", "Modelos de atribución", "Soporte prioritario"]]
            ].map(([name, desc, price, feats]) => (
              <div key={name as string} className="card p-6">
                <div className="text-xl font-semibold">{name as string}</div>
                <div className="text-white/70">{desc as string}</div>
                <div className="mt-4 text-3xl font-semibold">{price as string}</div>
                <ul className="mt-4 space-y-2 text-white/70">
                  {(feats as string[]).map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-cyan-300" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section bg-white/5">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Hablemos</h2>
            <p className="mt-2 text-white/70">
              Agenda una consultoría gratuita de 20 minutos. Te mostramos oportunidades y un plan de acción.
            </p>
            <div className="mt-6 space-y-2 text-white/80">
              <div className="flex items-center gap-2"><Mail className="h-5 w-5" /> hola@leadfusion.agency</div>
              <div className="flex items-center gap-2"><Phone className="h-5 w-5" /> +52 55 0000 0000</div>
            </div>
          </div>
          <form
            className="card p-6"
            onSubmit={(e) => { e.preventDefault(); const f=e.currentTarget as HTMLFormElement; f.reset(); alert("¡Gracias! Te contactamos pronto."); }}
          >
            <div className="grid gap-4">
              <input required placeholder="Nombre" className="rounded-xl bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" />
              <input required type="email" placeholder="Email" className="rounded-xl bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" />
              <input placeholder="Sitio web / Instagram" className="rounded-xl bg-white/10 px-4 py-3 outline-none placeholder:text-white/40" />
              <textarea placeholder="Cuéntanos tu objetivo" rows={4} className="rounded-xl bg-white/10 px-4 py-3 outline-none placeholder:text-white/40"></textarea>
              <Button>Enviar</Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container py-10 text-center text-white/60">
        © {new Date().getFullYear()} LeadFusion. Todos los derechos reservados.
      </footer>
    </main>
  );
}

// util ligero para animación si lo quieres usar luego
function Item({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-white/5 p-4">
      <div className="rounded-lg bg-white/10 p-2">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-white/70 text-sm">{desc}</div>
      </div>
    </div>
  );
}
import Button from "@/components/Button";

export const metadata = {
  title: "LeadFusion — Links",
  description: "Todos los accesos rápidos de LeadFusion."
};

export default function LinkInBio() {
  return (
    <main className="container section">
      <div className="mx-auto max-w-xl text-center">
        <img src="/logo.svg" alt="LeadFusion" className="mx-auto h-12 w-auto" />
        <h1 className="mt-6 text-3xl font-semibold">Recursos rápidos</h1>
        <div className="mt-8 grid gap-4">
          <a className="card p-4 text-center hover:bg-white/10" href="/">Sitio principal</a>
          <a className="card p-4 text-center hover:bg-white/10" href="#servicios">Servicios</a>
          <a className="card p-4 text-center hover:bg-white/10" href="#casos">Resultados</a>
          <Button href="/#contacto">Agendar consultoría</Button>
        </div>
      </div>
    </main>
  );
}
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg,#0b1220,#111827)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 64,
          fontFamily: "system-ui, Segoe UI"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 28, opacity: 0.7, marginBottom: 8 }}>Agencia de Marketing</div>
          <div><b>LeadFusion</b></div>
          <div style={{ fontSize: 24, marginTop: 12, opacity: 0.85 }}>
            Creatividad + Datos + IA
          </div>
        </div>
      </div>
    ),
    size
  );
}
export { contentType, size } from "./opengraph-image";
import OG from "./opengraph-image";
export default OG;
export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://leadfusion.vercel.app";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/link-in-bio`, lastModified: now }
  ];
}
export default function robots() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://leadfusion.vercel.app";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}
