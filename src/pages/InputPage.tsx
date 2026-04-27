import { Input } from "@kristjanjansen/design-system";

export function InputPage() {
  return (
    <div className="flex flex-col gap-8" style={{ maxWidth: "24rem" }}>
      <Input label="Default" placeholder="Enter value" description="Helper text" />
      <Input label="Required" placeholder="Required field" required />
      <Input label="Error" defaultValue="not-an-email" error="Please enter a valid email" />
      <Input label="Disabled" defaultValue="Cannot edit" disabled />
      <Input label="Readonly" value="Not editable" readOnly />
    </div>
  );
}
