# Canto Zen Design Direction

Status: approved. The complete design direction and specifications were confirmed on 2026-10-02. This document guides future implementation; it does not request changes to the app.

## Confirmed constraints

- Canto Zen is a fictional home-furniture e-commerce site built as a portfolio showpiece.
- All interface and editorial copy is in English.
- Existing colors are placeholders and do not constrain the new palette.
- Existing fonts are placeholders and will not be used in the final direction.
- shadcn/ui is the base for interface components. Adapt its components to the approved design system.

## Agreed direction

### Brand character

Warm, architectural, and premium. Natural materials, thoughtful composition, and rooms that feel inhabited define the visual character.

The name's "Zen" means everyday calm, expressed through materials, light, and space. It does not prescribe a specifically Japanese-inspired visual identity.

### Color character

Warm stone backgrounds, deep brown text, and a restrained moss-green accent. Photography supplies most of the color through wood, linen, and sunlight. Exact shades are defined in the palette below.

### Typography character

A softly expressive serif for headlines and a clear sans-serif for shopping information. Favor moderate contrast and sturdy letterforms. Source Serif 4 and Hanken Grotesk fill these roles; existing placeholder families will not be retained.

### Homepage purpose

Establish the mood and make shopping obvious. Open with a strong editorial composition and provide a clear path into the furniture collection.

The intended shopper is a design-conscious person furnishing their own home. Aspirational imagery must sit alongside practical prices, dimensions, finishes, and availability.

### Homepage sequence

1. Editorial opening with asymmetric imagery and a clear "Shop furniture" action.
2. Shop by category.
3. Featured furniture.
4. One room story with links to the pictured products.
5. A brief materials and brand section.
6. Footer with shopping and support navigation.

Each section has a distinct purpose. Reserve the strongest asymmetry for the opening; keep shopping sections consistent and easy to scan.

### Asymmetric imagery

Use unequal image sizes with staggered placement. Pair a larger room photograph with a smaller furniture or material detail, giving each enough space to feel deliberate.

Make this pairing the homepage's opening composition: a dominant room image, a smaller offset detail image, a short left-aligned headline, and a visible "Shop furniture" action.

On mobile, keep unequal image sizes and stack them with a small horizontal offset. Keep the headline and shopping action early in reading order. Images must not overlap in a way that obscures furniture.

### Photography

Show inhabited but carefully composed rooms: natural light, believable material texture, and restrained styling. Preserve furniture proportions and recognizable finishes. Avoid crops that remove the defining shape of the featured piece.

Use suitable existing product photography. Select or create dedicated hero imagery if existing crops cannot support the pairing. The two opening images should share lighting, material palette, and a coherent room or product story.

The existing catalog contains square lifestyle images. Dedicated editorial imagery and room-story content will need to be selected or produced during implementation; their existence is not assumed.

### Motion

Use subtle feedback for user actions. Avoid parallax, repeated scroll reveals, and autoplay image carousels. Respect reduced-motion preferences.

## Approved specifications

### Palette

| Role | Name | Value | Use |
| --- | --- | --- | --- |
| Canvas | Warm stone | `#F2F0E9` | Main page background |
| Surface | Chalk | `#FAF9F5` | Inputs, panels, and light button text |
| Primary text | Deep brown | `#302B25` | Headlines, copy, prices |
| Secondary text | Mineral gray | `#69665E` | Supporting descriptions and metadata |
| Accent | Moss | `#455B46` | Primary actions, links, selected states, focus |
| Decorative divider | Pale stone | `#D8D4C9` | Quiet separators |

Photography carries the broadest color range. Keep moss concentrated on meaningful actions rather than large decorative blocks. Use typography and spacing to establish hierarchy before adding colored surfaces.

Calculated contrast ratios: deep brown on canvas 12.29:1; secondary text on canvas 5.03:1; chalk on moss 7.02:1; moss on canvas 6.49:1. Recheck contrast when colors, opacity, backgrounds, or states change. Pale stone is decorative and must not be the sole indicator of an input boundary or interactive state.

Error, warning, and success colors require separate accessible semantic tokens during implementation. Pair status color with visible text or an icon; do not imply that moss covers every semantic state.

### Type system

