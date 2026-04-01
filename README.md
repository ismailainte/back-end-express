# Back-End Express

README-gaan waxaan uga hadlayaa waa back-end yar oo lagu dhisay `Express.js`. Waxa uuna leeyahay routes aasaasi ah, `products` API, iyo frontend fudud oo tijaabo ah.

## Faylasha muhiimka ah

- `serverka.js`: server-ka ugu weyn waa Express
- `products.js`: routes-kana waa `products`
- `serverka.html`: frontend tijaabo html ah

## Sida loo dejiyo

```bash
npm install
```

## Sida loo run gareeyo

```bash
node serverka.js
```

Server-ku wuxuu ku shaqeenayaa:

```bash
http://localhost:3000
```

## Routes-ka muhiimka ahna waa

- `GET /`
- `GET /about`
- `GET /contact`
- `GET /message`
- `POST /message`
- `GET /products`
- `GET /products/:id`
- `POST /products`

## Tijaabo frontend

Waxaad furi kartaa `serverka.html` si aad u tijaabiso:

- button-ka `Soo hel`
- form-ka diraya `name` iyo `message`

## Teknoolojiyada la isticmaalay

- Node.js
- Express
- CORS
