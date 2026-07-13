---
name: frontend-design
description: |
  Cria sites de alta classe com experiências inesquecíveis. NUNCA produz sites genéricos. Cada projeto é tratado como uma obra — com identidade visual única, animações GSAP scrubadas que respondem ao scroll como se o usuário controlasse fisicamente os objetos, e um nível de acabamento que rivaliza com Awwwards e Behance.

  Use quando criar: landing pages, portfolios, sites institucionais, experiências interativas, componentes animados, elementos 3D, scroll animations, hero sections, ou quando usuário pedir "design único", "animação suave", "efeito 3D", "parallax", "GSAP", "Three.js", "site bonito", "site moderno", "site profissional".

  Aciona automaticamente quando:
  - Usuário pede qualquer tipo de site ou landing page
  - Menciona "animação interativa", "scroll animation", "parallax"
  - Fala de "efeito 3D", "elementos 3D", "Three.js"
  - Pede "GSAP", "smooth animation", "timeline"
  - Quer "hero section animado", "transições suaves"
  - Solicita "design memorável", "interface impactante", "site de alta classe"
  - Menciona estilos: brutalist, editorial, luxury, retro-futuristic
  - Pede experiências: mouse tracking, hover effects, interactive elements

keywords:
  - landing-page
  - design
  - animation
  - gsap
  - threejs
  - 3d
  - interactive
  - scroll
  - parallax
  - luxury
  - high-end
  - awwwards
---

# Frontend Design Skill

> **Mentalidade obrigatória**: Cada site criado por esta skill deve ser digno de premiação. O padrão mínimo é o nível Awwwards / Behance Top Shot. Sites genéricos, templates copiados, ou qualquer coisa que pareça "feito por IA com pressa" são inaceitáveis.

## A Filosofia — Experiência Inesquecível

O usuário que acessa o site deve sentir algo. Não apenas "ver informação" — ele deve ser **transportado** por uma experiência visual e sensorial que ele vai lembrar e vai querer mostrar para outras pessoas.

Isso significa:

- **Cada seção conta uma história** — a sequência de elementos, o ritmo das animações, a progressão das cores guia o usuário numa jornada narrativa
- **O scroll é interação, não apenas navegação** — o usuário sente que está *controlando* os objetos na tela, não só passando por eles
- **Cada detalhe é intencional** — a escolha da fonte, o valor exato do easing, o quanto a imagem se desloca no parallax, a velocidade do fade — nada é padrão, tudo é decisão de design
- **O site tem personalidade** — ao abrir, em 3 segundos, o usuário sabe que aquilo foi feito com cuidado e intenção, não gerado automaticamente

## Princípios Inegociáveis

- **Zero genérico**: Inter, gradiente roxo-rosa, card com sombra, botão azul, layout de template — proibidos. Se algo parece que poderia estar em qualquer site, está errado
- **Identidade visual única**: Cada projeto tem seu próprio sistema de cores, tipografia e ritmo visual — nunca reaproveitado de projeto anterior
- **Scroll como motor**: GSAP `scrub` não é opcional — é a espinha dorsal de toda experiência. Os elementos se deslocam *com* o scroll, não *ao* ser atingidos por ele
- **Performance sem concessão**: 60fps constantes. `will-change`, `transform` em vez de `top/left`, `contain: layout` onde necessário
- **Acabamento de alta classe**: Microinterações nos hovers, transições de cor suaves entre seções, tipografia com escala expressiva, espaçamento generoso

## Stack Tecnológico

### React — Base Obrigatória

Todo site gerado por esta skill é construído em **React**. Não HTML puro, não Vue — React. A estrutura padrão usa Vite como bundler e Tailwind CSS para utilitários.

```bash
npm create vite@latest meu-site -- --template react
cd meu-site
npm install
npm install gsap
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Estrutura de componentes obrigatória:**
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   └── CTA.jsx
│   └── ui/
│       ├── Button.jsx
│       └── Card.jsx
├── hooks/
│   └── useScrollAnimation.js
├── styles/
│   └── globals.css
└── App.jsx
```

