import React from 'react'
import { Outlet } from 'react-router'

const PageLayout = () => {
  return (
    <div className="bg-light-200">

            <Outlet />
        </div>
  )
}

export default PageLayout