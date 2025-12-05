# Föräldrakollen

En forskningsbaserad webbresurs för svenska föräldrar som vill hjälpa sina barn (8-13 år) att vara trygga online.

## Projektöversikt

**Live-sajt:** https://foraldrakollen.nu

**GitHub:** https://github.com/magnumpowers/foraldrakollen

**Skapare:** Magnus Paues och Fredrik Hanefalk (Veckans AI)

## Tech Stack

- **Framework:** Next.js 16 med App Router
- **Språk:** TypeScript
- **Styling:** Tailwind CSS v4 (med @tailwindcss/postcss)
- **Ikoner:** Lucide React
- **Hosting:** Vercel
- **Domän:** foraldrakollen.nu (DNS via one.com)

## Projektstruktur

```
src/
├── app/
│   ├── page.tsx          # Startsida
│   ├── guider/page.tsx   # Interaktiva steg-för-steg-guider
│   ├── forskning/page.tsx # Forskningssammanfattning
│   ├── risker/page.tsx   # Risker och varningar
│   ├── om/page.tsx       # Om Föräldrakollen
│   ├── layout.tsx        # Root layout med fonts och metadata
│   └── globals.css       # Tailwind och globala stilar
├── components/
│   ├── Navigation.tsx    # Huvudnavigation
│   ├── Footer.tsx        # Footer
│   ├── Logo.tsx          # SVG-logotyp
│   └── GuideCard.tsx     # Interaktiva guide-accordion
├── lib/
│   └── guides-data.ts    # All guide-data (7 områden)
public/
├── icon.svg              # Favicon
└── veckans-ai.jpg        # Bild på grundarna
```

## Kommandon

```bash
npm run dev      # Starta utvecklingsserver
npm run build    # Bygga för produktion
npm run lint     # Köra linter
vercel --prod    # Deploya till produktion
```

## De 7 guideområdena

1. **Skärmtid nattetid** - Skydda sömnen
2. **Algoritmiskt innehåll** - TikTok, Reels, Shorts
3. **Okända kontakter** - Blockera meddelanden från främlingar
4. **Platstjänster** - Stäng av onödig spårning
5. **Vuxeninnehåll** - Filtrera och blockera
6. **Appgodkännande** - Kräv förälderns OK för nya appar
7. **Köp i appar** - Förhindra oavsiktliga köp

## Designprinciper

- **Färger:** Primary (teal/grön), Coral (korall/orange), Sand (beige bakgrund)
- **Typsnitt:** Nunito (display/rubriker), Inter (brödtext)
- **Ton:** Trygg, förtroendeingivande, icke-dömande
- **Målgrupp:** Svenska föräldrar med barn 8-13 år

## Viktiga noteringar

- Innehållet ska vara nyanserat och forskningsbaserat
- Undvik kategoriska påståenden - använd formuleringar som "kan öka risken"
- Inkludera alltid "Vid akut fara - ring 112" vid säkerhetsrelaterat innehåll
- Klarföra att uppgiftsfusk gäller spel/appar, inte skola/vård/myndigheter