**Hook GSAP reutilizável:**
```javascript
// hooks/useScrollAnimation.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(animationFn, deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animationFn(ref.current);
    }, ref);

    return () => ctx.revert();
  }, deps);

  return ref;
}
```

**Uso em componente:**
```jsx
// sections/Hero.jsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Hero() {
  const ref = useScrollAnimation((el) => {
    gsap.to(el.querySelector('.hero__bg'), {
      y: '30%',
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: 1 },
    });
    gsap.from(el.querySelector('.hero__title'), {
      y: 80, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2,
    });
  });

  return (
    <section ref={ref} className="hero">
      <div className="hero__bg" />
      <h1 className="hero__title">Título Principal</h1>
    </section>
  );
}
```

---

### Magic UI — Componentes de Alta Classe

**Sempre usar o MCP do Magic UI para buscar e inserir componentes prontos.** O Magic UI fornece componentes React com animações sofisticadas que elevam imediatamente o nível visual do site.

#### Fluxo obrigatório ao criar um site

1. **Consultar o MCP do Magic UI** para ver quais componentes estão disponíveis
2. **Mapear componentes por seção** do site:

| Seção | Componentes Magic UI ideais |
|---|---|
| Hero | `Meteors`, `Particles`, `SparklesText`, `TypingAnimation` |
| Features | `MagicCard`, `BorderBeam`, `BlurFade` |
| Stats / Números | `NumberTicker` |
| CTA / Botões | `ShimmerButton`, `RainbowButton` |
| Depoimentos | `Marquee` |
| Background | `Ripple`, `AnimatedGridPattern`, `DotPattern` |
| Textos animados | `WordFadeIn`, `HyperText`, `GradientText` |
| Conexões visuais | `AnimatedBeam` |

3. **Instalar via MCP** os componentes escolhidos
4. **Integrar com GSAP** — os componentes Magic UI convivem com as animações de scroll

#### Integração Magic UI + GSAP

```jsx
import { MagicCard } from '@/components/magicui/magic-card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Features() {
  const ref = useScrollAnimation((el) => {
    // GSAP controla a entrada com scrub
    gsap.from(el.querySelectorAll('.magic-card-wrapper'), {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
    });
  });

  return (
    <section ref={ref} className="features">
      {features.map((f) => (
        <div key={f.id} className="magic-card-wrapper">
          <MagicCard className="feature-card">
            <i className={`ph-duotone ${f.icon} icon--xl`} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </MagicCard>
        </div>
      ))}
    </section>
  );
}
```

---

### Animações (GSAP)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

- Use `gsap.timeline()` para sequências complexas
- `ScrollTrigger` para animações baseadas em scroll
- `gsap.to()`, `gsap.from()`, `gsap.fromTo()` para transições precisas

### Ícones

Ícones são obrigatórios para enriquecer a interface. Usar sempre uma das bibliotecas abaixo — nunca emoji como substituto de ícone em UI profissional.

**Phosphor Icons** (recomendado — mais elegante, múltiplos estilos)
```html
<script src="https://unpkg.com/@phosphor-icons/web"></script>
```
```html
<!-- Estilos disponíveis: regular, bold, fill, duotone, light, thin -->
<i class="ph ph-arrow-right"></i>
<i class="ph-bold ph-star"></i>
<i class="ph-fill ph-heart"></i>
<i class="ph-duotone ph-sparkle"></i>
<i class="ph-thin ph-globe"></i>
```

**Lucide Icons** (clean, consistente, ótimo para UI moderna)
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```
```html
<i data-lucide="arrow-right"></i>
<i data-lucide="sparkles"></i>
<i data-lucide="zap"></i>
```
```javascript
lucide.createIcons(); // inicializar após o DOM carregar
```

**Remixicon** (mais de 2800 ícones, estilo flat moderno)
```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
```
```html
<i class="ri-arrow-right-line"></i>
<i class="ri-star-fill"></i>
<i class="ri-rocket-2-line"></i>
```

---

### Como usar ícones com qualidade

**Tamanho via CSS — nunca inline:**
```css
.icon {
  font-size: 1.25rem;   /* 20px — ícones em texto/botões */
  line-height: 1;
}

