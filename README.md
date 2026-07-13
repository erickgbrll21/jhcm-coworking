# JHCM Coworking — Site Institucional

Site institucional premium do **JHCM Coworking**, coworking executivo localizado no Carmo, Belo Horizonte/MG.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** com tokens próprios (paleta preto/branco/dourado)
- **Framer Motion** para microinterações
- **GSAP** para parallax suave
- **Lucide Icons**
- Tipografia: **Cormorant Garamond** (display) + **Inter** (UI)

## Estrutura

```
src/
├── app/
│   ├── layout.tsx               # Layout raiz (Header, Footer, Float WhatsApp)
│   ├── page.tsx                 # Home
│   ├── sobre/page.tsx
│   ├── contato/page.tsx
│   └── servicos/
│       ├── sala-privativa/
│       ├── endereco-fiscal/
│       ├── open-office/
│       └── salas-de-reuniao/
├── components/
│   ├── layout/      # Header, Footer
│   ├── sections/    # Seções reutilizáveis (Hero, About, Services, CTA, etc.)
│   └── ui/          # Button, Reveal, MagicCard, FAQ, Logo, ...
└── lib/
    ├── site.ts      # Dados institucionais (endereço, telefones, etc.)
    └── services.ts  # Catálogo de serviços, FAQs, valores, timeline
```

## Como rodar

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build de produção
npm start            # serve o build
```

## Personalização rápida

Edite **`src/lib/site.ts`** para alterar:

- Telefone, WhatsApp, e-mail
- Endereço completo
- Links de redes sociais
- Embed do Google Maps

Edite **`src/lib/services.ts`** para alterar:

- Lista de serviços (cards da home + links)
- FAQs, valores, timeline, estatísticas

## Paleta

| Token       | Valor     |
| ----------- | --------- |
| `ink-950`   | `#0A0A0A` |
| `ink-900`   | `#151515` |
| `ink-700`   | `#2B2B2B` |
| `bone-50`   | `#FFFFFF` |
| `bone-200`  | `#EAEAEA` |
| `gold`      | `#C8A961` |

## Páginas

1. `/` — Home (Hero parallax, Sobre, Serviços, Diferenciais, Marquee de público, CTA)
2. `/sobre` — Missão, stats, valores, timeline, público-alvo
3. `/servicos/sala-privativa` — Vantagens, estrutura, ideal para, galeria, FAQ
4. `/servicos/endereco-fiscal` — O que é, benefícios, processo passo a passo, FAQ
5. `/servicos/open-office` — Diferenciais, estrutura, galeria
6. `/servicos/salas-de-reuniao` — Salas 6 e 8 pessoas, agenda visual, FAQ
7. `/contato` — Cards de contato, formulário (envia para WhatsApp), mapa

## Próximos passos sugeridos

- Substituir imagens do Unsplash por fotos reais do espaço
- Conectar formulário a um serviço de e-mail (Resend, SendGrid)
- Adicionar sitemap.xml e robots.txt
- Integrar Google Analytics / Tag Manager
