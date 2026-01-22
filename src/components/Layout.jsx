import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BRAND, MAPS_IFRAME_SRC, MAPS_URL } from "../data/config";
import Button from "./Button";
import { cx } from "./utils";

function TopNav() {
  const items = [
    { to: "/", label: "Home" },
    { to: "/uzywane", label: "Używane urządzenia" },
    { to: "/serwis", label: "Serwis" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-900/10">
      <div className="mx-auto max-w-6xl px-4 py-3 md:py-4 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-4">
          <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 overflow-hidden flex items-center justify-center rounded-2xl">
            <img
              src="/logo/logo-icon.png"
              alt="macmobile logo"
              className="h-full w-full object-cover scale-[1.95] sm:scale-[1.85]"
            />
          </div>
          <div>
            <div className="font-black leading-6 text-zinc-950 text-xl sm:text-2xl">{BRAND.name}</div>
            <div className="text-sm text-zinc-500 hidden sm:block max-w-[520px] whitespace-nowrap overflow-hidden text-ellipsis">
              {BRAND.tagline} — {BRAND.city}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-3">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                cx(
                  "px-4 py-2 rounded-2xl text-sm font-bold transition whitespace-nowrap",
                  isActive
                    ? "bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-[0_12px_34px_rgba(37,99,235,0.18)]"
                    : "text-zinc-700 hover:bg-sky-600/10 hover:text-sky-900"
                )
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+48725394168"
            className="hidden sm:inline-flex"
          >
            <Button variant="soft">
              Szybki czat
            </Button>
          </a>
          <Link to="/uzywane">
            <Button variant="primary">Zobacz ofertę</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const items = [
    { to: "/", label: "Start" },
    { to: "/uzywane", label: "Katalog" },
    { to: "/serwis", label: "Serwis" },
    { to: "/kontakt", label: "Kontakt" },
  ];
  return (
    <div className="md:hidden fixed bottom-3 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white/90 backdrop-blur-xl ring-1 ring-sky-600/15 p-2 flex justify-between shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) =>
              cx(
                "flex-1 rounded-2xl px-3 py-2 text-xs font-black transition text-center",
                isActive ? "bg-gradient-to-r from-sky-600 to-indigo-600 text-white" : "text-zinc-700"
              )
            }
          >
            {it.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-900/10 bg-white/80 backdrop-blur-xl text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-black text-zinc-900">{BRAND.name} • {BRAND.city}</div>
            <p className="mt-2 text-sm text-zinc-600">
              Serwis i sprzedaż sprawdzonych urządzeń Apple. Uczciwy stan, gwarancja i szybki kontakt.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-600/10 px-4 py-2 text-sm font-semibold text-sky-900 ring-1 ring-sky-600/20 hover:bg-sky-600/15"
              >
                Otwórz mapę
              </a>
              <button
                onClick={() => alert("Kontakt (demo): Telegram / WhatsApp")}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.25)] hover:from-sky-700 hover:to-indigo-700"
              >
                Napisz wiadomość
              </button>
            </div>
          </div>

          <div className="text-sm text-zinc-600 space-y-1">
            <div>
              📍 Adres:
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="ml-1 font-semibold text-sky-700 hover:underline"
              >
                Warszawa, Wola, ul. Jana Kazimierza 11A
              </a>
            </div>
            <div>🕒 Poniedziałek–Piątek: 10:00–18:00</div>
            <div>
              📞 Telefon:
              <a
                href="tel:+48725394168"
                className="ml-1 font-semibold text-sky-700 hover:underline"
              >
                +48 725 394 168
              </a>
            </div>
            <div>
              💬 Telegram / WhatsApp:
              <a
                href="https://t.me/macmobile"
                target="_blank"
                rel="noreferrer"
                className="ml-1 font-semibold text-sky-700 hover:underline"
              >
                @macmobile
              </a>
            </div>
            <div>
              ✉️ Email:
              <a
                href="mailto:serwis@macmobile.pl"
                className="ml-1 font-semibold text-sky-700 hover:underline"
              >
                serwis@macmobile.pl
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-widest text-zinc-600 uppercase">
              mapa (podgląd)
            </div>
            <div className="mt-3 overflow-hidden rounded-3xl ring-1 ring-sky-600/15 bg-white">
              <div className="aspect-[16/10]">
                <iframe
                  title="Mapa macmobile (mini)"
                  src={MAPS_IFRAME_SRC}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} {BRAND.name}. Wszystkie prawa zastrzeżone.</div>
          <div className="text-zinc-400">Polityka prywatności • Gwarancja • Regulamin</div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <TopNav />

      <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="h-[560px] bg-gradient-to-b from-white via-white to-[#f7f7ff]" />
          {/* kolorowe “glow” plamy */}
          <div className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-[70px]" />
          <div className="pointer-events-none absolute top-24 -right-44 h-[520px] w-[520px] rounded-full bg-indigo-500/12 blur-[85px]" />
          <div className="pointer-events-none absolute bottom-[-220px] left-1/3 h-[520px] w-[520px] rounded-full bg-emerald-400/12 blur-[95px]" />
          {/* delikatna siatka */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#111_1px,transparent_1px)] [background-size:18px_18px]" />
        </div>
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
      </div>

      <MobileNav />
      <Footer />
    </div>
  );
}
