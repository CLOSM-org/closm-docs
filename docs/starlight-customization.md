# Starlight Design Customization

## Overview

Starlight provides three levels of design customization, from quick CSS tweaks to complete component overrides.

## Customization Levels

| Level | Effort | Flexibility | Use Case |
|-------|--------|-------------|----------|
| CSS Variables | Low | Medium | Colors, fonts, spacing |
| Theme Library | Low | High | Complete design overhaul |
| Component Override | High | Maximum | Custom layouts/behaviors |

## 1. CSS Variables (Recommended First Step)

**Best for:** Quick visual changes without touching components

### Basic Theme Colors

Override in custom CSS file:

```css
:root {
  --color-accent-high: #your-color;
  --color-accent: #your-color;
  --color-accent-low: #your-color;
  --color-gray-1: #your-color;
  --color-gray-2: #your-color;
  /* ... more variables */
}
```

### Reference

- All CSS custom properties: [Starlight props.css](https://github.com/withastro/starlight/blob/main/packages/starlight/style/props.css)
- Official guide: [CSS & Styling](https://starlight.astro.build/guides/css-and-tailwind/)

### Cascade Layers (Advanced)

Control CSS priority:

```css
@layer before-starlight {
  /* Applied before Starlight */
}

@layer override {
  /* Applied after Starlight (highest priority) */
}
```

**Note:** Unlayered custom CSS automatically overrides Starlight defaults

## 2. Theme Libraries

**Best for:** Complete design change without custom code

### Community Themes

Available at [Starlight Themes](https://starlight.astro.build/resources/themes/)

Examples:
- `starlight-theme-black`
- `starlight-theme-galaxy`
- `starlight-theme-nova`

### How Themes Work

- Implemented as Starlight plugins
- Include custom CSS, component overrides, features
- Installed via npm/package manager

### Tailwind Integration

One-line integration via Starlight CLI:

```bash
# Integration command
npx astro add tailwind
```

Benefits:
- Seamless dark mode integration
- Works with Starlight color system
- Override via `--color-accent-*` and `--color-gray-*`

## 3. Component Overrides

**Best for:** Custom layouts, unique interactions

### Configuration

In `astro.config.mjs`:

```javascript
starlight({
  components: {
    Header: './src/components/CustomHeader.astro',
    Sidebar: './src/components/CustomSidebar.astro',
    // Other components...
  }
})
```

### Overridable Components

| Category | Components |
|----------|-----------|
| Header | Header, SiteTitle, Search, SocialIcons |
| Sidebar | Sidebar, SidebarSublist |
| Navigation | Pagination, PageTitle, Hero |
| Page Layout | PageFrame, MobileMenuToggle, ThemeSelect |

Full list: [Overrides Reference](https://starlight.astro.build/reference/overrides/)

### Reusing Default Components

Import and combine with custom UI:

```astro
---
import Default from '@astrojs/starlight/components/Header.astro';
---

<Default {...Astro.props} />
<div>Custom content</div>
```

### Conditional Rendering

Access page data via `starlightRoute`:

```astro
---
const { starlightRoute } = Astro.props;
---

{starlightRoute.slug === 'special-page' ? (
  <CustomComponent />
) : (
  <DefaultComponent {...Astro.props} />
)}
```

## Recommended Approach

| Priority | Action | When |
|----------|--------|------|
| 1 | CSS Variables | Need color/font changes |
| 2 | Community Theme | Want major design refresh |
| 3 | Tailwind | Have existing design system |
| 4 | Component Override | Need unique layouts/features |

**Rationale:** CSS variables require minimal code and maintenance. Escalate to component overrides only when necessary.

## Modern Design Features

Starlight includes:
- HSL-based color system with gradients
- Smooth animations and transitions
- Glass effects for light/dark modes
- Responsive design across devices

## References

- [Customizing Starlight](https://starlight.astro.build/guides/customization/)
- [CSS & Styling](https://starlight.astro.build/guides/css-and-tailwind/)
- [Overriding Components](https://starlight.astro.build/guides/overriding-components/)
- [Themes](https://starlight.astro.build/resources/themes/)
- [Creating Starlight Themes](https://hideoo.dev/notes/starlight-plugin-how-to-create-theme/)
