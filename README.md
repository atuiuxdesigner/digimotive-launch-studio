# Digimotive Launchpad

Build a production-ready single-page Coming Soon website for my startup Digimotive, based EXACTLY on the supplied Figma design node 76:4 from file pIBzc2vf3cOqQZNRxFGMDT. The Figma design is the source of truth. Reproduce the layout, visual hierarchy, spacing, typography, colors, borders, radii, icons, logo treatment, footer, header, and responsive behavior as faithfully as possible. Use React + TypeScript with the project's default styling system; do not add Tailwind as a dependency if it is not already present. The target is a 1440px desktop composition with responsive adaptation for tablet/mobile.

Figma reference details: Header height is 65px with white background and subtle bottom border. Horizontal padding is 80px. Left brand has a 40x40 dark rounded-square logo icon and DIGIMOTIVE in Nova Round Book, 22px. Right CTA is dark pill, 24px horizontal padding, 12px vertical padding, 30px radius, phone icon and 'Call Now' in Manrope SemiBold 15px. Hero is white, vertically centered, with an ambient soft purple orb behind the content. Content stack is 800px wide, centered, 32px gaps. Badge: rgba(90,79,255,0.08), 16px horizontal / 6px vertical padding, 100px radius, Manrope Bold 13px, 3px tracking, purple #5A4FFF, text 'LAUNCHING SOON • STAY TUNED'. Main headline uses Nova Round Book, 76px, line-height 1.1, -1.9px tracking, dark #0B0F19, centered: 'We are coming ' + purple 'soon'. Underline is 160x4px, #5A4FFF, radius 2px, with 8px gap below headline. Supporting paragraph is Manrope Regular 20px, line-height 1.6, #6B7280, centered, width 700px: "We're crafting something extraordinary. Digimotive — your Pune-based digital growth partner — is almost ready to help your brand dominate the digital landscape." Status pill is white with 1px rgba(90,79,255,0.2) border, 20px horizontal / 10px vertical padding, 100px radius, 8px purple pulse indicator, Manrope Medium 14px dark text: 'Website Under Development'. Footer is dark #0B0F19, 32px vertical and 80px horizontal padding, flex between. Left: DIGIMOTIVE in Nova Round Book 20px white + '| © 2026' in Manrope 14px with 60% opacity. Right: four 36x36px rounded-square social icon containers, 18px radius, rgba(255,255,255,0.08), 16px icon assets for Instagram, Facebook, X/Twitter, LinkedIn. Use the exact exported Figma assets rather than redrawing icons.

Exact Figma assets available from the design context: ambient orb SVG https://www.figma.com/api/mcp/asset/7a3fea5e-d5e9-4c4d-bf5c-0796d6ebc7bf.svg; pulse indicator SVG https://www.figma.com/api/mcp/asset/1499be2c-e7ea-4215-ae66-bd1a37644f50.svg; Instagram SVG https://www.figma.com/api/mcp/asset/c28e861b-a776-40a6-b130-aa54c0ff3ac9.svg; Facebook SVG https://www.figma.com/api/mcp/asset/a1712943-8f41-49ba-b70c-1dcfa7570b46.svg; Twitter/X SVG https://www.figma.com/api/mcp/asset/d3de4dee-26b8-4483-8bb1-97fa96d7e8e7.svg; LinkedIn SVG https://www.figma.com/api/mcp/asset/fe5e4563-feb7-466c-8edb-f587d1854f82.svg; Digimotive logo mark SVG https://www.figma.com/api/mcp/asset/63ae58ae-390d-4a84-9f69-fd9ab5f7ec83.svg; phone SVG https://www.figma.com/api/mcp/asset/d1d93351-dc98-4510-8213-9c076f1ca786.svg. The assets are from the provided Figma design and should be downloaded/committed into the project rather than relying on expiring remote URLs where possible.

Typography: use Nova Round for the logo/headline and Manrope for body/UI. If those fonts are not already available, load the appropriate web fonts rather than substituting a visually unrelated typeface. Preserve the exact visual feel.

Functionality: 'Call Now' should be a tel: CTA with a configurable phone number constant; if no phone number is available, keep the href as a safe placeholder tel: and make the number easy to change. Social icons should be links with configurable URL constants, defaulting to '#'. The page should be accessible, semantic, keyboard-friendly, and responsive without changing the intended desktop composition.

Important: this is an implementation task, not a redesign. Do not invent additional sections, gradients, illustrations, cards, navigation items, or content. Match the Figma node exactly and keep the implementation clean and maintainable.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://digimotive-launch-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/19adae0a-dc4a-4610-aeb0-25abeba75848).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