- **Source Serif 4:** editorial headlines, section headings, and the typographic wordmark. Start with weights 400–500 and moderate optical sizing; preserve sturdy strokes at large sizes.
- **Hanken Grotesk:** navigation, body copy, product names, prices, metadata, buttons, and forms. Use 400 for regular text, 500 for emphasis, and 600 where controls need stronger hierarchy.
- Use sentence case. Keep full headlines typographically consistent; use italics only when editorial meaning calls for them.
- Starting scale: body 16–18px; secondary copy 14px; product titles 18–20px; section headings 32–48px; opening headline 48–80px on desktop and 36–48px on mobile. Adjust within these ranges to fit real copy.
- Keep prose around 45–70 characters per line. Start body line-height at 1.5–1.65 and heading line-height at 1.05–1.2. Avoid clipping serif ascenders or descenders.

These are new families; replace the placeholder font assignments. Exact optical sizing and weights require review in the actual composition.

Primary references: [Adobe Source Serif](https://github.com/adobe-fonts/source-serif/wiki/Source-Serif-Readme) and [Hanken Grotesk designer repository](https://github.com/marcologous/hanken-grotesk). Both use SIL Open Font License 1.1; retain license notices with distributed font assets.

### Layout and spacing

- Use a shared alignment grid throughout the page. Opening images may be staggered, but their edges must relate to the grid.
- Start with a 1440px content maximum, desktop gutters of 48–64px, tablet gutters of 32px, and mobile gutters of 20px. Adapt before content feels cramped.
- Use an 8px spacing rhythm, with 4px steps for small control adjustments. Start section spacing at 96–128px on desktop and 56–72px on mobile.
- Give the dominant opening image roughly two to three times the visual area of the detail image. These are composition targets, not rigid ratios across screen sizes.
- Keep copy left-aligned. Use generous breathing room around the opening without pushing the shopping action far down the page.
- Product grids may progress from four columns on wide screens to two on phones. Use one column where real content would otherwise truncate or touch targets become crowded.
- Keep editorial image ratios deliberate; keep catalog image ratios consistent so shoppers can compare furniture.

### Shared interface rules

- Build interface components on shadcn/ui. Prefer adapting existing shadcn components before creating custom equivalents. Apply the approved palette, typography, spacing, corner radii, and interaction states through shared theme tokens and component styles. Preserve accessible semantics and keyboard behavior when customizing components.
- Use a typographic Canto Zen wordmark initially. Custom logo artwork is a separate design task.
- Header: wordmark, clear shopping navigation, search, and cart. Collapse navigation accessibly when space requires it; preserve search and cart access.
- Primary buttons: moss fill, chalk text, a modest 4px corner radius, and clear hover, pressed, disabled, and focus states. Use quieter secondary controls for secondary actions.
- Keep photography rectangular. Avoid decorative image frames and unnecessary shadows.
- Product tiles: image, product name, useful finish information, and price. Add availability where it affects a shopping decision. Favor open layouts over boxed cards.
- Use consistent, restrained line icons. Give icon-only controls accessible names.
- Links must look interactive and have visible hover and keyboard-focus states. Do not rely on a small color shift alone.
- Forms need persistent labels, clear boundaries, and specific inline error messages. Empty states must explain the next useful action.
- Keep editorial copy short and concrete. Name materials and describe use; avoid invented provenance, unsupported sustainability claims, and fabricated customer reviews.

### Accessibility and responsive acceptance

- Maintain at least 4.5:1 contrast for normal text, 3:1 for qualifying large text, and 3:1 for meaningful control boundaries and state indicators against adjacent colors.
- Provide visible keyboard focus, logical reading order, and keyboard access to navigation, search, product links, and cart.
- Aim for touch targets of at least 44×44px. Keep mobile layouts usable at 320px width and with enlarged text, without horizontal page scrolling.
- Informative photographs need useful alternative text; purely decorative detail imagery may use empty alternative text. Image descriptions must match what is actually shown.
- Essential copy and controls must work independently of motion and hover. Respect reduced-motion settings.
- Reserve image space to prevent layout shifts and review focal points on both wide and narrow screens.

## Design review checklist

- The opening clearly communicates furniture, everyday calm, and a path to shopping.
- Asymmetry feels intentional at desktop and mobile sizes; furniture remains recognizable.
- Warmth comes from materials, photography, and the selected palette.
- Product information is easy to scan and compare.
- Typography, controls, and alignment stay consistent across storefront pages.
- Real content fits at narrow widths, with enlarged text and keyboard navigation.
- No placeholder colors or fonts remain when this direction is implemented.

## Implementation review items

Review font rendering, hero imagery, crops, actual copy lengths, breakpoint behavior, and semantic state colors in the implemented design. These are execution checks within the direction rather than unresolved brand choices.

## Approval

The complete direction and specifications were approved on 2026-10-02, including shadcn/ui as the component base. No visual implementation has been performed as part of this interview.
