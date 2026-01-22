import React from "react";
import Card from "./Card";

export default function Stat({ label, value, hint }) {
  return (
    <Card className="p-4">
      <div className="text-sm text-zinc-600">{label}</div>
      <div className="mt-1 font-black text-zinc-950">{value}</div>
      {hint && <div className="text-xs text-zinc-500 mt-1">{hint}</div>}
    </Card>
  );
}
