"use client"

import AdminLayout from '@/src/Layout/AdminLayout';
import CustomInput from '@/src/shared/inputs/CustomInput';
import CustomRichText from '@/src/shared/inputs/CustomRichText';
import CustomSelect from '@/src/shared/inputs/CustomSelect';
import SingleImageUpload from '@/src/shared/inputs/SingleImageUpload';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import Select from 'react-select'

const DynamicFormPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const [imageUrl, setImageUrl] = useState()
    const [richText, setValueOfRichText] = useState("");
    const [selectOption, setSelectOption] = useState('')


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
            label: "Select Choice",
            type: "select",
            options: [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
            ],
            required: false,
            errorMessage: "Phone Number is required",
            name: "slectChocoloate"
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
        {
            label: "Description",
            type: "textBox",
            placeholder: "Enter Your Phone Number",
            required: true,
            errorMessage: "Phone Number is required",
            className: "border-0",
            name: "phoneNumber"
        },
        {
            label: "Product Image",
            type: "file",
            required: true,
            errorMessage: "",
            name: "image"
        },


    ];


    const onSubmit = (data) => {
        data.image = imageUrl
        data.dis = richText
        data.select = selectOption.value
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
                                    <SingleImageUpload {...{ field, imageUrl, setImageUrl }} />
                                ) :
                                    field.type === "select" ? <CustomSelect defaultValue={selectOption} getValueFunction={setSelectOption} options={field} />
                                        :

                                        field.type === "textBox" ?
                                            <CustomRichText {...{ field, richText, setValueOfRichText }} /> :
                                            (
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
