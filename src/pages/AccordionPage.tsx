import {
  Accordion,
  AccordionGroup,
} from "@kristjanjansen/design-system";

export function AccordionPage() {
  return (
    <div className="flex flex-col gap-6">
      <AccordionGroup mode="single">
        <Accordion title="What is this?" variant="display">
          A modern React component library with oklch colors, CSS custom properties, multi-brand theming, and full accessibility support.
        </Accordion>
        <Accordion title="How to install?" variant="display" defaultOpen>
          Install via npm: npm install design-system. Import the stylesheet and components.
        </Accordion>
        <Accordion title="Customization" variant="display">
          Yes — override any --ds-* CSS custom property or use data-theme for brand switching.
        </Accordion>
      </AccordionGroup>

      <AccordionGroup mode="single">
        <Accordion title="Getting started" variant="default">
          Install the package and import the stylesheet.
        </Accordion>
        <Accordion title="Configuration" variant="default" defaultOpen>
          Override any --ds-* CSS custom property or use data-theme.
        </Accordion>
        <Accordion title="Browser support" variant="default">
          Chrome 123+, Firefox 128+, Safari 17.5+.
        </Accordion>
      </AccordionGroup>
    </div>
  );
}
