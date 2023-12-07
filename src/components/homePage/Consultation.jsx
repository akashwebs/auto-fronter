"use client";

import { Icon } from "@iconify/react";
import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Consultation = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const sendMail = (data) => {
    const body = {
      name: data?.name,
      email: data?.email,
      message: data?.message,
    };
    fetch("https://ecomvac-backend.vercel.app/send-email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          swal("success", data.message, "success");
          reset();
        }
        if (data.status === "fail") {
          swal("error", data.message || data.error, "error");
        }
      });
  };

  return (
    <div>
      <Container>
        <div className=" flex items-center justify-between gap-[30px]">
          <div className="w-[60%]">
            <h2 className=" font-semibold text-[28px] text-[#324AB8]">
              About M-M Agrovet Industries Ltd
            </h2>
            <h2 className=" text-[#00090C] py-5 font-semibold text-[19px]">
              The name “ M-M AGROVET INDUSTRIES Ltd” is a symbol of experience,
              reliability, goodwill and innovative new ideas.Best Agro care is a
              leading animal health trading company in Bangladesh & its journey
              towards excellence in begins in December 2017 with the
              introduction of quality feed additives in Bangladesh poultry
              market. Our objective is Towards Antibiotic Free Quality Farming
              by Management Nutrition & Bio Security. Best Agro Care is one of
              the fastest growing animal health companies in Bangladesh.
            </h2>
            <Image
              src={"/image/banner2.jpg"}
              width={500}
              height={500}
              alt="image"
            />
          </div>
          <div
            className="w-[40%] bg-[#F5F7FF] p-4"
          >
            <form
              onSubmit={handleSubmit(sendMail)}
              className=" flex flex-col gap-4"
            >
              <div className=" relative">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className=" py-4 border rounded-md focus:outline-[#eb3867] px-5 bg-white input_Shadow w-full"
                  placeholder=" Your Name"
                />
                <Icon
                  icon="tdesign:user"
                  className=" absolute text-[#d048df] text-[20px] top-[30%] right-[20px]"
                />
              </div>
              <div className=" relative">
                <input
                  type="text"
                  {...register("email", { required: true })}
                  className=" py-4 border rounded-md focus:outline-[#eb3867] px-5 bg-white input_Shadow w-full"
                  placeholder=" Your Email"
                />
                <Icon
                  icon="formkit:email"
                  className=" absolute text-[18px] text-[#d048df] top-[30%] right-[20px]"
                />
              </div>
              <div className=" relative">
                <textarea
                  name="message"
                  {...register("message", { required: true })}
                  id=""
                  cols="30"
                  rows="10"
                  className=" py-4 border rounded-md focus:outline-[#eb3867] px-5 bg-white input_Shadow w-full h-[200px]"
                  placeholder="Message"
                ></textarea>
                <Icon
                  icon="mi:message"
                  className=" absolute text-[20px] text-[#d048df] top-[15px] right-[20px]"
                />
              </div>
              <div className=" text-center">
                {/* <MainButton type='submit' title={"Submit Now"} /> */}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Consultation;
