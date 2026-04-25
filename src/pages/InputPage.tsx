import { Input } from "@kristjanjansen/design-system";

export function InputPage() {
  return (
    <div className="flex flex-col gap-6">
      <Input label="Name" placeholder="Enter your name" description="Your full name" />
      <Input label="Email" defaultValue="not-an-email" error="Please enter a valid email" />
      <Input label="Username" placeholder="Not editable" disabled />
      <Input label="Organization" value="Acme Corp" readOnly />
    </div>
  );
}
