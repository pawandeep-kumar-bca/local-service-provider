import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { IoCheckmark } from "react-icons/io5";

import Button from "../../components/common/Button";

const BecomeProvider = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // steps
  const stepsArray = ["basic-info", "upload-documents", "review", "submit"];

  // step labels
  const stepLabels = [
    {
      step: "basic-info",
      label: "Basic Info",
    },
    {
      step: "upload-documents",
      label: "Documents",
    },
    {
      step: "review",
      label: "Review",
    },
    {
      step: "submit",
      label: "Submit",
    },
  ];

  // current route step
  const currentStep = location.pathname.split("/").pop();

  // current step index
  const currentIndex = stepsArray.findIndex((step) => step === currentStep);

  // next button text
  const nextButtonText =
    currentStep === "review" ? "Submit Application" : "Next";

  // hide buttons on submit page
  const hideButtons = currentStep === "submit";

  // next step
  const nextMoveForm = () => {
    const nextStep = stepsArray[currentIndex + 1];

    if (nextStep) {
      navigate(`/user/become-provider/${nextStep}`);
    }
  };

  // previous step
  const prevMoveForm = () => {
    const prevStep = stepsArray[currentIndex - 1];

    if (prevStep) {
      navigate(`/user/become-provider/${prevStep}`);
    }
  };

  return (
    <div>
      {/* heading */}
      <div>
        <h1 className="text-xl font-semibold mb-2">Become a Provider</h1>

        <p className="text-lg font-extralight">
          Fill your professional details to create your provider profile.
        </p>
      </div>

      {/* stepper */}
      <div className="flex w-full mb-4 mt-5 items-start md:w-[55%] mx-auto">
        {stepLabels.map((item, idx) => {
          const isCompleted = idx < currentIndex || currentStep === "submit";

          const isActive =
  idx === currentIndex &&
  currentStep !== "submit";

          return (
            <React.Fragment key={item.step}>
              <NavLink to={item.step}>
                <div className="flex flex-col items-center">
                  {/* circle */}
                  <h3
                    className={`
                    w-8 h-8 rounded-full border
                    flex items-center justify-center
                    transition-all duration-300

                    ${
                      isCompleted
                        ? "bg-green-500 text-white border-green-500"
                        : isActive
                          ? "bg-primary text-white border-primary"
                          : "border-muted text-muted"
                    }
                    `}
                  >
                    {isCompleted ? <IoCheckmark size={20} /> : idx + 1}
                  </h3>

                  {/* label */}
                  <p
                    className={`
                    text-xs mt-1 whitespace-nowrap

                    ${
                      isCompleted
                        ? "text-green-500"
                        : isActive
                          ? "text-primary"
                          : "text-muted"
                    }
                    `}
                  >
                    {item.label}
                  </p>
                </div>
              </NavLink>

              {/* line */}
              {idx !== stepLabels.length - 1 && (
                <div
                  className={`
                  flex-1 h-[1px] mt-4
                  transition-all duration-300

                  ${idx < currentIndex ? "bg-green-500" : "bg-muted"}
                  `}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* page content */}
      <div className="p-1 md:w-[80%] mx-auto">
        <Outlet />
      </div>

      {/* navigation buttons */}
      {!hideButtons && (
        <div className="flex justify-between items-center md:w-[80%] mx-auto mt-3">
          {/* back */}
          <Button
            color="white"
            onClick={prevMoveForm}
            disabled={currentIndex === 0}
          >
            <MdChevronLeft size={25} />
            Back
          </Button>

          {/* next */}
          <Button onClick={nextMoveForm}>
            {nextButtonText}

            <MdChevronRight size={25} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default BecomeProvider;
