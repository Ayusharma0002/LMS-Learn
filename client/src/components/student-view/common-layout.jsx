import React from 'react'
import { Outlet } from 'react-router-dom'

const StudentViewCommonLayout = () => {
  return (
    <div>
      Student Common Content
      <Outlet></Outlet>
    </div>
  )
}

export default StudentViewCommonLayout
