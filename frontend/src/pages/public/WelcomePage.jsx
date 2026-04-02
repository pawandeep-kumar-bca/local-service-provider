import React from "react";
import Button from "../../components/common/Button";
const WelcomePage = () => {
  return (
    <div className="w-full flex font-roboto flex-col items-center gap-4">
      <div className="p-2 mt-10">
        <img src="/assets/services.avif" alt="services" />
      </div>
      <div className="flex flex-col items-center p-4 gap-4">
        <h1 className="font-bold text-2xl">Welcome to Our Services</h1>
        <h2 className="text-base font-medium text-text-secondary">
          Book Trusted Local Services in Seconds
        </h2>
        <p className="text-center text-sm text-muted">
          Join as a user, explore services, and upgrade to provider anytime to
          start earning.
        </p>
        <div className="flex gap-3 w-full mt-7 mb-7">
          <Button color="white" fullWidth>
            Login
          </Button>
          <Button color="success" fullWidth>
            Register
          </Button>
        </div>
        <div className="flex w-full items-center gap-2 ">
            <div className="flex-1 h-[2px] bg-border rounded-full"></div>
            <span className="font-bold opacity-70 text-sm">Or</span>
            <div className="flex-1 h-[2px] bg-border rounded-full"></div>
        </div>
        <Button color="blue" fullWidth className="mt-6">
          Explore Services
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
