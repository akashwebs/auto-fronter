"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@mui/material";



const Sidebar_animation = {
  open: {
    width: "16rem",
    transition: {
      damping: 40,
    },
  },
  closed: {
    width: "6rem",
    transition: {
      damping: 40,
    },
  },
};

const text_hedin = {
  open_text: {
    display: "block",
    transition: {
      damping: 40,
    },
  },
  closed_text: {
    display: "none",
    transition: {
      damping: 40,
    },
  },
};



const AdminSidebar = () => {
  const [open, setOpen] = useState(true);

  const pathname = usePathname();
  const isActive = (href) => {
    return pathname === href;
  };

  const activeStyle = {
    // your active style

    color: "rgb(0, 106, 60)",
    background: "rgba(0, 106, 60, 0.08)",
    borderRight: "3px solid rgb(0, 106, 60)",
  };

  return (
    <motion.div
      variants={Sidebar_animation}
      animate={open ? "open" : "closed"}
      className=" w-[16rem] max-w-[16rem] bg-white text-gray border-r border-r-gray-300 h-screen  md:relative fixed"
    >
      <div className=" p-5 flex items-center justify-between">
        <h2 className=" text-[23px] font-medium text-[#555555]">M-M agrovet</h2>
        <div>
          <button onClick={() => setOpen((it) => !it)}>ad</button>
        </div>
      </div>

      <div className=" m-2 p-4 rounded-md bg-gray-200 flex items-center gap-5 ">
        <Image
          src={"/user.png"}
          width={40}
          height={40}
          alt="user"
          className=" rounded-full min-w-max"
        />
        {open && (
          <div>
            <h3 className="text-sm font-semibold whitespace-pre">Bikash Roy</h3>
            <h3 className="text-sm font-normal whitespace-pre">Roll : Admin</h3>
          </div>
        )}
      </div>

      <div>
        <ul className=" mt-6">
          {open && (
            <div className=" px-8 py-1 mb-3">
              <p className=" text-sm font-bold text-gray-500">MANAGEMENT</p>
            </div>
          )}
          <li>
            <Link
              style={isActive("/admin") ? activeStyle : undefined}
              href={"/admin"}
              className=" flex items-center py-3 relative group  text-slate-500 font-semibold px-8 gap-6 hover:bg-gray-200"
            >
              <Icon icon="material-symbols:dashboard" className={" min-w-max text-[20px]"} />
              <span
                className={`${
                  !open
                    ? "absolute top-[3px] hidden group-hover:flex  bg-gray-200 rounded-md p-2 left-[100px]"
                    : ""
                }`}
              >
                DashBoard
              </span>
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/admin/user") ? activeStyle : undefined}
              href={"/admin/user"}
              className=" flex items-center py-3 relative group  text-slate-500 font-semibold px-8 gap-6 hover:bg-gray-200"
            >
              <Icon icon="material-symbols:dashboard" className={" min-w-max text-[20px]"} />
              <span
                className={`${
                  !open
                    ? "absolute top-[3px] hidden group-hover:flex  bg-gray-200 rounded-md p-2 left-[100px]"
                    : ""
                }`}
              >
                User
              </span>
            </Link>
          </li>
          {open && (
            <div className=" px-8 py-1 my-4">
              <p className=" text-sm font-bold text-gray-500">MANAGEMENT</p>
            </div>
          )}

        </ul>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;
