"use client"

import AdminLayout from '@/src/Layout/AdminLayout';
import CustomInput from '@/src/shared/inputs/CustomInput';
import SingleImageUpload from '@/src/shared/inputs/SingleImageUpload';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const DynamicFormPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const [imageUrl, setImageUrl] = useState()
    const formFormat = [
        {
            label: "Full Name",
            type: "text",
            placeholder: "Enter Your Full Name",
            required: true,
            errorMessage: "Full Name is required",
            className: "border-0",
            defaultValue: "",
            name: "fullName"
        },
        {
            label: "image upload",
            type: "file",
            placeholder: "Enter Your Phone Number",
            required: true,
            errorMessage: "Phone Number is required",
            class: "border-0",
            defaultValue: "",
            name: "image"
        },
        {
            label: "Phone",
            type: "tel",
            placeholder: "Enter Your Phone Number",
            required: true,
            errorMessage: "Phone Number is required",
            class: "border-0",
            defaultValue: "",
            name: "phoneNumber"
        },

    ];

    const onSubmit = (data) => {
        console.log("data", data);
    };

    return (
        <AdminLayout>
            <div className='bg-white p-4'>
                <h2 className="mb-4 text-2xl font-semibold leading-relaxed">Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-5">
                        {formFormat.map((field, index) => (
                            <div key={index} className="">
                                {field.type === 'file' ? (
                                    <SingleImageUpload {...{ imageUrl, setImageUrl }} />
                                ) : (
                                    <CustomInput {...{ field, register, errors }} />
                                )}
                            </div>
                        ))}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>


        </AdminLayout >
    );
};

export default DynamicFormPage;
