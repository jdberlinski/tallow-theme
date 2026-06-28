# Tallow

A minimal, distraction-free VS Code theme. Available in dark and light variants.

Inspired by [Min](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.min-theme), [nofrils](https://github.com/robertmeta/nofrils), and [Gruber Darker](https://github.com/rexim/gruber-darker-theme).

## Design philosophy

Color is used in only three ways:

| Token | Treatment |
|---|---|
| Comments | Faded warm gray, italic |
| Strings | Muted slate blue |
| Numbers & language constants (`true`, `false`, `null`, `NA`, `Inf`, …) | Muted warm amber |

Everything else is plain foreground.

Keywords (`if`, `function`, `const`, …) are **bold**. By default, operators (such as `<-` in R) are not bolded, but this can be changed in the settings.

Comments are _italic_, which can be disabled in the settings.

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
