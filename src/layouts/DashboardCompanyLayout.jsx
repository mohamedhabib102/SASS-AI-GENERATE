import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
// import Sidebar from "@/features/company/pages/components/Sidebar";
// import HeaderCompany from "@/features/company/pages/components/HeaderCompany";

const DashboardCompanyLayout = () => {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={true}>
        <div className="flex h-screen w-full overflow-hidden bg-gray-50/30">
          {/* Collapsible Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
            {/* Header */}
            <HeaderCompany />

            {/* Page Body */}
            <main className="flex-1 overflow-y-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default DashboardCompanyLayout;

