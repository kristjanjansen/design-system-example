import { InputPassword } from "@kristjanjansen/design-system";

export function InputPasswordPage() {
  return (
    <div className="flex flex-col gap-8" style={{ maxWidth: "24rem" }}>
      <InputPassword label="Default" placeholder="Enter password" />
      <InputPassword label="With description" placeholder="Min 8 characters" description="Use letters, numbers, and symbols" />
      <InputPassword label="Error" defaultValue="short" error="Password too short" />
      <InputPassword label="Disabled" defaultValue="password123" disabled />
    </div>
  );
}
