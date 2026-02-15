## Estructura del proyecto

```
arepaswithfriends.com/
├── .github/workflows/deploy.yml    ← Deploy automático a GitHub Pages
├── astro.config.mjs                ← Config de Astro (SSG + Tailwind + Sitemap)
├── tailwind.config.mjs             ← Paleta de colores personalizada + tipografías
├── tsconfig.json
├── package.json
├── public/images/                  ← Placeholders SVG (reemplazar por fotos reales)
│   ├── logo.svg, hero.svg
│   ├── experiencia.svg, que-vas-a-hacer.svg, lugar.svg
│   └── gallery-1.svg ... gallery-8.svg
├── src/
│   ├── config.ts                   ← WhatsApp, Instagram, Formspree, imágenes
│   ├── i18n/es.ts, en.ts, utils.ts ← Traducciones ES/EN
│   ├── styles/global.css           ← Tailwind + estilos custom
│   ├── layouts/Layout.astro        ← HTML base con SEO + OG tags + i18n script
│   ├── components/
│   │   ├── Header.astro            ← Sticky, transparente→sólido, hamburger mobile
│   │   ├── Hero.astro              ← Parallax, CTA WhatsApp
│   │   ├── Experience.astro        ← Sección #experiencia
│   │   ├── WhatYouDo.astro         ← Sección #que-vas-a-hacer
│   │   ├── ThePlace.astro          ← Sección #lugar
│   │   ├── Photos.astro            ← Galería 8 fotos + lightbox
│   │   ├── Reserve.astro           ← CTA + formulario + Instagram
│   │   ├── Footer.astro            ← Nav + social + copyright
│   │   └── WhatsAppFloat.astro     ← Botón flotante WhatsApp
│   └── pages/
│       ├── index.astro             ← Landing one-page
│       └── faq.astro               ← Página de preguntas frecuentes
```

## Para ejecutar

```bash
npm install
npm run dev      # Servidor de desarrollo
npm run build    # Build estático (dist/)
npm run preview  # Preview del build
```

## Dónde cambiar datos sensibles

Todo en **`src/config.ts`**:

| Variable | Qué cambiar |
|----------|-------------|
| `WHATSAPP_NUMBER` | Tu número en formato `549XXXXXXXXXX` |
| `INSTAGRAM_URL` | URL de tu perfil de Instagram |
| `FORM_ENDPOINT` | ID de Formspree (crear cuenta gratis en formspree.io) |
| `IMAGES` | Rutas a las imágenes reales (poner en `public/images/`) |

## Dónde poner imágenes reales

Reemplazar los archivos `.svg` en `public/images/` por fotos reales (`.jpg`, `.webp`, etc.) y actualizar las rutas en `src/config.ts` en el objeto `IMAGES`.

## i18n (idioma)

- Detecta automáticamente el idioma del navegador en la primera visita
- Botón EN/ES en el header para cambio manual
- Guarda preferencia en `localStorage`

## Deploy en GitHub Pages

1. Crear repo en GitHub y subir el código
2. En Settings > Pages, seleccionar "GitHub Actions" como fuente
3. El workflow en `.github/workflows/deploy.yml` se ejecuta en cada push a `main`
4. Si usas dominio personalizado, agregar el archivo `CNAME` en `public/` con `arepaswithfriends.com`
