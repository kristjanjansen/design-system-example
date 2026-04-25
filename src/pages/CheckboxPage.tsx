import { Checkbox, CheckboxGroup } from "@kristjanjansen/design-system";

export function CheckboxPage() {
  return (
    <div className="flex flex-col gap-6">
      <Checkbox label="Label" />
      <Checkbox label="Label" defaultChecked />
      <Checkbox label="Label" indeterminate />
      <Checkbox label="Label" error="Error" />
      <Checkbox label="Label" defaultChecked disabled />

      <CheckboxGroup label="Interests" defaultValue={["coding"]}>
        <Checkbox value="coding" label="Coding" />
        <Checkbox value="design" label="Design" />
        <Checkbox value="writing" label="Writing" />
      </CheckboxGroup>

      <CheckboxGroup label="Interests" error="Select at least one">
        <Checkbox value="coding" label="Coding" />
        <Checkbox value="design" label="Design" />
        <Checkbox value="writing" label="Writing" />
      </CheckboxGroup>
    </div>
  );
}
