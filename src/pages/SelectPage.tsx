import { Select } from "@kristjanjansen/design-system";

export function SelectPage() {
  return (
    <div className="flex flex-col gap-6">
      <Select
        label="Country"
        placeholder="Select a country"
        options={[
          { value: "ee", label: "Estonia" },
          { value: "lv", label: "Latvia" },
          { value: "lt", label: "Lithuania" },
        ]}
      />
      <Select
        label="Region"
        disabled
        options={[
          { value: "north", label: "North" },
          { value: "south", label: "South" },
          { value: "east", label: "East" },
          { value: "west", label: "West" },
        ]}
      />
    </div>
  );
}
