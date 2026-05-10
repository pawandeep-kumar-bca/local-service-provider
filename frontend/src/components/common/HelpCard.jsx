import React from "react";

// ✅ Icons import karo
import { FcFaq, FcOnlineSupport, FcSupport } from "react-icons/fc";
import { MdManageAccounts } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const HelpCard = ({ icon, title, text }) => {
  const icons = {
    faqs: <FcFaq />,
    accounts: <MdManageAccounts />,
    order: <FcOnlineSupport />,
    payment: <TbReportMoney />,
    technical: <FcSupport />,
    contact: <IoChatbubbleEllipsesSharp />,
  };

  return (
    <div
      className="backdrop-blur-sm
            border
border-muted
bg-white

shadow-[0_5px_15px_rgba(0,0,0,0.06)]

hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)]


transition-all duration-300 p-3 rounded-xl cursor-pointer hover:scale-[1.02] duration-300 ease-in-out"
    >
      {/* ✅ Dynamic icon */}
      <div className="text-6xl text-primary flex justify-center">
        {icons[icon]}
      </div>

      <div>
        <h1 className="text-2xl  text-black font-bold my-4 text-center">
          {title}
        </h1>
        <div className="w-full h-[1px] bg-muted my-4"></div>
        <p className="text-text text-lg font-semibold w-[45%] text-center mx-auto">
          {text}
        </p>
      </div>
    </div>
  );
};

export default HelpCard;
