import { InputNumber } from "@kristjanjansen/design-system";

export function InputNumberPage() {
  return (
    <div className="flex flex-col gap-8" style={{ maxWidth: "24rem" }}>
      <InputNumber label="Default" min={0} max={100} step={1} />
      <InputNumber label="With description" description="Choose 1–10" min={1} max={10} />
      <InputNumber label="Error" defaultValue={999} error="Value out of range" min={0} max={100} />
      <InputNumber label="Disabled" defaultValue={42} disabled />
    </div>
  );
}
