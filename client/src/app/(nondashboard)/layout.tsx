import Navabr from '@/components/Navabr'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
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