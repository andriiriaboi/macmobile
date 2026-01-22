import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import RepairPage from "./pages/RepairPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/uzywane" element={<ShopPage />} />
      <Route path="/uzywane/:category" element={<ShopPage />} />
      <Route path="/serwis" element={<RepairPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="/produkt/:id" element={<ProductPage />} />
      <Route path="/start" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
