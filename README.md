# Tallow

A minimal, warm, distraction-free VS Code theme. Available in dark and light variants.

Inspired by [Min](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.min-theme), [nofrils](https://github.com/robertmeta/nofrils) (vim), and [Gruber Darker](https://github.com/rexim/gruber-darker-theme) (emacs).

## Design philosophy

Most themes use color to label every syntactic category — keywords, types, functions, variables, strings, numbers. Tallow uses it for three:

| Token | Treatment |
|---|---|
| Comments | Faded warm gray, italic |
| Strings | Muted slate blue |
| Numbers & language constants (`true`, `false`, `null`, `NA`, `Inf`, …) | Muted warm amber |

Everything else — functions, types, variables, operators, punctuation — is plain foreground. Structure is communicated by your font and indentation, not color.

Keywords (`if`, `function`, `const`, …) are **bold** but the same color as surrounding text, giving them weight without adding noise.

## Palette

### Dark

| Role | Color |
|---|---|
| Background | `#1d1b19` |
| Foreground | `#e8e3d9` |
| Comments | `#635d57` |
| Strings | `#7d96b8` |
| Numbers / constants | `#b09868` |

### Light

| Role | Color |
|---|---|
| Background | `#f5f0e8` |
| Foreground | `#1d1b19` |
| Comments | `#b5aca0` |
| Strings | `#4a6a96` |
| Numbers / constants | `#7a5828` |

## License

MIT
