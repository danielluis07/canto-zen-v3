# Homepage composition prototype

Throwaway decision artifact for [Prototype the editorial opening and homepage shopping paths](https://github.com/danielluis07/canto-zen-v3/issues/5). Planning only. Do not merge or promote this code to production.

Run `bun install --frozen-lockfile`, then `bun run prototype`. Open http://localhost:3005/?variant=A. The floating controls and left/right arrow keys cycle between variants; the URL preserves the selection. Controls are hidden in production.

| Variant | Opening | Furniture-type entry points |
| --- | --- | --- |
| A: Split composition | Copy to the left of the dominant photograph; smaller detail staggered below the copy | Four visual tiles; two columns on mobile |
| B: Image spread | Headline and action above a broad photograph, with a narrow side detail | A compact text list beside dining imagery; stacked on mobile |
| C: Shopping rail | Dominant photograph left; copy, action, and smaller detail in a right rail | Compact image-and-text links; stacked on mobile |

All variants use the same approved palette, Source Serif 4 and Hanken Grotesk, copy, catalog imagery, navigation, featured products, living-room story, materials section, and footer. Different section ordering is outside this decision. Mobile keeps copy and the action first, followed by unequal photographs with a horizontal offset and no overlap.

## Question to resolve

Which opening and furniture-type entry treatment best establish the brand while making shopping clear? A hybrid is valid. Compare at desktop and mobile widths. Also decide whether the opening takes too much vertical space before the next shopping section.

## Evidence and limits

- Uses the actual Haven Sofa in oat linen and the oak/boucle armchair images. The small image is a second product vignette, not claimed to be a close-up of the sofa. Dedicated coherent room/detail photography may improve the final composition.
- The living-room story links only the catalog product actually identified in its image. Other visible furnishings have no verified catalog joins.
- Product names, finishes, descriptions, availability, and production weeks come from the catalog. Prices and family/detail route identity remain undecided in the separate catalog ticket; no currency or price interpretation is invented here.
- Shopping, room, product, search, About, and Cart links open read-only destination stubs on the same route. Their URL state is visible. These demonstrate entry paths, not the design of the destination pages. No writes, saved carts, checkout, or orders.
- Editorial copy is provisional. No manufacturing, certification, sustainability, or company-history claims.
- Font compilation downloads the approved Google font families. No new runtime dependencies.
- Existing-page prototype in an isolated worktree/branch. Main implementation remains separate. Record the user's verdict in the ticket before resolving it.

## Design rationale

Use the approved warm stone, chalk, deep brown, mineral gray, moss, and pale stone tokens. Headlines and wordmark use Source Serif 4; shopping information uses Hanken Grotesk. Rectangular catalog photography supplies color. Align the left-aligned copy and staggered imagery to the page grid. The three opening layouts trade off copy proximity, broad photographic emphasis, and product-focused framing, rather than changing the already approved visual identity.

Review priorities: shopping action visibility, recognizable furniture crops, mobile reading order, amount of scrolling to furniture-type links, and whether the detail image reads as a coherent pairing.

## Verdict

On 2026-10-02 the user selected **A: Split composition** for the editorial opening and **A: Large visual tiles** for furniture-type entry points in two explicit feedback replies. Preserve the headline and Shop furniture action to the left of the dominant room image, with the smaller offset vignette below; use four visual furniture-type tiles on desktop and two columns on mobile. Keep the agreed section sequence. Final photography and editorial copy are a follow-on content decision, not approved assets by implication.

## Verification

Lint and TypeScript checks passed. Browser review covered all three variants at 1440px, 390px, and 320px with no horizontal overflow; the primary shopping action stayed in the initial phone viewport. Button cycling, keyboard wraparound, reload-stable variant URLs, Shop entry, furniture-type selection, and the room story's pictured-product link passed. The controls and destination pages are prototype stubs; these checks are not production acceptance tests.
