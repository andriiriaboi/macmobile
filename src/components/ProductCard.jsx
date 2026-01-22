import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import Pill from "./Pill";
import { formatPrice } from "./utils";

export default function ProductCard({ p }) {
  const condTone =
    p.condition === "A" || p.condition === "A-"
      ? "good"
      : p.condition === "B+" || p.condition === "B"
      ? "info"
      : "warn";

  return (
    <Card className="p-4 hover:shadow-[0_36px_90px_rgba(2,6,23,0.12)] hover:ring-sky-600/20 transition ring-1 ring-transparent">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-900/10 bg-white">
        {/* Stały format “kafelka” – zdjęcie wypełnia ramkę jak w sklepie */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={p.imageUrl}
            alt={p.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* delikatny połysk */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/35" />
          {/* lekka winieta – pod badge */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-transparent to-transparent" />

          <div className="absolute left-3 top-3">
            <div className="inline-flex flex-wrap gap-2 rounded-2xl bg-white/75 backdrop-blur-xl px-2 py-1.5 ring-1 ring-white/50 shadow-[0_10px_30px_rgba(2,6,23,0.10)]">
              <Pill tone={p.inStock ? "good" : "warn"}>
                {p.inStock ? "Dostępne" : "Brak"}
              </Pill>
              {p.badges?.slice(0, 1).map((b) => (
                <Pill key={b} tone="neutral">
                  {b}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-bold text-zinc-950">{p.title}</div>
          <div className="text-sm text-zinc-600 mt-1">{p.subtitle}</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-black text-zinc-950">
            {formatPrice(p.price, p.currency)}
          </div>
          <div className="text-xs text-zinc-500 mt-1">
            gwarancja: {p.warrantyMonths} mies.
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Pill tone={condTone}>Stan: {p.condition}</Pill>
        {typeof p.batteryHealth === "number" && (
          <Pill tone={p.batteryHealth >= 90 ? "good" : "info"}>
            Bateria: {p.batteryHealth}%
          </Pill>
        )}
        {typeof p.cycles === "number" && <Pill tone="neutral">Cykle: {p.cycles}</Pill>}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
        <Link className="flex-1" to={`/produkt/${p.id}`}>
          <Button variant="primary" className="w-full">
            Szczegóły
          </Button>
        </Link>
        <Button
          onClick={() => alert("Kontakt (demo): Telegram / WhatsApp")}
          variant="soft"
          className="w-full sm:w-auto"
        >
          Napisz
        </Button>
      </div>
    </Card>
  );
}
