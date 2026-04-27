import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@kristjanjansen/design-system";

const users = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "success" as const },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "info" as const },
  { name: "Carol White", email: "carol@example.com", role: "Viewer", status: "warning" as const },
  { name: "Dave Brown", email: "dave@example.com", role: "Editor", status: "success" as const },
  { name: "Eve Davis", email: "eve@example.com", role: "Admin", status: "error" as const },
];

export function TablePage() {
  return (
    <div className="flex flex-col gap-8">
      <Table caption="Default table">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.email}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge variant={user.status} size="small">
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table caption="Compact density" density="compact" striped>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Item</TableHeaderCell>
            <TableHeaderCell align="end">Qty</TableHeaderCell>
            <TableHeaderCell align="end">Price</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Widget</TableCell>
            <TableCell align="end">5</TableCell>
            <TableCell align="end">$12.99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gadget</TableCell>
            <TableCell align="end">2</TableCell>
            <TableCell align="end">$24.50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Doohickey</TableCell>
            <TableCell align="end">8</TableCell>
            <TableCell align="end">$3.75</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table caption="Selected row">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
            <TableCell>alice@example.com</TableCell>
          </TableRow>
          <TableRow selected>
            <TableCell>Bob</TableCell>
            <TableCell>bob@example.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carol</TableCell>
            <TableCell>carol@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table caption="With footer">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Product</TableHeaderCell>
            <TableHeaderCell align="end">Amount</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Subscription</TableCell>
            <TableCell align="end">$29.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Add-on</TableCell>
            <TableCell align="end">$9.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="end">$38.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <Table caption="Visible caption" captionVisible>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>A</TableHeaderCell>
            <TableHeaderCell>B</TableHeaderCell>
            <TableHeaderCell>C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