.icon--sm  { font-size: 1rem;    }  /* 16px */
.icon--md  { font-size: 1.5rem;  }  /* 24px */
.icon--lg  { font-size: 2rem;    }  /* 32px */
.icon--xl  { font-size: 3rem;    }  /* 48px — seções de features */
.icon--2xl { font-size: 4.5rem;  }  /* 72px — hero, destaque */
```

**Ícones como elementos visuais de destaque (não só utilitários):**
```html
<!-- Feature card com ícone grande e animado -->
<div class="feature-card" data-reveal>
  <div class="feature-card__icon">
    <i class="ph-duotone ph-lightning icon--xl"></i>
  </div>
  <h3 class="feature-card__title">Velocidade</h3>
  <p class="feature-card__desc">Performance máxima em cada interação.</p>
</div>
```

**Ícones animados com GSAP no scroll:**
```javascript
// Ícones de feature cards entram com rotação + fade
gsap.from('.feature-card__icon i', {
  rotation: -30,
  opacity: 0,
  scale: 0.5,
  duration: 0.7,
  ease: 'back.out(1.7)',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.features',
    start: 'top 75%',
  },
});
```

**Ícone em botão — alinhamento correto:**
```html
<button class="btn">
  <span>Começar agora</span>
  <i class="ph-bold ph-arrow-right btn__icon"></i>
</button>
```
```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn__icon {
  transition: transform 0.3s var(--ease-out);
}

