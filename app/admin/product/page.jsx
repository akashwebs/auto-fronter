"use client"


import AdminLayout from '@/src/Layout/AdminLayout'
import AddProduct from '@/src/components/admin/Product/AddProduct'
import { Button } from '@mui/material'
import React, { useState } from 'react'

const Product = () => {
    const [show,setShow] = useState(false)

  return (
    <AdminLayout>
        <div>
            <div>
                <h2 className=' text-[25px] font-medium '>Product </h2>
            </div>
            <div className=' w-full h-[500px] rounded-xl shadow-md bg-white mt-4'>
                <div className=' flex items-center justify-between p-8'>
                    <input type="text" className=" py-2 px-3 border-2 rounded-xl w-[50%]  " placeholder='Search...'/>
                    <button onClick={()=>setShow(true)} className=' py-2 px-5 bg-[#13aff0] text-white rounded-xl hover:bg-success duration-300'> Add Product </button>
                </div>
            </div>
            <AddProduct isOpen={show} setIsOpen={setShow}/>
        </div>
    </AdminLayout>
  )
}

export default Product