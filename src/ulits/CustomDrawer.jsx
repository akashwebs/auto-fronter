import { Icon } from "@iconify/react";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const CustomDrawer = ({ isOpen, setIsOpen, children, className,title,width }) => {
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className={className}
      size={width}
    >
      <div>
        <div className="flex items-center justify-between p-6">
            <h2 className=" text-[25px] font-medium">{title}</h2>
            <button onClick={()=>setIsOpen((prevState) => !prevState)} className=" py-2 px-2 rounded-md bg-red-500/20 hover:bg-red-500 hover:text-white duration-300"><Icon icon="ep:close-bold" /></button>
        </div>
        <div>{children}</div>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