.btn:hover .btn__icon {
  transform: translateX(4px);
}
```

---

### Onde usar ícones obrigatoriamente

- **Features/benefícios** — cada item tem um ícone grande (`--xl`) como ancora visual
- **Botões de CTA** — ícone de seta ou chevron à direita para indicar ação
- **Navegação** — ícones ao lado de links no menu mobile
- **Cards de serviço** — ícone duotone ou fill para personalidade
- **Stats/números** — ícone acima do número para contexto visual
- **Listas de bullet** — substituir `•` por ícone `ph-check` ou `ph-arrow-right`
- **Footer** — ícones de redes sociais e contato

### Elementos 3D (Three.js)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

- Geometrias simples para backgrounds interativos
- Particle systems para efeitos atmosféricos
- Shaders customizados para efeitos únicos

## Estilos de Design

### Brutalist
- Tipografia pesada, contrastes extremos
- Grids quebrados, assimetria intencional
- Cores saturadas ou preto/branco puro

### Editorial
- Tipografia como elemento visual principal
- Espaço negativo generoso
- Hierarquia clara, elegância minimalista

### Luxury
- Animações lentas e deliberadas
- Paleta monocromática com detalhes dourados/metálicos
- Microinterações refinadas

### Retro-Futuristic
- Referências aos anos 80/90 com tecnologia atual
- Neón, glitch effects, scanlines
- Tipografia monospace ou display incomum

## Padrões de Código

### Hero Section com GSAP
```javascript
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ delay: 0.3 });
tl.from('.hero-title', { y: 80, opacity: 0, duration: 1, ease: 'power3.out' })
  .from('.hero-subtitle', { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
  .from('.hero-cta', { scale: 0.9, opacity: 0, duration: 0.6 }, '-=0.4');
```

---

## GSAP ScrollTrigger — O Core da Skill

> **Regra absoluta**: Todo site gerado por esta skill usa GSAP `scrub` como motor principal. Os elementos não apenas aparecem — eles **se deslocam fisicamente junto com o scroll**, como se o usuário tivesse controle direto sobre cada objeto na tela. Isso é diferente de animações que "disparam quando entra na tela" — aqui o elemento se move *enquanto* o usuário rola.

### CDN obrigatório (sempre incluir)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```
```javascript
gsap.registerPlugin(ScrollTrigger);
```

---

### O que é `scrub` e por que é obrigatório

`scrub` é o parâmetro que faz a animação ser **escrava do scroll**. O elemento só se move se o usuário mover o scroll. Se parar de rolar, a animação pausa. Se rolar para cima, o objeto volta.

```javascript
scrollTrigger: {
  scrub: 1,      // 1 = segue o scroll com 1s de suavidade (recomendado)
  scrub: true,   // segue imediatamente, sem suavidade
  scrub: 2,      // mais lerp, mais "flutuante"
}
```

**Nunca use `scrub: false` para efeitos visuais de deslocamento.** `scrub: false` é só para reveals pontuais.

---

### 1. Parallax Profundo — Camadas se Movendo em Velocidades Diferentes

A técnica mais fundamental. Elementos em diferentes profundidades se movem a velocidades distintas, criando a ilusão de 3D.

```javascript
// Imagem de fundo: move lento (fica "para trás")
gsap.to('.bg-layer', {
  y: '30%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
  },
});

// Imagem do meio: velocidade média
gsap.to('.mid-layer', {
  y: '-15%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
  },
});

// Texto em frente: move mais rápido que o scroll (sai voando)
gsap.to('.front-text', {
  y: '-40%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1.5,
  },
});
```

**CSS obrigatório para parallax funcionar:**
```css
.section { position: relative; overflow: hidden; }
.bg-layer { 
  position: absolute; inset: -20%; /* extrapolado para não mostrar bordas */
  will-change: transform;
}
```

---

### 2. Imagem que Cresce/Encolhe com o Scroll (Scale Scrub)

A imagem começa pequena e escala para preencher a tela enquanto o usuário rola — ou o oposto.

```javascript
// Imagem começa pequena, cresce até cobrir a seção
gsap.fromTo('.feature-img', 
  { scale: 0.6, borderRadius: '24px' },
  {
    scale: 1,
    borderRadius: '0px',
    ease: 'none',
    scrollTrigger: {
      trigger: '.feature-section',
      start: 'top 80%',
      end: 'top 10%',
      scrub: 1,
    },
  }
);
```

---

### 3. Objetos Flutuando em Direções Opostas (Split Scroll)

Dois elementos se movem em direções opostas — cria tensão visual dinâmica.

```javascript
// Elemento esquerdo sobe
gsap.to('.left-block', {
  y: -120,
  ease: 'none',
  scrollTrigger: { trigger: '.split-section', start: 'top bottom', end: 'bottom top', scrub: 1 },
});

// Elemento direito desce
gsap.to('.right-block', {
  y: 120,
  ease: 'none',
  scrollTrigger: { trigger: '.split-section', start: 'top bottom', end: 'bottom top', scrub: 1 },
});
```

---

### 4. Pin com Timeline Scrubada — Seção Cinematográfica

A seção fica fixada na tela enquanto uma timeline inteira acontece proporcionalmente ao scroll. O usuário literalmente "arrasta" a animação com o scroll.

```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.cinematic-section',
    start: 'top top',
    end: '+=300%',       // ocupa 3x a altura da viewport em scroll
    scrub: 1,
    pin: true,           // fixa a seção na tela
    anticipatePin: 1,
  },
});

tl
  // Fase 1: imagem entra pela esquerda
  .from('.scene-img', { x: '-100vw', opacity: 0, duration: 1 })
  // Fase 2: texto revela palavra por palavra
  .from('.scene-words span', { y: 80, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.3')
  // Fase 3: tudo some e próximo elemento entra
  .to('.scene-img', { scale: 1.2, opacity: 0, duration: 0.5 })
  .to('.scene-words', { y: -60, opacity: 0, duration: 0.4 }, '<')
  .from('.scene-next', { opacity: 0, y: 40, duration: 0.5 });
```

---

### 5. Texto que Escreve / Revela com o Scroll

Cada palavra ou linha do texto aparece proporcionalmente a quanto o usuário rolou.

```javascript
// Quebrar texto em spans de palavras
function wrapWords(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.innerHTML = el.textContent.trim().split(' ').map(word =>
      `<span class="w" style="display:inline-block;overflow:hidden">
        <span class="wi" style="display:inline-block">${word}</span>
      </span>`
    ).join(' ');
  });
}

wrapWords('[data-scrub-text]');

// Cada palavra se levanta proporcionalmente ao scroll
gsap.utils.toArray('[data-scrub-text]').forEach(el => {
  gsap.from(el.querySelectorAll('.wi'), {
    y: '110%',
    stagger: 0.05,
    ease: 'none',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      end: 'top 30%',
      scrub: 1,
    },
  });
});
```

HTML:
```html
<h2 data-scrub-text>Cada palavra surge com o seu scroll</h2>
```

---

### 6. Imagem com Clip-Path Abrindo pelo Scroll

A imagem fica "escondida" atrás de um mask e vai revelando conforme o usuário rola.

```javascript
// Começa como uma linha fina no centro, abre para revelar a imagem completa
gsap.fromTo('.reveal-img',
  { clipPath: 'inset(40% 0% 40% 0%)' },
  {
    clipPath: 'inset(0% 0% 0% 0%)',
    ease: 'none',
    scrollTrigger: {
      trigger: '.reveal-section',
      start: 'top 70%',
      end: 'top 10%',
      scrub: 1.5,
    },
  }
);

// Variação: abre da esquerda para a direita
gsap.fromTo('.reveal-img-lr',
  { clipPath: 'inset(0% 100% 0% 0%)' },
  {
    clipPath: 'inset(0% 0% 0% 0%)',
    ease: 'none',
    scrollTrigger: {
      trigger: '.reveal-section-lr',
      start: 'top 70%',
      end: 'center center',
      scrub: 1,
    },
  }
);
```

---

### 7. Cards 3D Rotacionando com Scroll

Cards giram no eixo Y ou X enquanto o usuário rola, criando efeito de "card virando".

```javascript
gsap.utils.toArray('.card-3d').forEach((card, i) => {
  gsap.fromTo(card,
    { rotationY: i % 2 === 0 ? -45 : 45, opacity: 0, z: -200 },
    {
      rotationY: 0,
      opacity: 1,
      z: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        end: 'top 30%',
        scrub: 1,
      },
    }
  );
});
```

CSS obrigatório:
```css
.cards-wrapper { perspective: 1000px; }
.card-3d { transform-style: preserve-3d; }
```

---

### 8. Horizontal Scroll Scrubado — Galeria Lateral

A galeria se move horizontalmente enquanto o usuário rola verticalmente. O scroll vertical controla o movimento lateral.

```javascript
const track = document.querySelector('.h-track');
const slides = gsap.utils.toArray('.h-slide');

// Calcula quanto precisa mover
const totalWidth = track.scrollWidth - window.innerWidth;

gsap.to(track, {
  x: -totalWidth,
  ease: 'none',
  scrollTrigger: {
    trigger: '.h-wrapper',
    start: 'top top',
    end: () => `+=${totalWidth}`,
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,
  },
});
```

CSS:
```css
.h-wrapper { overflow: hidden; }
.h-track { display: flex; width: max-content; will-change: transform; }
.h-slide { width: 100vw; height: 100vh; flex-shrink: 0; }
```

---

### 9. Morphing de Cor por Seção via Scroll

O background muda de cor de forma suave e **proporcional ao scroll**, não de forma instantânea.

```javascript
const colorSections = gsap.utils.toArray('[data-bg]');

colorSections.forEach(section => {
  const bg = section.dataset.bg;
  const color = section.dataset.color || '#ffffff';

  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => gsap.to('body', { backgroundColor: bg, color, duration: 0.8, ease: 'power2.inOut' }),
    onEnterBack: () => gsap.to('body', { backgroundColor: bg, color, duration: 0.8, ease: 'power2.inOut' }),
  });
});
```

HTML:
```html
<section data-bg="#0a0a0a" data-color="#ffffff">...</section>
<section data-bg="#f5f0e8" data-color="#111111">...</section>
<section data-bg="#0f1729" data-color="#a0c4ff">...</section>
```

---

### 10. Barra de Progresso do Scroll
```javascript
gsap.to('.progress-bar', {
  scaleX: 1,
  ease: 'none',
  scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 0 },
});
```
```css
.progress-bar {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 3px;
  background: var(--accent);
  transform-origin: left;
  transform: scaleX(0);
  z-index: 9999;
  will-change: transform;
}
```

---

### 11. Stagger com Scroll — Grid Entrando em Cascata

```javascript
gsap.from('.card', {
  y: 80,
  opacity: 0,
  stagger: 0.1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.cards-grid',
    start: 'top 80%',
    end: 'top 20%',
    scrub: 1,
  },
});
```

---

### 12. Contador Animado com Scroll
```javascript
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.dataset.count;
  ScrollTrigger.create({
    trigger: el, start: 'top 85%', once: true,
    onEnter: () => {
      gsap.to({ val: 0 }, {
        val: target, duration: 1.8, ease: 'power2.out',
        onUpdate() { el.textContent = Math.round(this.targets()[0].val).toLocaleString(); },
      });
    },
  });
});
```

---

### Particle Background (Three.js)
```javascript
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(count * 3);
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({ size: 0.02, color: 0xffffff });
scene.add(new THREE.Points(geometry, material));
```

---

## Regras Absolutas de Todo Projeto

**Nunca entregar um site sem:**

1. `scrub: 1` em pelo menos 3 elementos visuais principais (imagens, blocos, títulos grandes)
2. Parallax de pelo menos 2 camadas na seção hero
3. Uma seção com `pin: true` e timeline scrubada
4. Clip-path reveal ou scale reveal em imagens de destaque
5. Morphing de background entre seções com `data-bg`
6. `will-change: transform` em todos os elementos animados pelo GSAP
7. `overflow: hidden` nos containers de elementos com parallax

---

## Padrões de Código Limpo

Todo código gerado por esta skill deve ser **legível como prosa**. Quem abrir o arquivo deve entender a estrutura em segundos, sem precisar decifrar nada.

---

### Estrutura do Arquivo HTML

Sempre organizar na seguinte ordem, com comentários de seção:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nome do Projeto</title>

  <!-- Fontes -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet" />

  <!-- Estilos -->
  <style>
    /* 1. Reset & Base */
    /* 2. Variáveis CSS */
    /* 3. Tipografia */
    /* 4. Layout */
    /* 5. Componentes */
    /* 6. Animações */
    /* 7. Responsivo */
  </style>
</head>

<body>

  <!-- ============================================
       HEADER / NAV
  ============================================ -->
  <header class="site-header">...</header>

  <!-- ============================================
       HERO
  ============================================ -->
  <section class="hero">...</section>

  <!-- ============================================
       FEATURES
  ============================================ -->
  <section class="features">...</section>

  <!-- ============================================
       SCRIPTS
  ============================================ -->
  <script src="...gsap..."></script>
  <script src="...ScrollTrigger..."></script>
  <script>
    // Inicialização
    // Animações de entrada
    // ScrollTrigger
  </script>

</body>
</html>
```

---

### Variáveis CSS — Sempre no `:root`

Nunca usar valores mágicos soltos no CSS. Tudo que se repete vira variável.

```css
:root {
  /* Cores */
  --color-bg:        #0a0a0a;
  --color-surface:   #141414;
  --color-text:      #f0f0f0;
  --color-muted:     #888888;
  --color-accent:    #c8f135;

  /* Tipografia — Poppins é a fonte padrão obrigatória */
  --font-display:    'Poppins', sans-serif;
  --font-body:       'Poppins', sans-serif;
  --font-mono:       'JetBrains Mono', monospace;

  /* Pesos da Poppins disponíveis — usar com intenção:
     300 → subtítulos leves, labels
     400 → corpo de texto padrão
     500 → destaques sutis, navegação
     600 → títulos de seção, CTAs
     700 → títulos grandes
     800 → hero titles, números de destaque
     900 → display gigante, impacto máximo  */

  /* Escala de tipo */
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.25rem;
  --text-xl:   1.5rem;
  --text-2xl:  2rem;
  --text-3xl:  3rem;
  --text-4xl:  4.5rem;
  --text-5xl:  6rem;

  /* Espaçamento */
  --space-xs:  0.5rem;
  --space-sm:  1rem;
  --space-md:  2rem;
  --space-lg:  4rem;
  --space-xl:  8rem;
  --space-2xl: 12rem;

  /* Layout */
  --container: 1280px;
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 24px;

  /* Transições */
  --ease-out:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:   cubic-bezier(0.7, 0, 0.84, 0);
  --duration:  0.6s;
}
```

---

### CSS Organizado por Responsabilidade

Cada bloco de CSS tem uma única responsabilidade. Nunca misturar layout com cor com animação no mesmo seletor.

```css
/* ✅ BOM — separado e claro */

/* Layout */
.card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: var(--space-sm);
}

/* Visual */
.card {
  background: var(--color-surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
}

/* Estado */
.card:hover {
  border-color: var(--color-accent);
}
```

```css
/* ❌ RUIM — tudo junto, difícil de manter */
.card {
  display: grid; grid-template-rows: auto 1fr auto; gap: 1rem;
  background: #141414; border: 1px solid rgba(255,255,255,.08); border-radius: 12px;
  transition: all 0.3s ease;
}
```

---

### Nomenclatura de Classes — BEM Simplificado

```html
<!-- Bloco -->
<section class="features">

  <!-- Elemento -->
  <div class="features__grid">
    <div class="features__card">
      <span class="features__icon">→</span>
      <h3 class="features__title">Título</h3>
      <p class="features__desc">Descrição</p>
    </div>
  </div>

</section>

<!-- Modificador com data-attribute (mais legível que --modifier) -->
<button class="btn" data-variant="outline">Saiba mais</button>
<button class="btn" data-variant="filled">Começar</button>
```

```css
.btn { /* base */ }
.btn[data-variant="outline"] { border: 1px solid currentColor; }
.btn[data-variant="filled"]  { background: var(--color-accent); }
```

---

### JavaScript — Organização em Módulos Lógicos

Dividir o JS em blocos com comentários claros. Cada bloco tem uma responsabilidade.

```javascript
// ============================================================
// SETUP
// ============================================================
gsap.registerPlugin(ScrollTrigger);

const $ = selector => document.querySelector(selector);
const $$ = selector => gsap.utils.toArray(selector);


// ============================================================
// ANIMAÇÕES DE ENTRADA (page load)
// ============================================================
function initEntrance() {
  const tl = gsap.timeline({ delay: 0.2 });

  tl.from('.hero__title',    { y: 80, opacity: 0, duration: 1,   ease: 'power3.out' })
    .from('.hero__subtitle', { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
    .from('.hero__cta',      { y: 20, opacity: 0, duration: 0.6                     }, '-=0.4');
}


// ============================================================
// PARALLAX (scroll scrub)
// ============================================================
function initParallax() {
  // Hero — camada de fundo
  gsap.to('.hero__bg', {
    y: '30%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  // Hero — texto sai mais rápido
  gsap.to('.hero__title', {
    y: '-20%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });
}


// ============================================================
// REVEALS (elementos entrando na viewport)
// ============================================================
function initReveals() {
  $$('[data-reveal]').forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}


// ============================================================
// SEÇÃO PINADA (storytelling cinematográfico)
// ============================================================
function initPinnedSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.story',
      start: 'top top',
      end: '+=250%',
      scrub: 1,
      pin: true,
    },
  });

  tl.from('.story__img',  { x: '-100vw', opacity: 0, duration: 1 })
    .from('.story__text', { y: 60, opacity: 0,         duration: 0.6 }, '-=0.4')
    .to('.story__img',    { scale: 1.1,  opacity: 0,   duration: 0.5 })
    .to('.story__text',   { y: -40,      opacity: 0,   duration: 0.4 }, '<');
}


// ============================================================
// MORPHING DE COR POR SEÇÃO
// ============================================================
function initColorMorph() {
  $$('[data-bg]').forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter:     () => gsap.to('body', { backgroundColor: section.dataset.bg, duration: 0.8 }),
      onEnterBack: () => gsap.to('body', { backgroundColor: section.dataset.bg, duration: 0.8 }),
    });
  });
}


