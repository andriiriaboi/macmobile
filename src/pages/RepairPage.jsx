import React from "react";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Card from "../components/Card";
import Pill from "../components/Pill";
import Button from "../components/Button";
import { REPAIR_SERVICES } from "../data/services";
import { Link } from "react-router-dom";

export default function RepairPage() {
  return (
    <Layout>
      <SectionTitle
        eyebrow="serwis"
        title="Naprawa Apple"
        desc="Przejrzysty proces: diagnoza → wycena → naprawa → testy."
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {REPAIR_SERVICES.map((s) => (
          <ServiceCard key={s.title} s={s} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="font-black text-zinc-950">Checklist po naprawie</div>
          <ul className="mt-2 text-sm text-zinc-600 space-y-1">
            <li>• Aparaty, mikrofony, głośniki</li>
            <li>• Face ID / Touch ID</li>
            <li>• Sieć, Wi‑Fi, Bluetooth</li>
            <li>• Temperatury i stabilność</li>
          </ul>
        </Card>
        <Card className="p-5">
          <div className="font-black text-zinc-950">Ważne dane</div>
          <p className="mt-2 text-sm text-zinc-600">
            Jeśli zależy Ci na odzysku zdjęć/danych — nie zwlekaj. Czas ma znaczenie.
          </p>
          <div className="mt-3">
            <Pill tone="warn">po zalaniu — najlepiej od razu</Pill>
          </div>
        </Card>
        <Card className="p-5">
          <div className="font-black text-zinc-950">Umów wizytę</div>
          <p className="mt-2 text-sm text-zinc-600">
            Napisz: model, objawy, czy był upadek/woda, kiedy się zaczęło.
          </p>
          <div className="mt-4 flex gap-2">
            <Button variant="primary" onClick={() => alert("Kontakt (demo): Telegram / WhatsApp")}>
              Napisz
            </Button>
            <Link to="/kontakt">
              <Button variant="ghost">Lokalizacja</Button>
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
