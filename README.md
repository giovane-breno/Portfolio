# Giovane Barbosa — Portfólio

Portfólio pessoal desenvolvido como single-file HTML, sem build tools ou dependências locais.

## Stack

- **Bootstrap 5.3.3** — grid e componentes
- **AOS 2.3.1** — animações on scroll
- **Bootstrap Icons 1.11.3** — ícones
- **Inter** (Google Fonts) — tipografia

## Funcionalidades

- Dark / Light mode com persistência via `localStorage`
- Toggle de idioma PT-BR / EN
- Animação de typing em loop no hero
- Seção de experiência com timeline dois-colunas e cálculo de duração automático via JS
- Slideshow automático no card do Petti com lightbox ao clicar
- Lightbox com navegação por teclado (`←` `→` `Esc`) para todos os projetos
- Contadores animados (cubic easing) nos stats
- Barra de scroll progress customizada
- Background dinâmico por seção (crossfade de gradientes)
- Nav link ativo por scroll via `IntersectionObserver`
- Badge "Disponível para oportunidades" com animação pulse
- Toast ao copiar email
- Botão back-to-top
- Schema.org JSON-LD e meta Open Graph
- Cursor glow

## Estrutura

```
Desktop/
├── a.html
└── images/
    └── petti/
        ├── 1.png   # Landing page
        ├── 2.png   # Dashboard
        ├── 3.png   # PDV
        └── 4.png   # Relatórios
```

## Como rodar

Abra `a.html` diretamente no browser. Não requer servidor.

## Deploy

Recomendado: **GitHub Pages** ou **Vercel**.

Para GitHub Pages, renomeie `a.html` para `index.html` e faça push para um repositório público. Ative Pages em *Settings → Pages → Deploy from branch → main*.
