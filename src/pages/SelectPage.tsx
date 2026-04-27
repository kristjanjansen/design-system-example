import { Select } from "@kristjanjansen/design-system";

const countries = [
  { label: "Estonia", value: "ee" },
  { label: "Finland", value: "fi" },
  { label: "Sweden", value: "se" },
];

export function SelectPage() {
  return (
    <div className="flex flex-col gap-8" style={{ maxWidth: "24rem" }}>
      <Select label="Default" placeholder="Choose country" options={countries} />
      <Select label="With description" placeholder="Choose country" options={countries} description="Your billing country" />
      <Select label="Error" placeholder="Choose country" options={countries} error="Selection required" />
      <Select label="Disabled" placeholder="Choose country" options={countries} disabled />
    </div>
  );
}
