import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { CATEGORIES, PRODUCTS } from "../data/products";

function normalizeCategoryParam(param) {
  if (!param) return "All";
  const p = param.toLowerCase();
  if (p === "macbook") return "MacBook";
  if (p === "iphone") return "iPhone";
  if (p === "ipad") return "iPad";
  return "All";
}

export default function ShopPage() {
  const params = useParams();
  const navigate = useNavigate();
  const routeCategory = normalizeCategoryParam(params.category);

  const [onlyInStock, setOnlyInStock] = useState(true);
  const [maxPrice, setMaxPrice] = useState(6000);
  const [query, setQuery] = useState("");

  const products = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (routeCategory !== "All" && p.category !== routeCategory) return false;
      if (onlyInStock && !p.inStock) return false;
      if (p.price > maxPrice) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = `${p.title} ${p.subtitle} ${p.category}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [routeCategory, onlyInStock, maxPrice, query]);

  const right = (
    <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 lg:flex gap-2">
      <div className="flex items-center gap-2 rounded-2xl bg-white ring-1 ring-zinc-900/10 px-3 py-2">
        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
          Szukaj
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='np. "15 Pro Max"'
          className="bg-transparent outline-none text-sm placeholder:text-zinc-400 w-full sm:w-56"
        />
      </div>

      <select
        value={routeCategory}
        onChange={(e) => {
          const v = e.target.value;
          if (v === "All") navigate("/uzywane");
          else navigate(`/uzywane/${v.toLowerCase()}`);
        }}
        className="rounded-2xl bg-white ring-1 ring-zinc-900/10 px-3 py-2 text-sm outline-none"
      >
        <option value="All">Wszystkie kategorie</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <div className="rounded-2xl bg-white ring-1 ring-zinc-900/10 px-3 py-2">
        <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
          Cena do
        </div>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={300}
            max={12000}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full sm:w-44"
          />
          <div className="text-sm font-black text-zinc-950">{maxPrice} zł</div>
        </div>
      </div>

      <button
        onClick={() => setOnlyInStock((v) => !v)}
        className={
          onlyInStock
            ? "rounded-2xl px-3 py-2 text-sm font-black transition ring-1 bg-emerald-500/10 ring-emerald-500/20 text-emerald-900"
            : "rounded-2xl px-3 py-2 text-sm font-black transition ring-1 bg-white ring-zinc-900/10 text-zinc-700 hover:bg-zinc-50"
        }
      >
        {onlyInStock ? "Tylko dostępne" : "Pokaż wszystko"}
      </button>
    </div>
  );

  return (
    <Layout>
      <SectionTitle
        eyebrow="katalog"
        title="Używane urządzenia Apple"
        desc="Filtruj po kategorii, cenie i dostępności."
        right={right}
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <Link to="/uzywane">
          <Button variant={routeCategory === "All" ? "primary" : "soft"}>Wszystko</Button>
        </Link>
        <Link to="/uzywane/macbook">
          <Button variant={routeCategory === "MacBook" ? "primary" : "soft"}>MacBook</Button>
        </Link>
        <Link to="/uzywane/iphone">
          <Button variant={routeCategory === "iPhone" ? "primary" : "soft"}>iPhone</Button>
        </Link>
        <Link to="/uzywane/ipad">
          <Button variant={routeCategory === "iPad" ? "primary" : "soft"}>iPad</Button>
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      {products.length === 0 && (
        <Card className="mt-6 p-6">
          <div className="font-black text-zinc-950">Brak wyników</div>
          <div className="text-sm text-zinc-600 mt-1">
            Zwiększ limit ceny lub wyłącz “Tylko dostępne”.
          </div>
        </Card>
      )}
    </Layout>
  );
}
