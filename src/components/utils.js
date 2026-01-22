export function cx(...a) {
  return a.filter(Boolean).join(" ");
}

export function formatPrice(p, currency) {
  if (currency === "zł") {
    return `${p.toLocaleString("pl-PL")} ${currency}`;
  }
  // domyślnie waluta jako prefix (np. €)
  return `${currency}${p.toLocaleString("en-US")}`;
}
