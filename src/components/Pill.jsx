import React from "react";
import { cx } from "./utils";

export default function Pill({ children, tone = "neutral" }) {
  const map = {
    neutral:
      "bg-indigo-600/8 text-indigo-900 ring-1 ring-indigo-600/15 hover:bg-indigo-600/12",
    good: "bg-emerald-500/10 text-emerald-800 ring-1 ring-emerald-500/20",
    warn: "bg-amber-500/12 text-amber-900 ring-1 ring-amber-500/25",
    info: "bg-sky-600/12 text-sky-900 ring-1 ring-sky-600/20",
  };
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition",
        map[tone]
      )}
    >
      {children}
    </span>
  );
}
