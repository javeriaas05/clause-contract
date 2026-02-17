import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

export default function SidebarHeader() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <div
      className={`sticky top-0 z-10 bg-[#ebeee8] flex items-center border-b p-2 ${
        isCollapsed ? "justify-start" : "justify-between"
      }`}
    >
      {/* Show only when expanded */}
      {!isCollapsed && (
        <span className="font-medium text-gray-700 py-3">Menu</span>
      )}

      {/* Trigger: left when collapsed, right when expanded */}
      <SidebarTrigger />
    </div>
  )
}
