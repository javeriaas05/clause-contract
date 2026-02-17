

import { Outlet } from "react-router-dom";
import Header from "@/components/app/Header";
// import { SidebarProvider } from "@/components/app/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import AppSidebar from "./AppSidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen w-screen">
        {/* Show Header only on mobile */}
        <div className="md:hidden">
          <Header />
        </div>
        {/* Sidebar + Main content */}
        <div className="flex flex-1 md:pt-0 pt-10">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}