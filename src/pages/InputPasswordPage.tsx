import { InputPassword } from "@kristjanjansen/design-system";

export function InputPasswordPage() {
  return (
    <div className="flex flex-col gap-6">
      <InputPassword label="Password" placeholder="Enter password" />
      <InputPassword label="Password" error="Password is too short" />
      <InputPassword label="Password" placeholder="Enter password" disabled />
    </div>
  );
}
