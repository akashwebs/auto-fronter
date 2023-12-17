"use client"

import AdminLayout from '@/src/Layout/AdminLayout';
import CustomInput from '@/src/shared/inputs/CustomInput';
import CustomInputDate from '@/src/shared/inputs/CustomInputDate';
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
    const [startDate, setStartDate] = useState(new Date());


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
            label: "birthday",
            type: "date",
            placeholder: "Birthday",
            required: false,
            errorMessage: "birthday is require",
            class: "border-2 border-red-500",
            defaultValue: "",
            name: "birthday"
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
        data.startDate = startDate
        console.log("data", data);
    };

    return (
        <AdminLayout>
            <div className='bg-white p-4'>
                <h2 className="mb-4 text-2xl font-semibold leading-relaxed">Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 md:gap-5">
                        {formFormat.map((field, index) => (
                            <div key={index} className="">
                                {field.type === 'file' ? (
                                    <SingleImageUpload {...{ field, imageUrl, setImageUrl }} />
                                ) :
                                    field.type === "select" ? <CustomSelect defaultValue={selectOption} getValueFunction={setSelectOption} options={field} />
                                        : field.type === "date" ? <CustomInputDate {...{ startDate, setStartDate, field }} />
                                            :
                                            field.type === "textBox" ?
                                                <CustomRichText {...{ field, richText, setValueOfRichText }} /> :
                                                (
                                                    <CustomInput {...{ field, register, errors }} />
                                                )}


                            </div>
                        ))}
                    </div>



                    <button type='submit' class="contactButton flex items-center bg-primary text-white font-medium py-1 mt-5 px-4 rounded-md shadow-md transition-transform  transform hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-0.2 active:translate-y-0.2 hover:text-gray-800 duration-200">
                        <div className='px-3'> Submit</div>
                        <div class="iconButton ml-4 relative flex items-center justify-center h-10 w-10 rounded-full shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="text-current"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                        </div>
                    </button>




                </form>
            </div>


        </AdminLayout >
    );
};

export default DynamicFormPage;
