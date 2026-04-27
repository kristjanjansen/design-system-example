import { Textarea } from "@kristjanjansen/design-system";

export function TextareaPage() {
  return (
    <div className="flex flex-col gap-8" style={{ maxWidth: "24rem" }}>
      <Textarea label="Default" placeholder="Enter text" description="Helper text" />
      <Textarea label="Error" defaultValue="Too short" error="Minimum 20 characters required" />
      <Textarea label="Disabled" defaultValue="Cannot edit this" disabled />
      <Textarea label="Readonly" value="This text is not editable" readOnly />
    </div>
  );
}
