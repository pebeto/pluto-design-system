# Pluto Design System
<img src="https://raw.githubusercontent.com/gist/fonsp/9a36c183e2cad7c8fc30290ec95eb104/raw/ca3a38a61f95cd58d79d00b663a3c114d21e284e/cute.svg">

A general-purpose CSS framework — Bootstrap-shaped surface (`.btn`, `.card`, `.alert`, `.row` / `.col-md-6`, utilities) — built with the visual language of [Pluto.jl](https://plutojl.org/): Vollkorn for headings, Alegreya Sans for body, JuliaMono for code, soft warm pastels for the semantic palette.

```html
<link rel="stylesheet" href="design_system/pluto.css" />

<header class="hero">
    <h1 class="display-1">Reactive looks for the open web</h1>
    <p class="lead">Drop one stylesheet in. Write semantic HTML. Done.</p>
    <button class="btn btn-primary btn-lg">Get started</button>
</header>

<main class="container my-4">
    <div class="alert alert-info">
        <span class="alert-title">Note</span>
        <p>This page is using the Pluto design system.</p>
    </div>

    <div class="row gy-3">
        <div class="col-12 col-md-6 col-lg-4"><div class="card">…</div></div>
    </div>
</main>
```

Open `demo/index.html` in a browser to see every component.

---

## Why use it

- **One file**, no build step. CDN fonts, vanilla CSS.
- **Bootstrap-shaped surface** — if you've used Bootstrap, you already know the class names (`.btn`, `.btn-primary`, `.card`, `.row`, `.col-md-6`, `.alert-danger`, `.form-control`, `.text-center`, `.mt-3`, …).
- **Pluto's aesthetic** — Vollkorn serif headings with the signature h1/h2 underline, soft pastel admonitions, JuliaMono code blocks, warm cream surfaces.
- **Light + dark** — automatic via `prefers-color-scheme`, manual via `<html data-pluto-theme="dark">`.
- **CSS variables for everything** — re-skin without editing the source.

## What's in the box

```
design_system/
├── pluto.css                 # single bundle entry point
├── styles/
│   ├── tokens.css            # CSS variables: palette, scales, semantic slots
│   ├── fonts.css             # @font-face — Vollkorn, Alegreya, JuliaMono, …
│   ├── reset.css             # cross-browser reset
│   ├── typography.css        # h1–h6, p, code, blockquote, kbd, details, …
│   ├── grid.css              # .container, .row, .col-{N,sm,md,lg,xl}-{1..12}
│   ├── components.css        # buttons, alerts, cards, forms, navbar, …
│   └── utilities.css         # spacing, display, flex, text, color, …
└── demo/
    └── index.html            # showcase
```

You can either import `pluto.css` (which `@imports` everything) or pick the parts you need:

```html
<!-- Just what I need -->
<link rel="stylesheet" href="design_system/styles/tokens.css" />
<link rel="stylesheet" href="design_system/styles/reset.css" />
<link rel="stylesheet" href="design_system/styles/typography.css" />
<link rel="stylesheet" href="design_system/styles/components.css" />
```

## Layout

### Containers

| Class                | Behavior                                      |
| -------------------- | --------------------------------------------- |
| `.container`         | Responsive max-width, grows with breakpoints  |
| `.container-fluid`   | Full width                                    |
| `.container-{sm…xl}` | Pinned to a single breakpoint                 |
| `.container-notebook`| 731 px — Pluto's notebook column width        |

### Grid

12-column flex grid. Breakpoints: **sm** 576px, **md** 768px, **lg** 992px, **xl** 1200px.

```html
<div class="row gy-3">
    <div class="col-12 col-md-6 col-lg-4">A</div>
    <div class="col-12 col-md-6 col-lg-4">B</div>
    <div class="col-12 col-md-12 col-lg-4">C</div>
</div>
```

Helpers: `.col-auto`, `.offset-{1..6}`, `.gx-{0..5}`, `.gy-{0..5}`.

## Typography

Element styling is automatic — no class needed.

| Element                 | Style                                                   |
| ----------------------- | ------------------------------------------------------- |
| `h1`, `h2`              | Vollkorn bold, Pluto-style underline (solid / dotted)   |
| `h3`–`h6`               | Vollkorn semibold                                       |
| `.display-1` … `.display-3` | Hero-size headings, no underline                    |
| `p`                     | Alegreya Sans, line-height 1.6                          |
| `.lead`                 | Larger, lighter intro paragraph                         |
| `code`, `pre`           | JuliaMono, soft warm code-bg                            |
| `kbd`                   | Pluto-style key cap                                     |
| `blockquote`            | Vollkorn italic, rounded warm panel                     |
| `mark`                  | Soft warning highlight                                  |
| `details` / `summary`   | Pluto's disclosure widget                               |

## Components

All components are vanilla HTML — no JS required (except the modal toggle in the demo). Variants follow the Bootstrap pattern: `.btn-primary`, `.alert-danger`, etc.

| Component        | Class                                                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Buttons          | `.btn`, `.btn-{primary,success,info,warning,danger,dark,light}`, `.btn-outline-{primary,…}`, `.btn-ghost`, `.btn-link`     |
| Button sizes     | `.btn-sm`, `.btn-lg`, `.btn-block`                                                                                         |
| Button group     | `.btn-group > .btn`                                                                                                        |
| Forms            | `.form-control`, `.form-select`, `.form-check`, `.form-check-input`, `.form-check-label`, `.form-range`, `.form-label`, `.form-text` |
| Form validation  | `.is-valid`, `.is-invalid`, `.invalid-feedback`                                                                            |
| Input group      | `.input-group`, `.input-group-text`                                                                                        |
| Alerts           | `.alert`, `.alert-{primary,success,info,warning,danger,hint}`, `.alert-title`, `.alert-dismiss`                            |
| Badges           | `.badge`, `.badge-pill`, `.badge-{primary,success,info,warning,danger,dark,light}`                                         |
| Cards            | `.card`, `.card-{header,body,footer,title,subtitle,text,img-top}`, `.card-{primary,success,…}`                             |
| Tables           | `.table`, `.table-{striped,hover,bordered,borderless,sm,mono,responsive}`                                                  |
| List groups      | `.list-group`, `.list-group-item`, `.list-group-flush`, `.list-group-item.active`/`.disabled`                              |
| Breadcrumb       | `.breadcrumb`, `.breadcrumb-item`, `.breadcrumb-item.active`                                                               |
| Pagination       | `.pagination`, `.page-item`, `.page-link`, `.page-item.active`/`.disabled`                                                 |
| Progress         | `.progress`, `.progress-bar`, `.progress-{success,info,warning,danger}`, `.progress-indeterminate`                         |
| Spinner          | `.spinner`, `.spinner-dot`                                                                                                 |
| Navbar           | `.navbar`, `.navbar-sticky`, `.navbar-brand`, `.navbar-nav`, `.navbar-spacer`                                              |
| Tabs / pills     | `.nav`, `.nav-tabs`, `.nav-pills`, `.nav-fill`, `.nav-link`, `.nav-link.active`                                            |
| Modal            | `.modal`, `.modal.show`, `.modal-dialog`, `.modal-{header,body,footer,title}`, `dialog.modal-native`                       |
| Tooltip          | `[data-tooltip="…"]` — hover any element                                                                                   |
| Code cell *      | `.code-cell`, `.code-cell-input`, `.code-cell-output`, `.code-cell-assignee`, `.code-cell.is-error`                        |
| Hero             | `.hero`, `.hero-fluid`                                                                                                     |
| Logo             | `.pluto-logo`                                                                                                              |

### PlutoUI widgets

A second tier of components ported from [PlutoUI.jl](https://github.com/JuliaPluto/PlutoUI.jl). They are general-purpose web components — the Julia-specific bond plumbing is gone.

| Component         | Class                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| Switch            | `.switch`, `.switch-{sm,lg}`, `.switch-{primary,info,warning,danger}`                          |
| Range slider      | `.range` (styles native `<input type=range>`); `.range-slider` (skin for noUiSlider)            |
| Check-list        | `.check-list`, `.check-list-column`, `.check-list-all`                                         |
| Notebook card     | `.notebook-card`, `.notebook-card-{thumb,body,title,nav,cta}`, `.notebook-card-{info,success,warning}` |
| Table of contents | `.toc`, `.toc-header`, `.toc-list`, `.toc-aside`, `.toc-h{1..6}`, `.toc a.active`              |
| Aside (sidenote)  | `.layout-aside`, `.layout-aside-host`                                                          |
| Wide cell        | `.layout-wide`                                                                                  |
| Layout helpers    | `.layout-hbox`, `.layout-vbox`, `.layout-grid`                                                 |

\* The `code-cell` family is the one Pluto-specific component — opt in to it when you actually want the notebook look.

## Utilities

Bootstrap-style atomic helpers, scoped to the framework's spacing scale.

**Spacing scale**: `0` (0), `1` (.25rem), `2` (.5rem), `3` (1rem), `4` (1.5rem), `5` (3rem).

| Group        | Classes                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------- |
| Display      | `.d-{none,block,inline,inline-block,flex,inline-flex,grid}`                                   |
| Flex         | `.flex-{row,row-reverse,column,column-reverse,wrap,nowrap,grow-{0,1},shrink-{0,1}}`            |
| Justify      | `.justify-content-{start,end,center,between,around,evenly}`                                   |
| Align        | `.align-items-{start,end,center,baseline,stretch}`                                            |
| Gap          | `.gap-{0..5}`                                                                                 |
| Margin       | `.m{,t,b,s,e,x,y}-{0..5,auto}`                                                                |
| Padding      | `.p{,t,b,s,e,x,y}-{0..5}`                                                                     |
| Text align   | `.text-{start,center,end,justify}`                                                            |
| Text wrap    | `.text-{nowrap,truncate,break}`                                                               |
| Text case    | `.text-{lowercase,uppercase,capitalize}`                                                      |
| Font family  | `.font-{serif,sans,ui,mono}`                                                                  |
| Font weight  | `.fw-{light,regular,medium,semibold,bold}`                                                    |
| Font size    | `.fs-{xs,sm,base,lg,xl,2xl,3xl,4xl,5xl}`                                                      |
| Text color   | `.text-{primary,success,info,warning,danger,neutral,muted,strong,body,inverse,dim}`           |
| Bg color     | `.bg-{transparent,body,soft,muted,primary,success,info,warning,danger,cream,dark,light}`     |
| Border       | `.border`, `.border-0`, `.border-{top,end,bottom,start}`, `.border-{primary,…}`               |
| Radius       | `.rounded-{0,sm,,lg,xl,pill,circle}`                                                          |
| Shadow       | `.shadow-{none,sm,,lg,xl}`                                                                    |
| Position     | `.position-{static,relative,absolute,fixed,sticky}`, `.top-0`, `.bottom-0`, `.start-0`, `.end-0` |
| Sizing       | `.w-{25,50,75,100,auto}`, `.h-{…}`, `.mw-100`, `.mh-100`                                      |
| Overflow     | `.overflow-{hidden,auto,scroll,visible}`                                                      |
| Opacity      | `.opacity-{0,25,50,75,100}`                                                                   |
| A11y         | `.visually-hidden`, `.sr-only`                                                                |
| Layout       | `.stack`, `.stack-{sm,lg,xl}`, `.cluster`                                                     |

### Responsive variants

Layout-sensitive utilities have **breakpoint-suffixed** versions — pattern: `.{utility}-{bp}-{value}` activates at `min-width: bp`.

Breakpoints: `sm` 576px, `md` 768px, `lg` 992px, `xl` 1200px.

| Group           | Pattern                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| Display         | `.d-{sm,md,lg,xl}-{none,block,inline,inline-block,flex,inline-flex,grid}`                              |
| Flex            | `.flex-{bp}-{row,row-reverse,column,column-reverse,wrap,nowrap,grow-{0,1},shrink-{0,1}}`               |
| Justify         | `.justify-content-{bp}-{start,end,center,between,around,evenly}`                                       |
| Align items     | `.align-items-{bp}-{start,end,center,baseline,stretch}`                                                |
| Gap             | `.gap-{bp}-{0..5}`                                                                                     |
| Margin          | `.m{,t,b,s,e,x,y}-{bp}-{0..5,auto}`                                                                    |
| Padding         | `.p{,t,b,s,e,x,y}-{bp}-{0..5}`                                                                         |
| Text align      | `.text-{bp}-{start,center,end}`                                                                        |

Example:
```html
<div class="d-block d-md-flex justify-content-md-between gap-md-3 p-2 p-md-4 text-center text-md-start">
    Stacks vertically on phones, lays out horizontally with space-between
    + 1.5rem padding from md (≥ 768px).
</div>
```

### Fluid display headings

`.display-1`, `.display-2`, `.display-3` and `.hero` use `clamp()` so they shrink on small screens without you needing to set a breakpoint:

```css
.display-1  { font-size: clamp(2.5rem, 5vw + 1.5rem, 4.5rem); }
.display-2  { font-size: clamp(2.25rem, 4vw + 1.25rem, 3.75rem); }
.display-3  { font-size: clamp(2rem, 3vw + 1rem, 3rem); }
.hero       { padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem); }
```

## Theming

### Light / dark

Light is the default. Dark applies automatically with `prefers-color-scheme: dark`. Force a theme:

```html
<html data-pluto-theme="dark">  <!-- or "light" -->
```

### Customizing

All design values are CSS variables. Override on `:root` to rebrand:

```css
:root {
    /* Use a teal as the primary instead of indigo */
    --pluto-primary: hsl(174, 50%, 45%);
    --pluto-primary-soft: hsl(174, 60%, 92%);
    --pluto-primary-strong: hsl(174, 60%, 30%);

    /* Bigger spacing rhythm */
    --pluto-space-cell: 24px;

    /* Different headings font */
    --pluto-font-serif: "Source Serif Pro", Georgia, serif;
}
```

### Token reference

| Group              | Tokens                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Fonts              | `--pluto-font-{serif,sans,ui,mono,mono-roboto,base}`                                                    |
| Font size          | `--pluto-fs-{xs,sm,base,lg,xl,2xl,3xl,4xl,5xl}`                                                         |
| Font weight        | `--pluto-fw-{light,regular,medium,semibold,bold}`                                                       |
| Spacing            | `--pluto-space-{0..6,cell}`                                                                             |
| Radius             | `--pluto-radius-{none,sm,md,lg,xl,pill,base}`                                                           |
| Shadow             | `--pluto-shadow{,-none,-sm,-lg,-xl,-tooltip}`                                                           |
| Border width       | `--pluto-bw-{1,2,3,4}`                                                                                  |
| Z-index            | `--pluto-z-{dropdown,sticky,fixed,modal-backdrop,modal,popover,tooltip}`                                |
| Transition         | `--pluto-transition{,-fast,-slow}`                                                                      |
| Container          | `--pluto-container-{sm,md,lg,xl,notebook}`                                                              |
| Palette            | `--pluto-{cream,slate,indigo,sage,sky,sand,rose}-{50,100,200,…,600(/700)}`                              |
| Surfaces           | `--pluto-{bg,bg-soft,bg-muted,surface,surface-raised}`                                                  |
| Text               | `--pluto-text{,-strong,-muted,-inverse}`                                                                |
| Border / link      | `--pluto-border`, `--pluto-border-strong`, `--pluto-link`, `--pluto-link-underline`                     |
| Code               | `--pluto-code-bg`, `--pluto-code-text`                                                                  |
| Semantic           | `--pluto-{primary,success,info,warning,danger,neutral,light,dark}{,-soft,-strong,-text}`                |
| Focus              | `--pluto-focus-ring`                                                                                    |

## Browser support

Modern evergreen browsers — anything that supports CSS custom properties, `oklch()`, and logical properties (`margin-inline`, etc.). That means Chrome/Edge 111+, Safari 16.4+, Firefox 113+.

## License

MIT — same as Pluto.jl. Visual design and tokens come from Pluto's frontend stylesheet; this directory just repackages them as a generic framework.
