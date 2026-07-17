# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and the project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `styles/a11y.css`: honors `prefers-reduced-motion` (drops transitions and
  entrance animations, slows the loaders) and `forced-colors` (keeps focus and
  switch state visible in Windows High Contrast).
- `-solid` and `-solid-hover` semantic tokens for filled surfaces that carry
  label text.
- Accessibility section in the README, covering contrast, focus, motion,
  forced colors, and the keyboard/ARIA a maintainer supplies per component.

### Changed

- Solid buttons, badges, alert titles, active items, and progress fills now use
  the deeper `-solid` shades. White label text on the soft base pastels measured
  about 2:1 to 3.9:1; the `-solid` shades clear WCAG AA (4.5:1+) in both themes.

### Fixed

- The warning button hover no longer drops to 3.8:1; it uses a lighter tan that
  keeps dark text at AA.

## [1.0.0] - 2026-07-17

First tagged release. The framework ships as an npm package with a versioned,
minified bundle.

### Added

- `package.json` with a `style` field and an `exports` map, so the framework
  installs from npm and resolves both the source (`pluto-design-system`) and the
  minified build (`pluto-design-system/min`).
- Build pipeline (PostCSS: `postcss-import`, `autoprefixer`, `cssnano`) that
  inlines the local `@import` chain and writes `dist/pluto.min.css`. The source
  drops from 131 KB to 87 KB.
- `browserslist` targeting Chrome/Edge 111+, Safari 16.4+, Firefox 113+, which
  drives autoprefixing and minification.
- CDN usage via jsDelivr and unpkg, documented in the README.
- This changelog.

### Fixed

- Fontsource `@import` rules (Alegreya Sans, Roboto Mono, Inter) now precede the
  `@font-face` blocks in `styles/fonts.css`. A browser ignores any `@import`
  placed after other rules, so body text had fallen back to a system sans
  instead of rendering Alegreya Sans.

### Baseline

The `1.0.0` surface carried over from the pre-versioned framework:

- Design tokens under the `--pluto-*` namespace: color palette, semantic slots,
  type, spacing, radius, shadow, z-index, motion.
- Light and dark themes, automatic via `prefers-color-scheme` and manual via
  `data-pluto-theme`.
- A 12-column responsive grid with `sm`/`md`/`lg`/`xl` breakpoints.
- Around 40 components, including the Pluto signatures: code cells, admonitions,
  table of contents, and the layout aside.
- A single-file bundle (`pluto.css`) plus per-layer stylesheets under `styles/`.

[Unreleased]: https://github.com/pebeto/pluto-design-system/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/pebeto/pluto-design-system/releases/tag/v1.0.0
