import React from "react";
import Card from "./Card";
import { formatPrice } from "./utils";

export default function ServiceCard({ s }) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-zinc-950 font-bold">{s.title}</div>
          <div className="text-sm text-zinc-600 mt-1">{s.desc}</div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-zinc-950 font-black">
            od {formatPrice(s.priceFrom, s.unit)}
          </div>
          {s.highlight && (
            <div className="text-xs text-emerald-700 mt-1">{s.highlight}</div>
          )}
        </div>
      </div>
    </Card>
  );
}
