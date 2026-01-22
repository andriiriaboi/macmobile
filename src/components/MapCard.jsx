import React from "react";
import Card from "./Card";
import { MAPS_IFRAME_SRC } from "../data/config";

export default function MapCard() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/9] bg-zinc-200">
        <iframe
          title="Mapa macmobile"
          src={MAPS_IFRAME_SRC}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Card>
  );
}
