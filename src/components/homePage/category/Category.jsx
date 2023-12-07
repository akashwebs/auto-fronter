"use client"

import { Icon } from '@iconify/react'
import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Category = () => {

    const categoryData = [
        {
            title:"About Us",
            icon:<Icon icon="uil:building" />,
            url:"/"
        },
        {
            title:"Product",
            icon:<Icon icon="teenyicons:medium-solid" />,
            url:"/"
        },
        {
            title:"Treatment",
            icon:<Icon icon="fa6-solid:fish" />,
            url:"/"
        },
        {
            title:"Our Clients",
            icon:<Icon icon="fa-regular:handshake" />,
            url:"/"
        },
    ]
    // #324AB8;
  return (
    <div className=' py-[100px]'>
        <Container>
            <div className=' grid grid-cols-4 gap-6'>
                {
                   categoryData.map((category,index)=>(
                    <div key={index} className=' bg-[#F1F4FF] flex-col gap-5 py-8 px-5 flex items-center justify-center'>
                        <div className=' text-[#324AB8] text-[40px] w-[80px] flex items-center justify-center h-[80px] rounded-full border-2 border-[#324AB8]'>
                            {category.icon}
                        </div>
                        <Link href={category.url} className='text-[20px] text-[#333] font-medium'>{category.title}</Link>
                    </div>
                   )) 
                }
            </div>
        </Container>
    </div>
  )
}

export default Category