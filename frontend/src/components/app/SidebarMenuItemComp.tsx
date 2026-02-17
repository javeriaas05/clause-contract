import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"
import { Bell, Blocks, FileCheck2, FlaskConicalOff, Home, LayoutDashboard, LogIn, User } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

const items = [

  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Smart Notifications", url: "/dashboard/smart-notifications", icon: Bell },
  { title: "Task Management", url: "/dashboard/task-management", icon: FileCheck2 },
  { title: "Integrations", url: "/dashboard/integrations", icon: Blocks  },
  { title: "Testimonial", url: "/dashboard/testimonial", icon: FlaskConicalOff  },
//   { title: "Login", url: "/login", icon: LogIn  },
//   { title: "Signup", url: "/signup", icon: User  },
]

const SidebarMenuItems = () => {
  const location = useLocation()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <SidebarMenu>
      {items.map((item) => {
        const isActive = location.pathname === item.url
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <NavLink
                to={item.url}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors font-medium ${
                  isActive
                    ? "font-medium text-gray-700"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {/* Hide labels only when collapsed */}
                <span className={isCollapsed ? "hidden" : "inline"}>
                  {item.title}
                </span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}
export default SidebarMenuItems;
