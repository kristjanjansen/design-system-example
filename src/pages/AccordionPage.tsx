import { Accordion, AccordionGroup } from "@kristjanjansen/design-system";

export function AccordionPage() {
  return (
    <div className="flex flex-col gap-8">
      <AccordionGroup mode="single">
        <Accordion title="Default" defaultOpen>
          Content of the first accordion item.
        </Accordion>
        <Accordion title="Closed">
          Content of the second accordion item.
        </Accordion>
        <Accordion title="Disabled" disabled>
          This content is not accessible.
        </Accordion>
      </AccordionGroup>

      <AccordionGroup mode="multiple">
        <Accordion title="Multiple A" defaultOpen>
          Multiple items can be open at once.
        </Accordion>
        <Accordion title="Multiple B" defaultOpen>
          This one is also open by default.
        </Accordion>
        <Accordion title="Multiple C">
          This one starts closed.
        </Accordion>
      </AccordionGroup>

      <AccordionGroup mode="single">
        <Accordion title="Display variant" variant="display" defaultOpen>
          Larger heading style for prominent sections.
        </Accordion>
        <Accordion title="Display closed" variant="display">
          Second display accordion.
        </Accordion>
      </AccordionGroup>
    </div>
  );
}
