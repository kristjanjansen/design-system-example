import { useState } from "react";
import {
  Accordion,
  AccordionGroup,
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  Input,
  InputNumber,
  InputPassword,
  Radio,
  RadioGroup,
  Select,
  Switch,
  SwitchGroup,
  Text,
  Textarea,
} from "@kristjanjansen/design-system";

export function AllComponents() {
  const [name, setName] = useState("");
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <Heading level={4}>Heading 4</Heading>
      <Text>Default body text for content.</Text>
      <Text size="sm">Small text for descriptions.</Text>

      <div className="flex gap-3 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
      </div>

      <Input label="Name" placeholder="Jane Smith" value={name} onChange={setName} />
      <InputNumber label="Quantity" defaultValue={1} min={0} max={99} step={1} />
      <InputPassword label="Password" placeholder="Enter password" />
      <Textarea label="Bio" placeholder="Write something..." />

      <Select
        label="Country"
        placeholder="Select a country"
        options={[
          { value: "ee", label: "Estonia" },
          { value: "lv", label: "Latvia" },
          { value: "lt", label: "Lithuania" },
        ]}
      />

      <RadioGroup label="Plan" defaultValue="basic">
        <Radio value="basic">Basic</Radio>
        <Radio value="pro">Professional</Radio>
      </RadioGroup>

      <Checkbox label="I agree to the terms" />
      <CheckboxGroup label="Interests" defaultValue={["coding"]}>
        <Checkbox value="coding" label="Coding" />
        <Checkbox value="design" label="Design" />
      </CheckboxGroup>

      <Switch label="Enable notifications" checked={notifications} onChange={setNotifications} />
      <SwitchGroup label="Alerts" defaultValue={["email"]}>
        <Switch value="email" label="Email" />
        <Switch value="push" label="Push" />
      </SwitchGroup>

      <AccordionGroup mode="single">
        <Accordion title="What is this?" variant="display" defaultOpen>
          A modern React component library.
        </Accordion>
        <Accordion title="How to install?" variant="display">
          Install via npm.
        </Accordion>
      </AccordionGroup>
    </div>
  );
}
