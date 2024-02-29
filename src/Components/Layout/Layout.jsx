import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("login");
    }
  }, []);
  return (
    <div className='layou flex items-start bg-slate-100'>
      <Sidebar />
      <div className='flex-1 container mx-auto p-4 h-screen'>{children}</div>
    </div>
  );
};

export default Layout;
