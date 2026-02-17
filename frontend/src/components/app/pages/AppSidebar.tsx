




import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import SidebarHeader from "@/components/app/HeaderRow"
import SidebarMenuItems from "@/components/app/SidebarMenuItemComp"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-[#ebeee8] rounded-2xl border-r-2 flex flex-col">
        <SidebarHeader />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuItems />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
