import React from "react";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import MapCard from "../components/MapCard";
import { BRAND } from "../data/config";

export default function ContactPage() {
  return (
    <Layout>
      <SectionTitle
        eyebrow="kontakt"
        title="Nasza lokalizacja"
        desc={`Serwis ${BRAND.name} w ${BRAND.city}.`}
      />

      <div className="mt-6">
        <MapCard />
      </div>
    </Layout>
  );
}
