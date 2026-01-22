import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Pill from "../components/Pill";
import { formatPrice } from "../components/utils";
import { PRODUCTS } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const p = PRODUCTS.find((x) => x.id === id);

  if (!p) {
    return (
      <Layout>
        <Card className="p-6 lg:sticky lg:top-24">
          <div className="font-black text-zinc-950">Nie znaleziono produktu</div>
          <div className="text-sm text-zinc-600 mt-1">
            Ten link jest nieprawidłowy lub produkt został usunięty.
          </div>
          <div className="mt-4">
            <Link to="/uzywane" className="w-full">
              <Button variant="primary">Wróć do katalogu</Button>
            </Link>
          </div>
        </Card>
      </Layout>
    );
  }

  const condTone =
    p.condition === "A" || p.condition === "A-"
      ? "good"
      : String(p.condition).startsWith("B")
      ? "info"
      : "warn";

  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            produkt
          </div>
          <h1 className="mt-2 text-2xl md:text-3xl font-black text-zinc-950">{p.title}</h1>
          <p className="mt-2 text-zinc-600">{p.subtitle}</p>
        </div>

        <div className="md:text-right">
          <div className="text-2xl font-black text-zinc-950">
            {formatPrice(p.price, p.currency)}
          </div>
          <div className="text-sm text-zinc-600 mt-1">gwarancja: {p.warrantyMonths} mies.</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="overflow-hidden md:col-span-2">
          <div className="p-4 md:p-6">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-zinc-900/10 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/35" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-transparent to-transparent" />

                <div className="absolute left-4 top-4">
                  <div className="inline-flex flex-wrap gap-2 rounded-2xl bg-white/75 backdrop-blur-xl px-2 py-1.5 ring-1 ring-white/50 shadow-[0_10px_30px_rgba(2,6,23,0.10)]">
                    <Pill tone={p.inStock ? "good" : "warn"}>
                      {p.inStock ? "Dostępne" : "Brak / na zamówienie"}
                    </Pill>
                    <Pill tone={condTone}>Stan: {p.condition}</Pill>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <div className="font-black text-zinc-950">Opis</div>
            <p className="mt-2 text-zinc-600">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {typeof p.batteryHealth === "number" && (
                <Pill tone={p.batteryHealth >= 90 ? "good" : "info"}>Bateria: {p.batteryHealth}%</Pill>
              )}
              {typeof p.cycles === "number" && <Pill tone="neutral">Cykle: {p.cycles}</Pill>}
              {p.badges?.map((b) => (
                <Pill key={b} tone="neutral">{b}</Pill>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <Button variant="primary" className="w-full" onClick={() => alert("Rezerwacja (demo) — podłączymy później")}>
                Zarezerwuj
              </Button>
              <Button variant="soft" className="w-full" onClick={() => alert("Kontakt (demo): Telegram / WhatsApp")}>
                Napisz
              </Button>
              <Link to="/uzywane" className="w-full">
                <Button variant="ghost" className="w-full">Wróć do katalogu</Button>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="font-black text-zinc-950">Szczegóły</div>
          <div className="mt-3 text-sm text-zinc-600 space-y-2">
            <div className="flex justify-between gap-3">
              <span>Kategoria</span>
              <span className="font-semibold text-zinc-950">{p.category}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span>Dostępność</span>
              <span className="font-semibold text-zinc-950">{p.inStock ? "Dostępne" : "Brak"}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span>Gwarancja</span>
              <span className="font-semibold text-zinc-950">{p.warrantyMonths} mies.</span>
            </div>
            {typeof p.batteryHealth === "number" && (
              <div className="flex justify-between gap-3">
                <span>Bateria</span>
                <span className="font-semibold text-zinc-950">{p.batteryHealth}%</span>
              </div>
            )}
            {typeof p.cycles === "number" && (
              <div className="flex justify-between gap-3">
                <span>Cykle</span>
                <span className="font-semibold text-zinc-950">{p.cycles}</span>
              </div>
            )}
          </div>

          <div className="mt-5 text-xs text-zinc-500">
            * W przyszłości dodamy zdjęcia realne, komplet, raport testów oraz numer seryjny (ukryty).
          </div>
        </Card>
      </div>
    </Layout>
  );
}
