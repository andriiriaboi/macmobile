import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Layout>
      <Card className="p-6">
        <div className="font-black text-zinc-950">404 — Strona nie istnieje</div>
        <div className="text-sm text-zinc-600 mt-1">
          Sprawdź adres lub wróć na stronę główną.
        </div>
        <div className="mt-4">
          <Link to="/">
            <Button variant="primary">Wróć na Start</Button>
          </Link>
        </div>
      </Card>
    </Layout>
  );
}
