'use client'
import Navabr from '@/components/Navabar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import { useGetAuthUserQuery } from '@/state/api'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {

  const {data: authUser, isLoading: authLoading} = useGetAuthUserQuery();
  const router = useRouter();
      const pathname = usePathname();
      const [isLoading, setIsLoading] = useState(true);
  
      useEffect(() => {
          if (authUser) {
            const userRole = authUser.userRole?.toLowerCase();
        
            if (
              (userRole === "vendor" && pathname.startsWith("/search")) ||
              (userRole === "vendor" && pathname === "/")
            ) {
              router.push("/vendors/shops", { scroll: false });
            }else {
              setIsLoading(false);
            }
          }
        }, [authUser, pathname, router]);
  
        // if (authLoading || isLoading) return <>Loading...</>;

  return (
    <div className='h-full w-full'>
        <Navabr /> 
        <main className={`h-full flex w-full flex-col`}
            style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
        >
            {children}
        </main>
    </div>
  )
}

export default Layout