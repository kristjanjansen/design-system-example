import { Tab, TabPanel, Tabs } from "@kristjanjansen/design-system";

export function TabsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Tabs defaultValue="general">
        <Tab value="general">General</Tab>
        <Tab value="security">Security</Tab>
        <Tab value="billing">Billing</Tab>

        <TabPanel value="general">General account settings and preferences.</TabPanel>
        <TabPanel value="security">Password, two-factor authentication, sessions.</TabPanel>
        <TabPanel value="billing">Payment methods, invoices, subscription plan.</TabPanel>
      </Tabs>

      <Tabs defaultValue="overview">
        <Tab value="overview" description="Summary view">
          Overview
        </Tab>
        <Tab value="analytics" description="Charts and metrics">
          Analytics
        </Tab>
        <Tab value="reports" description="Export data">
          Reports
        </Tab>

        <TabPanel value="overview">Dashboard overview with key metrics.</TabPanel>
        <TabPanel value="analytics">Detailed analytics and charts.</TabPanel>
        <TabPanel value="reports">Generate and download reports.</TabPanel>
      </Tabs>

      <Tabs defaultValue="active">
        <Tab value="active">Active</Tab>
        <Tab value="archived">Archived</Tab>
        <Tab value="deleted" disabled>
          Deleted
        </Tab>

        <TabPanel value="active">Active items list.</TabPanel>
        <TabPanel value="archived">Archived items.</TabPanel>
        <TabPanel value="deleted">Deleted items.</TabPanel>
      </Tabs>
    </div>
  );
}
