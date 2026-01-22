import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Pill from "../components/Pill";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import Stat from "../components/Stat";
import ProductCard from "../components/ProductCard";
import { BRAND } from "../data/config";
import { CATEGORIES, PRODUCTS } from "../data/products";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <Card className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="neutral">Kontrola przed sprzedażą</Pill>
            <Pill tone="good">Gwarancja do 6 miesięcy</Pill>
            <Pill tone="info">Odkup / trade‑in</Pill>
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-zinc-950">
            Apple jak nowe — <span className="text-zinc-500">bez przepłacania.</span>
          </h1>
          <p className="mt-3 text-zinc-600 max-w-xl">
            {BRAND.name} w {BRAND.city}: serwis oraz sprzedaż sprawdzonych MacBooków,
            iPhone’ów i iPadów. Uczciwy stan, transparentna bateria, realna gwarancja.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link to="/uzywane">
              <Button variant="primary">Przejdź do katalogu</Button>
            </Link>
            <Link to="/serwis">
              <Button variant="soft">Usługi serwisowe</Button>
            </Link>
            <Button variant="ghost" onClick={() => alert("Cennik (demo) — dodamy później")}>
              Cennik
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Stat label="Szybkość" value="1–2 dni" hint="typowe naprawy" />
            <Stat label="Kontrola" value="Checklist" hint="ekran • aparat • Face ID" />
            <Stat label="Uczciwość" value="Battery %" hint="bez niespodzianek" />
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <SectionTitle
            eyebrow="kategorie"
            title="Najczęściej wybierane"
            desc="Wybierz kategorię — pokażemy najlepsze opcje z dostępnych."
          />
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                to={`/uzywane/${c.toLowerCase()}`}
                className="text-left rounded-3xl bg-white ring-1 ring-sky-600/15 hover:ring-sky-600/25 hover:shadow-[0_18px_55px_rgba(37,99,235,0.12)] transition p-4"
              >
                <div className="text-sm text-zinc-600">{c}</div>
                <div className="mt-2 font-black text-zinc-950">Zobacz {c}</div>
                <div className="mt-2 text-xs text-zinc-500">
                  Sprawdzone • Gwarancja • Kontakt
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-gradient-to-br from-sky-600/10 via-indigo-600/8 to-emerald-400/10 ring-1 ring-sky-600/15 p-5">
            <div className="font-black text-zinc-950">Podejście serwisowe</div>
            <p className="text-sm text-zinc-600 mt-1">
              Każde urządzenie przechodzi diagnostykę oraz testy — jak po naprawie przed wydaniem.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill tone="neutral">Stan A/A‑</Pill>
              <Pill tone="neutral">Komplet</Pill>
              <Pill tone="neutral">Raport baterii</Pill>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-12">
        <SectionTitle
          eyebrow="oferty"
          title="Polecane urządzenia"
          desc="Przykładowe pozycje — później podłączymy prawdziwe dane."
          right={
            <Link to="/uzywane">
              <Button variant="ghost">Zobacz wszystkie</Button>
            </Link>
          }
        />
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.slice(0, 3).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="font-black text-zinc-950">Gwarancja</div>
          <p className="mt-2 text-sm text-zinc-600">
            Standardowo 3–6 miesięcy (zależnie od urządzenia i stanu).
          </p>
        </Card>
        <Card className="p-6">
          <div className="font-black text-zinc-950">Weryfikacja stanu</div>
          <p className="mt-2 text-sm text-zinc-600">
            Bateria, wyświetlacz, aparaty, łączność, czujniki — wszystko sprawdzamy.
          </p>
        </Card>
        <Card className="p-6">
          <div className="font-black text-zinc-950">Obsługa w {BRAND.city}</div>
          <p className="mt-2 text-sm text-zinc-600">
            Szybki kontakt, jasne warunki, bez “kruczków”.
          </p>
        </Card>
      </div>

      <div className="mt-12">
        <Card className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm text-zinc-600">Chcesz dobrać urządzenie pod budżet?</div>
              <div className="mt-1 text-xl font-black text-zinc-950">
                Napisz — zaproponujemy 2–3 najlepsze opcje.
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="primary" onClick={() => alert("Kontakt (demo): Telegram / WhatsApp")}>
                Dobierz mi sprzęt
              </Button>
              <Link to="/kontakt">
                <Button variant="ghost">Kontakt</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