// ============================================================
// INICIALIZAR TUDO
// ============================================================
initEntrance();
initParallax();
initReveals();
initPinnedSection();
initColorMorph();
```

---

### Regras de Formatação

**Indentação e espaçamento:**
- 2 espaços para HTML e CSS, 2 espaços para JS
- Linha em branco entre blocos de CSS distintos
- Linha em branco entre funções JS

**Comentários:**
- Comentários de seção em HTML: `<!-- === NOME DA SEÇÃO === -->`
- Comentários de bloco em JS: `// ====... NOME ...====`
- Comentários inline apenas quando o "porquê" não é óbvio

**Nomes:**
- Classes HTML: `kebab-case` (ex: `hero-title`, `features__card`)
- Variáveis JS: `camelCase` (ex: `scrollTarget`, `cardElements`)
- Constantes: `camelCase` para instâncias, `UPPER_CASE` apenas para configurações globais imutáveis
- Funções JS: verbo + substantivo (ex: `initParallax`, `setupScrollTrigger`, `animateCards`)

**Alinhamento em objetos GSAP** (legibilidade visual):
```javascript
// ✅ BOM — valores alinhados, fácil de comparar
tl.from('.title',    { y: 80, opacity: 0, duration: 1.0, ease: 'power3.out' })
  .from('.subtitle', { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
  .from('.cta',      { y: 20, opacity: 0, duration: 0.6                     }, '-=0.4');

// ❌ RUIM — desordenado, difícil de ajustar
tl.from('.title', {y: 80, opacity: 0, duration: 1, ease: 'power3.out'}).from('.subtitle', {y: 40, opacity: 0, duration: 0.8, ease: 'power2.out'}, '-=0.5');
```

