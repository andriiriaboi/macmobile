# macmobile — React (PL) + React Router + Tailwind CDN

Wariant A (Apple Clean + Premium Service) z prawdziwymi routami.

## Jak uruchomić
npm install
npm run dev

## Trasy
/                      -> Start
/uzywane               -> katalog (wszystko)
/uzywane/macbook        -> MacBook
/uzywane/iphone         -> iPhone
/uzywane/ipad           -> iPad
/serwis                -> Serwis
/kontakt               -> Kontakt + mapa
/produkt/:id           -> Strona produktu

## Mapa
W pliku `src/data/config.js` podmień:
- MAPS_URL
- MAPS_IFRAME_SRC
