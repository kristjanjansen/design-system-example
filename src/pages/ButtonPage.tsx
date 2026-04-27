import { Button } from "@kristjanjansen/design-system";

export function ButtonPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button size="small">Primary small</Button>
        <Button size="small" variant="secondary">Secondary small</Button>
        <Button size="small" variant="tertiary">Tertiary small</Button>
        <Button size="small" variant="danger">Danger small</Button>
        <Button size="small" variant="ghost">Ghost small</Button>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button disabled>Primary disabled</Button>
        <Button variant="secondary" disabled>Secondary disabled</Button>
        <Button variant="tertiary" disabled>Tertiary disabled</Button>
        <Button variant="danger" disabled>Danger disabled</Button>
        <Button variant="ghost" disabled>Ghost disabled</Button>
      </div>
    </div>
  );
}