---

## Checklist de Qualidade

Antes de entregar qualquer interface, verifique:

**React & Magic UI:**
- [ ] Projeto estruturado em React com Vite
- [ ] Hook `useScrollAnimation` centraliza toda lógica GSAP
- [ ] MCP do Magic UI consultado e componentes mapeados por seção
- [ ] Pelo menos 3 componentes Magic UI presentes no site
- [ ] Componentes Magic UI integrados com animações GSAP de scroll

**Design:**
- [ ] Tipografia tem personalidade (não é Inter/system-ui genérico)
- [ ] Paleta de cores definida em variáveis CSS no `:root`
- [ ] Animações com easing não-linear (power2, power3, elastic)
- [ ] Mobile considerado (touch events, viewport units)
- [ ] Hover states distintos e satisfatórios
- [ ] Contraste de acessibilidade respeitado (WCAG AA mínimo)
- [ ] Ícones presentes em features, botões de CTA e listas
- [ ] Ícones animados com GSAP nas seções de destaque

**Scroll & GSAP:**
- [ ] `scrub: 1` em pelo menos 3 elementos visuais principais
- [ ] Parallax com no mínimo 2 camadas na seção hero
- [ ] `will-change: transform` nos elementos animados
- [ ] `overflow: hidden` nos containers com parallax

