import { Accordion, AccordionGroup } from "@kristjanjansen/design-system";

export function AccordionPage() {
  return (
    <div className="flex flex-col gap-6">
      <AccordionGroup mode="single">
        <Accordion title="Shipping" variant="display">
          Free shipping on orders over €50. Standard delivery 3-5 business days.
        </Accordion>
        <Accordion title="Returns" variant="display" defaultOpen>
          30-day return policy. Items must be unused and in original packaging.
        </Accordion>
        <Accordion title="Payment" variant="display">
          We accept Visa, Mastercard, and bank transfer.
        </Accordion>
      </AccordionGroup>

      <AccordionGroup mode="single">
        <Accordion title="Account" variant="default">
          Manage your profile, addresses, and payment methods.
        </Accordion>
        <Accordion title="Notifications" variant="default" defaultOpen>
          Choose which emails and alerts you receive.
        </Accordion>
        <Accordion title="Privacy" variant="default">
          Control your data and privacy preferences.
        </Accordion>
      </AccordionGroup>
    </div>
  );
}
