import { Button } from "@kristjanjansen/design-system";

export function ButtonPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Button size="small">Primary</Button>
        <Button size="small" variant="secondary">Secondary</Button>
        <Button size="small" variant="tertiary">Tertiary</Button>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Button disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="tertiary" disabled>Tertiary</Button>
        <Button variant="danger" disabled>Danger</Button>
      </div>

      <Button className="ds-button--full-width">Full width button</Button>
    </div>
  );
}
