import React from "react";

export default function SectionTitle({ eyebrow, title, desc, right }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
      <div className="max-w-2xl">
        {eyebrow && (
          <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-2 text-2xl md:text-3xl font-black text-zinc-950">
          {title}
        </h2>
        {desc && <p className="mt-2 text-zinc-600">{desc}</p>}
      </div>
      {right}
    </div>
  );
}
