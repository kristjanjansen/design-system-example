import { Checkbox, CheckboxGroup } from "@kristjanjansen/design-system";

export function CheckboxPage() {
  return (
    <div className="flex flex-col gap-8">
      <Checkbox label="Default" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Error" error="Required" />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" defaultChecked disabled />

      <CheckboxGroup label="Group" defaultValue={["a"]}>
        <Checkbox value="a" label="Option A" />
        <Checkbox value="b" label="Option B" />
        <Checkbox value="c" label="Option C" />
      </CheckboxGroup>

      <CheckboxGroup label="Group error" error="Select at least one">
        <Checkbox value="a" label="Option A" />
        <Checkbox value="b" label="Option B" />
      </CheckboxGroup>

      <CheckboxGroup label="Group disabled" disabled defaultValue={["a"]}>
        <Checkbox value="a" label="Option A" />
        <Checkbox value="b" label="Option B" />
      </CheckboxGroup>
    </div>
  );
}
