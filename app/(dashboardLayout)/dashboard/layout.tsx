import { AppSidebar } from '@/components/dashboard/dashboard-sidebar';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full ">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <DashboardHeader />
          <main className="flex-1 p-6 ">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default layout;
