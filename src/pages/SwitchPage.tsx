import { Switch, SwitchGroup } from "@kristjanjansen/design-system";

export function SwitchPage() {
  return (
    <div className="flex flex-col gap-6">
      <Switch label="Label" />
      <Switch label="Label" disabled />
      <Switch label="Label" defaultChecked />
      <Switch label="Label" defaultChecked disabled />
      <Switch label="Label" error="Error" />

      <SwitchGroup label="Notifications" defaultValue={["email"]}>
        <Switch value="email" label="Email" />
        <Switch value="sms" label="SMS" />
        <Switch value="push" label="Push" />
      </SwitchGroup>

      <SwitchGroup label="Notifications" error="Select at least one">
        <Switch value="email" label="Email" />
        <Switch value="sms" label="SMS" />
        <Switch value="push" label="Push" />
      </SwitchGroup>
    </div>
  );
}
