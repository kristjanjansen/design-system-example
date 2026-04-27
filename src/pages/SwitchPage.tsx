import { Switch, SwitchGroup } from "@kristjanjansen/design-system";

export function SwitchPage() {
  return (
    <div className="flex flex-col gap-8">
      <Switch label="Default" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Error" error="Required" />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled checked" defaultChecked disabled />

      <SwitchGroup label="Group" defaultValue={["email"]}>
        <Switch value="email" label="Email" />
        <Switch value="sms" label="SMS" />
        <Switch value="push" label="Push" />
      </SwitchGroup>

      <SwitchGroup label="Group error" error="Enable at least one">
        <Switch value="email" label="Email" />
        <Switch value="sms" label="SMS" />
      </SwitchGroup>

      <SwitchGroup label="Group disabled" disabled defaultValue={["email"]}>
        <Switch value="email" label="Email" />
        <Switch value="sms" label="SMS" />
      </SwitchGroup>
    </div>
  );
}
