import { Heading, Text } from "@kristjanjansen/design-system";

export function TypographyPage() {
  return (
    <div className="flex flex-col gap-6">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
      <Text>Body text</Text>
      <Text variant="small">Small text</Text>
      <Text variant="tiny">Tiny text</Text>
      <Text weight={600}>Semi-bold text</Text>
    </div>
  );
}
