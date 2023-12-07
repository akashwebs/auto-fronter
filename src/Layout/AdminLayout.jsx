import React from 'react'
import AdminSidebar from './AdminSidber'


const AdminLayout = ({children}) => {
  return (
    <div className=' flex items-start bg-[#f9faff]'>
        <div>
            <AdminSidebar/>
        </div>
        <div className=' w-full h-screen overflow-y-auto'>
            <div className='w-full h-[100px] bg-white shadow-lg'> sdsds</div>
            <div className='px-8 py-8'>
              {children}
            </div>
        </div>
    </div>
  )
}

export default AdminLayout