import { Badge } from "@kristjanjansen/design-system";

export function BadgePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 flex-wrap items-center">
        <Badge>Neutral</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </div>

      <div className="flex gap-3 flex-wrap items-center">
        <Badge size="small">Neutral</Badge>
        <Badge variant="success" size="small">3</Badge>
        <Badge variant="warning" size="small">!</Badge>
        <Badge variant="error" size="small">5</Badge>
        <Badge variant="info" size="small">New</Badge>
      </div>
    </div>
  );
}