**Código:**
- [ ] Arquivo HTML dividido em seções com comentários
- [ ] CSS usa variáveis para cores, fontes e espaçamentos
- [ ] JS organizado em funções com nomes descritivos
- [ ] Sem valores mágicos soltos (ex: `margin: 37px`, `color: #a3b2c1`)
- [ ] Objetos GSAP com valores alinhados verticalmente

---

## Anti-Padrões a Evitar

**React & Magic UI:**
❌ Construir em HTML puro quando o projeto deveria ser React
❌ Manipular DOM diretamente com `document.querySelector` dentro de componentes React — usar refs
❌ Não limpar animações GSAP no `useEffect` return — sempre usar `gsap.context().revert()`
❌ Ignorar o MCP do Magic UI e fazer componentes animados do zero quando já existem prontos
❌ Colocar componentes Magic UI sem integrar com o scroll GSAP — eles devem entrar com `scrub`

**Design:**
❌ Gradiente `from-purple-500 to-pink-500`  
❌ Cards com `shadow-md rounded-lg` genéricos  
❌ Botões com `bg-blue-500 hover:bg-blue-600`  
❌ Animações com `transition: all 0.3s ease`  

**Código:**  
❌ CSS sem variáveis — valores repetidos soltos pelo arquivo  
❌ JS sem separação por responsabilidade — tudo numa função gigante  
❌ Nomes vagos: `div1`, `box`, `item`, `wrap`, `cont`  
❌ Comentários que descrevem o óbvio: `// pega o elemento` antes de `querySelector`  
❌ Objetos GSAP numa linha só quando têm 3+ propriedades  
❌ ScrollTrigger sem `scrub` em efeitos de deslocamento visual  
