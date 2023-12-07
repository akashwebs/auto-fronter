"use client";

import { server_url } from "@/config/config";
import CustomDrawer from "@/src/ulits/CustomDrawer";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import swal from "sweetalert";

const AddProduct = ({ isOpen, setIsOpen }) => {
  const [imageUrl, setImageUrl] = useState();
  const [richText, setValueOfRichText] = useState("");
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const imgUrl = `https://api.imgbb.com/1/upload?key=ab3e927fbb2142be370cd6e16ff2fdee`;
  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setImageUrl(result.data?.url);
      });
  };

  const addServices = (data) => {
    setLoading(true)
    const info = {
      name: data.name,
      banglaName: data.banglaName,
      price: data.price,
      description: richText,
      quantity: data.quantity,
      imgUrls: imageUrl,
    };

    console.log(info)

    const body = {
      modelName: "Products",
      body: info,
    };
    fetch(`${server_url}/api/v1/custom`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          swal("success", data.message, "success");
          reset();
          setLoading(false)
          setIsOpen(false)
        }
        if (data.status === "fail") {
          swal("error", data.message || data.error, "error");
          setLoading(false)
        }
      });
  };

  return (
    <CustomDrawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={"Create Product"}
      className={" w-[500px]"}
      width={700}
    >
      <div className=" px-6">
        <form
          onSubmit={handleSubmit(addServices)}
          className=" flex flex-col gap-4"
        >
          <div className=" flex items-center justify-between gap-3">
            <div className="w-full ">
              <label
                htmlFor=""
                className="text-[13px] font-bold text-[#555555]"
              >
                Name (English)
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className=" py-3 border rounded-md focus:outline-[#eb3867] px-5 bg-white input_Shadow w-full"
                placeholder=" Enter Name English"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor=""
                className="text-[13px] text-[#555555] font-bold"
              >
                Name (Bangla)
              </label>
              <input
                type="text"
                {...register("banglaName", { required: true })}
                className=" py-3 border rounded-md focus:outline-[#eb3867] px-5 bg-white input_Shadow w-full"
                placeholder=" Enter Name Bangla"
              />
            </div>
          </div>
          <div className=" flex items-center justify-between gap-3">
            <div className="w-full ">
              <label
                htmlFor=""
                className="text-[13px] text-[#555555] font-bold"
              >
                Price
              </label>
              <input
                type="number"
                {...register("price",)}
                className=" py-3 border rounded-md focus:outline-[#eb3867] px-5 bg-white input_Shadow w-full"
                placeholder=" Enter price"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor=""
                className="text-[13px] text-[#555555] font-bold"
              >
                Quantity
              </label>
              <input
                type="number"
                {...register("quantity",)}
                className=" py-3 border rounded-md focus:outline-[#eb3867] px-5 bg-white input_Shadow w-full"
                placeholder=" Enter quantity"
              />
            </div>
          </div>
          <div className=" mb-10">
            <label htmlFor="" className="text-[13px] text-[#555555] font-bold"> description</label>
            <ReactQuill
              //   theme="snow"
              value={richText}
              onChange={setValueOfRichText}
              style={{ height: 200, marginBottom: 12 }}
            />
          </div>
          <div className="w-full ">
            <div className="md:flex items-center gap-2">
              {/* <p className="text-info text-lg font-bold">Icon:</p> */}
              <div className="relative border-4 border-dashed w-full h-[100px]  text-center flex items-center justify-center flex-col">
                <p className="text-xl font-bold  text-slate-900">
                  Drag your image here
                </p>
                <span className="text-xs font-bold text-slate-900">
                  (Only *.jpeg and *.png images will be accepted)
                </span>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
                />
              </div>
            </div>
            {imageUrl && (
              <div className="flex justify-center sm:justify-end ">
                <div className="  w-[100px] h-[130px] p-1 bg-white shadow-md rounded-md mt-3 ">
                  <Image
                    src={imageUrl}
                    width="100"
                    height="2"
                    alt="category image"
                    className="w-full h-full object-contain "
                  />
                </div>
              </div>
            )}
          </div>
          <div className=" text-center my-3">
            <button
              type="submit"
              className="text-sm font-bold flex items-center gap-1 bg-green-500 hover:bg-green-700 duration-300 text-white px-3 py-3 rounded"
            >
              ADD SERVICES
            </button>
            {/* <MainButton type="submit" title={"Save"} /> */}
          </div>
        </form>
      </div>
    </CustomDrawer>
  );
};

export default AddProduct;
