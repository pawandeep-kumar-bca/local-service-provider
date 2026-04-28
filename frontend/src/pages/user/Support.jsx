import React from "react";
import HelpCard from "../../components/common/HelpCard";

const Support = () => {
  return (
    <div>
      <h1 className="text-2xl text-center mb-3 font-semibold text-muted">How can we help you?</h1>
      <div className="w-full h-[1px] bg-muted mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:p-4">
        <HelpCard
          icon="faqs"
          title="FAQs"
          text="Find answers to common questions."
        />
        <HelpCard
          icon="accounts"
          title="Account Assistance"
          text="Manage your account settings."
        />
        <HelpCard
          icon="order"
          title="Order Support"
          text="Get help with your orders."
        />
        <HelpCard
          icon="payment"
          title="Payment Issues"
          text="Resolve billing and payment problems."
        />
        <HelpCard
          icon="technical"
          title="Technical Help"
          text="Fix technical issues and bugs."
        />
        <HelpCard
          icon="contact"
          title="Contact Us"
          text="Reach out to our support team."
        />
        
      </div>
    </div>
  );
};

export default Support;
