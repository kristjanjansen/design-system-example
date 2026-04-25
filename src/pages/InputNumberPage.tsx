import { InputNumber } from "@kristjanjansen/design-system";

export function InputNumberPage() {
  return (
    <div className="flex flex-col gap-6">
      <InputNumber
        label="Quantity"
        defaultValue={1}
        min={0}
        max={99}
        step={1}
        inputEnd="pcs"
      />
    </div>
  );
}
