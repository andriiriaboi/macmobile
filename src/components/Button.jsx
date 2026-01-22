import React from "react";
import { cx } from "./utils";

export default function Button({ children, variant = "primary", className, ...props }) {
  const v = {
    primary:
      "bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:from-sky-700 hover:to-indigo-700 shadow-[0_14px_40px_rgba(37,99,235,0.25)]",
    ghost:
      "bg-white text-zinc-950 ring-1 ring-zinc-900/10 hover:bg-zinc-50 hover:ring-zinc-900/15",
    soft:
      "bg-sky-600/10 text-sky-900 hover:bg-sky-600/15 ring-1 ring-sky-600/15",
  };
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]",
        v[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
