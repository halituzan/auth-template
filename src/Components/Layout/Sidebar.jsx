import { Icon } from "@iconify/react";
import React, { useState } from "react";
import navigation from "../../Navigations/Navigation";
import VerticalMenuItems from "./VerticalMenu/VerticalMenuItems";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <div
    //   onMouseEnter={() => {
    //     setOpenSidebar(true);
    //   }}
    //   onMouseLeave={()=>{
    //     setOpenSidebar(false)
    //   }}
      className={`${
        openSidebar ? "w-[300px]" : "w-[75px]"
      } p-4 bg-white shadow-xl h-screen sidebar flex flex-col transition-all`}
    >
      <div className='flex items-center justify-center w-full mb-5'>
        {openSidebar && <h2 className='text-xl font-bold flex-1'>Logo</h2>}
        <span className='cursor-pointer'>
          {!openSidebar ? (
            <Icon
              icon='line-md:close-to-menu-alt-transition'
              fontSize={18}
              className='text-rose-600'
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          ) : (
            <Icon
              icon='line-md:menu-to-close-alt-transition'
              fontSize={18}
              className='text-rose-600'
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          )}
        </span>
      </div>
      <div className='flex flex-col items-start '>
        {navigation.map((item) => {
          return (
            <VerticalMenuItems key={item.path} item={item} open={openSidebar} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
