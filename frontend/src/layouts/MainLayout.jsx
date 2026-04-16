import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/NavBar";
import MenuSideBar from "../components/common/MenuSideBar";
import ProviderCard from "../components/provider/ProviderCard";
import ChatPage from "../pages/chats/ChatPage";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-muted/20">
      
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar (Desktop only) */}
        <div className="hidden md:block w-64">
          <MenuSideBar role="provider" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-2 md:p-4 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 wrap">
           
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainLayout;