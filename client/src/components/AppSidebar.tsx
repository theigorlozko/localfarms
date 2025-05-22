import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Building, FileText, Heart, Home, Menu, Settings, X } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from './ui/sidebar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import { cn } from '@/lib/utils'

const AppSidebar = ({ userType }: AppSidebarProps) => {
  const pathname = usePathname()
  const { toggleSidebar, open } = useSidebar()

  const navLinks =
    userType === 'vendor'
      ? [
          { icon: Building, label: 'Shops', href: '/vendors/shops' },
          { icon: FileText, label: 'Files', href: '/vendors/files' },
          { icon: Settings, label: 'Settings', href: '/vendors/settings' },
        ]
      : [
          { icon: Heart, label: 'Favorites', href: '/users/favorites' },
          { icon: FileText, label: 'Files', href: '/users/files' },
          { icon: Home, label: 'Data', href: '/users/data' },
          { icon: Settings, label: 'Settings', href: '/users/settings' },
        ]

  return (
    <Sidebar
      collapsible="icon"
      className="fixed left-0 bg-white shadow-lg"
      style={{
        top: `${NAVBAR_HEIGHT}px`,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                'flex min-h-[56px] w-full items-center pt-3 mb-3',
                open ? 'justify-between px-6' : 'justify-center'
              )}
            >
              <>
                {open && (
                    <h1 className="text-xl font-bold text-gray-800">
                    {userType === 'vendor' ? 'Vendor' : 'Buyer'} View
                    </h1>
                )}
                <button
                    className="hover:bg-gray-100 p-2 rounded-md"
                    onClick={toggleSidebar}
                >
                    {open ? (
                    <X className="h-6 w-6 text-gray-600" />
                    ) : (
                    <Menu className="h-6 w-6 text-gray-600" />
                    )}
                </button>
                </>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center px-7 py-7",
                    isActive
                      ? "bg-gray-100"
                      : "text-gray-600 hover:bg-gray-100",
                    open ? "text-green-600" : "ml-[5px]"
                  )}
                >
                  <Link href={link.href} className="w-full" scroll={false}>
                    <div className="flex items-center gap-5">
                      <link.icon
                        className={`h-5 w-5 ${
                          isActive ? "text-green-600" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          isActive ? "text-green-600" : "text-gray-600"
                        }`}
                      >
                        {link.label}
                      </span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
