import React from "react";
import { cx } from "./utils";

export default function Card({ children, className }) {
  return (
    <div
      className={cx(
        "rounded-3xl bg-white ring-1 ring-zinc-900/10 shadow-[0_24px_70px_rgba(2,6,23,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
