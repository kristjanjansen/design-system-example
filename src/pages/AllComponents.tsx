import {
  Accordion,
  AccordionGroup,
  Button,
  Heading,
  Text,
} from "@kristjanjansen/design-system";

export function AllComponents() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <Heading level={1}>Design System</Heading>
        <Text>Agent-first React component library with oklch colors, CSS custom properties, multi-brand theming, and native web platform features.</Text>
      </div>

      <div className="flex gap-3">
        <Button as="a" href="https://github.com/kristjanjansen/design-system">Go to GitHub</Button>
        <Button as="a" href="https://www.npmjs.com/package/@kristjanjansen/design-system" variant="secondary">Go to NPM</Button>
      </div>

      <AccordionGroup mode="single">
        <Accordion title="Getting started" variant="display">
          <code>npm install @kristjanjansen/design-system</code>. Import the stylesheet and components.
        </Accordion>
        <Accordion title="Web platform" variant="display">
          Native HTML elements: <code>&lt;select&gt;</code> with base-select, <code>&lt;details&gt;</code> for accordion, <code>&lt;dialog&gt;</code> for modals. Zero runtime dependencies beyond React. CSS-only animations via <code>::details-content</code> and <code>@starting-style</code>.
        </Accordion>
        <Accordion title="Browser support" variant="display">
          Chrome 123+, Firefox 128+, Safari 17.5+ (mid-2024). CSS features: <code>@scope</code>, <code>oklch()</code>, <code>light-dark()</code>, <code>@layer</code>, CSS nesting. LightningCSS targets in pack config.
        </Accordion>
        <Accordion title="Accessibility" variant="display">
          WCAG 2.x + APCA contrast tests on all color pairs. <code>aria-invalid</code>, <code>aria-describedby</code>, <code>forced-colors</code>, <code>prefers-reduced-motion</code> on every component.
        </Accordion>
      </AccordionGroup>
    </div>
  );
}
