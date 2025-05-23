'use client'

import Navabr from '@/components/Navabar'
import {SidebarProvider } from '@/components/ui/sidebar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import React, { useEffect, useState } from 'react'
import Sidebar from '@/components/AppSidebar'
import { useGetAuthUserQuery } from '@/state/api'
import { usePathname, useRouter } from 'next/navigation'

const DashboardLayout = ({children } : {children: React.ReactNode}) => {

    const {data: authUser, isLoading: authLoading} = useGetAuthUserQuery();
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (authUser) {
          const userRole = authUser.userRole?.toLowerCase();
      
          if (
            (userRole === "vendor" && pathname.startsWith("/users")) ||
            (userRole === "buyer" && pathname.startsWith("/vendors"))
          ) {
            router.push(`/${userRole}`, { scroll: false });
          }else {
            setIsLoading(false);
          }
        }
      }, [authUser, pathname, router]);

      if (authLoading || isLoading) return <>Loading...</>;

    if(!authUser?.userRole) return null;

  return (
    <SidebarProvider>
        <div className='minh-screen w-full bg-primary-100'>
            <Navabr />
            <div style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
                <main className='flex'>
                    {["vendor", "buyer", "user"].includes(authUser?.userRole.toLocaleLowerCase() || "") && (
                        <Sidebar userType={authUser.userRole.toLocaleLowerCase() as "vendor" | "buyer" | "user"} />
                    )}
                    <div className='flex-grow transition-all duration-300'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    </SidebarProvider>
    
  )
}

export default DashboardLayout