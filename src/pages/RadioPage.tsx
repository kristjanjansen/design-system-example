import { Radio, RadioGroup } from "@kristjanjansen/design-system";

export function RadioPage() {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup label="Plan" defaultValue="pro">
        <Radio value="basic">Basic</Radio>
        <Radio value="pro">Professional</Radio>
        <Radio value="enterprise">Enterprise</Radio>
      </RadioGroup>

      <RadioGroup label="Plan" error="Selection required">
        <Radio value="basic">Basic</Radio>
        <Radio value="pro">Professional</Radio>
        <Radio value="enterprise">Enterprise</Radio>
      </RadioGroup>
    </div>
  );
}
