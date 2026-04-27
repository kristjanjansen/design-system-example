import { Radio, RadioGroup } from "@kristjanjansen/design-system";

export function RadioPage() {
  return (
    <div className="flex flex-col gap-8">
      <RadioGroup label="Default" name="default" defaultValue="a">
        <Radio value="a">Option A</Radio>
        <Radio value="b">Option B</Radio>
        <Radio value="c">Option C</Radio>
      </RadioGroup>

      <RadioGroup label="Error" name="error" error="Selection required">
        <Radio value="a">Option A</Radio>
        <Radio value="b">Option B</Radio>
      </RadioGroup>

      <RadioGroup label="Disabled" name="disabled" disabled defaultValue="a">
        <Radio value="a">Option A</Radio>
        <Radio value="b">Option B</Radio>
      </RadioGroup>

      <RadioGroup label="Horizontal" name="horizontal" direction="horizontal" defaultValue="a">
        <Radio value="a">Option A</Radio>
        <Radio value="b">Option B</Radio>
        <Radio value="c">Option C</Radio>
      </RadioGroup>
    </div>
  );
}
