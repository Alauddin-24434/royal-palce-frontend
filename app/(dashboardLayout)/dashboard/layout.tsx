
import { AppSidebar } from "@/components/dashboardUi/app-sidebar";
import { DashboardHeader } from "@/components/dashboardUi/dashboard-header";
import PrivateRoute from "@/components/PrivateRoute";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivateRoute>
      <SidebarProvider>
       <div className="flex min-h-screen w-full ">

          <AppSidebar />
          <SidebarInset className="flex-1">
            <DashboardHeader  />
            <main className="flex-1 p-6 ">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </PrivateRoute>

  );
};

export default layout;