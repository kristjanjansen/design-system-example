import { Text } from "@kristjanjansen/design-system";

export function TextPage() {
  return (
    <div className="flex flex-col gap-6">
      <Text>Body — default text for paragraphs and content.</Text>
      <Text variant="small">Small — secondary text, captions, metadata.</Text>
      <Text variant="tiny">Tiny — fine print, timestamps, labels.</Text>
      <Text weight={600}>Semibold — emphasized body text.</Text>
      <Text variant="small" weight={600}>Small semibold — emphasized secondary text.</Text>
    </div>
  );
}
