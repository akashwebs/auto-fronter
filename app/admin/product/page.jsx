"use client"


import { server_url } from '@/config/config'
import AdminLayout from '@/src/Layout/AdminLayout'
import AddProduct from '@/src/components/admin/Product/AddProduct'
import CustomAddButton from '@/src/shared/AutoRequiredComp/CustomButton'
import CustomTable from '@/src/shared/AutoRequiredComp/CustomTable'
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)


    useEffect(() => {

        fetch(`${server_url}/custom?modelName=Products`)
            .then(res => res.json())
            .then(data => setData(data.data.result))
    }, [reload])


    const refeachFunction = () => {
        setReload(!reload)
    }


    const tableDesign = [
        {
            colName: "Image",
            colKay: "imgUrls",
            type: "image"
        },
        {
            colName: "ProductName",
            colKay: "name"
        },
        {
            colName: "Bangla Name",
            colKay: "banglaName"
        },
        {
            colName: "Quantity",
            colKay: "quantity"
        },

        {
            colName: "Price",
            colKay: "price"
        },
    ];
    return (
        <AdminLayout>
            <div>
                {/*  <div>
                <h2 className=' text-[25px] font-medium '>Product </h2>
            </div>
            <div className=' w-full h-[500px] rounded-xl shadow-md bg-white mt-4'>
                <div className=' flex items-center justify-between p-8'>
                    <input type="text" className=" py-2 px-3 border-2 rounded-xl w-[50%]  " placeholder='Search...'/>
                    <button onClick={()=>setShow(true)} className=' py-2 px-5 bg-[#13aff0] text-white rounded-xl hover:bg-success duration-300'> Add Product </button>
                </div>
            </div>
            <AddProduct isOpen={show} setIsOpen={setShow}/> */}
                <CustomAddButton title={"Add Product"} />
                <div className='bg-white p-4'>
                    <CustomTable title='Our Products' data={data} tableDesign={tableDesign} modelName={"Products"} refetch={refeachFunction} />

                </div>
            </div>
        </AdminLayout>
    )
}

export default Product

/* 
* 
 <CustomTable title='Our Products' data={data} tableDesign={tableDesign} modelName={"Products"} refetch={refeachFunction} />
    title=  page title
    data= api fetch data , must be array of object 
    
    ----------
    tableDesign= 
            [
        {
            colName: "Image",
            colKay: "imgUrls",
            type: "image"
        },
        {
            colName: "ProductName",
            colKay: "name"
        }

    table design er moddhe jodi image show koranu lage tobe tobe type bolte hobe, tachara text er jonno bola lagbe na, 
    colName holo, table hading
    colKey api er obj theke kon field ta table er moddhe dekhate cai.
-------------------
    modelName={"Products"} jodi delete korte cai er jonno, jodi modelName na thake, tahole url pathate hobe.
    jeno url pathale, ar model name pathate hobe na.
    -----
    refetch ekta function , amra jodi kono funciton call korte cai , after delete then refeach er moddhe patahle hobe..
*/