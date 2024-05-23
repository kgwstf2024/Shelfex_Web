import React from "react";
import { Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";

export const MainLayout = () => {
  return (
    <div className="flex flex-col max-h-screen overflow-y-scroll">
    
      <div className="grid grid-cols-10 sm:grid-cols-4 lg:grid-cols-5 ">
        {/* <Toaster position="top-center" containerStyle={{ zIndex: 99999 }} /> */}
        <div className={`col-span-1 sm:col-span-1 items-center justify-center`}>

       
        </div>

        <div className="col-span-9 sm:col-span-3 lg:col-span-4">
          {/* <div className="flex flex-col "> */}
          <Outlet />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};