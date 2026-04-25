import { Textarea } from "@kristjanjansen/design-system";

export function TextareaPage() {
  return (
    <div className="flex flex-col gap-6">
      <Textarea label="Bio" placeholder="Write something..." />
      <Textarea label="Bio" error="Too long" />
      <Textarea label="Bio" placeholder="Write something..." disabled />
      <Textarea label="Bio" value="This is readonly content." readOnly />
    </div>
  );
}
