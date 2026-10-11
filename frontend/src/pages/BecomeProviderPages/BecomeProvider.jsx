
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";
import { useMe } from "../../hooks/useAuth";

const stepsArray = [
  "basic-info",
  "upload-documents",
  "review",
  "submit",
];

const stepLabels = [
  { step: "basic-info", label: "Basic Info" },
  { step: "upload-documents", label: "Documents" },
  { step: "review", label: "Review" },
  { step: "submit", label: "Submit" },
];

const getBasicInfoError = (formData) => {
  const requiredFields = [
    ["Experience", formData.experience],
    ["Price", formData.price],
    ["Price type", formData.priceType],
    ["Service category", formData.category?._id],
    ["State", formData.state?._id],
    ["District", formData.district?._id],
    ["City", formData.city?._id],
    ["Locality", formData.locality],
    ["Latitude", formData.lat],
    ["Longitude", formData.lng],
  ];

  const missing = requiredFields.find(([, value]) => {
    return (
      value === null ||
      value === undefined ||
      String(value).trim() === ""
    );
  });

  if (missing) {
    return `Please complete ${missing[0]}.`;
  }

  if (
    !Number.isFinite(Number(formData.experience)) ||
    Number(formData.experience) < 0
  ) {
    return "Please enter valid experience.";
  }

  if (
    !Number.isFinite(Number(formData.price)) ||
    Number(formData.price) <= 0
  ) {
    return "Please enter a valid service price.";
  }

  if (
    !Number.isFinite(Number(formData.lat)) ||
    !Number.isFinite(Number(formData.lng))
  ) {
    return "Please capture valid coordinates.";
  }

  return "";
};

const getDocumentsError = (formData, profileImage) => {
  if (!(formData.profileImage || profileImage)) {
    return "Please upload your profile image.";
  }

  if (!formData.aadharCard) {
    return "Please upload your Aadhaar card.";
  }

  if (!formData.certificate) {
    return "Please upload your certificate.";
  }

  return "";
};

const BecomeProvider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useMe();

  const [formData, setFormData] = useState({
    phoneNumber: "",
    experience: "",
    price: "",
    category: null,
    priceType: "",
    state: null,
    district: null,
    city: null,
    locality: "",
    lat: "",
    lng: "",
    aadharCard: null,
    certificate: null,
    profileImage: null,
  });

  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const currentStep = location.pathname.split("/").filter(Boolean).pop();
  const currentIndex = stepsArray.indexOf(currentStep);

  const phoneNumber =
    formData.phoneNumber || data?.user?.phoneNumber || "";

  const profileImage =
    formData.profileImage || data?.user?.profileImage || null;

  const hideButtons = currentStep === "submit";

  const validateStep = (stepIndex, showAlert = true) => {
    let error = "";

    if (stepIndex === 0) {
      error = getBasicInfoError(formData);
    } else if (stepIndex === 1) {
      error = getDocumentsError(formData, profileImage);
    }

    if (error && showAlert) {
      alert(error);
    }

    return !error;
  };

  const nextMoveForm = () => {
    if (currentIndex < 0 || currentIndex >= stepsArray.length - 1) {
      return;
    }

    if (!validateStep(currentIndex)) {
      return;
    }

    navigate(`/user/become-provider/${stepsArray[currentIndex + 1]}`);
  };

  const prevMoveForm = () => {
    const previousStep = stepsArray[currentIndex - 1];

    if (previousStep) {
      navigate(`/user/become-provider/${previousStep}`);
    }
  };

  const handleStepClick = (targetIndex) => {
    // Current ya previous steps par ja sakte hain.
    if (targetIndex <= currentIndex) {
      navigate(`/user/become-provider/${stepsArray[targetIndex]}`);
      return;
    }

    // Future steps ko click karke skip nahi kar sakte.
    alert("Please complete the current step using the Next button.");
  };


useEffect(() => {
  if (currentIndex < 0) return;

  // Basic Info validation
  if (currentIndex >= 1) {
    const basicInfoError = getBasicInfoError(formData);

    if (basicInfoError) {
      alert(basicInfoError);

      navigate("/user/become-provider/basic-info", {
        replace: true,
      });

      return;
    }
  }

  // Documents validation
  if (currentIndex >= 2) {
    const documentsError = getDocumentsError(formData, profileImage);

    if (documentsError) {
      alert(documentsError);

      navigate("/user/become-provider/upload-documents", {
        replace: true,
      });

      return;
    }
  }

  // Submit page protection
  if (currentIndex === 3 && !applicationSubmitted) {
    navigate("/user/become-provider/review", {
      replace: true,
    });
  }
}, [
  currentIndex,
  formData,
  profileImage,
  applicationSubmitted,
  navigate,
]);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="mb-2 text-xl font-semibold text-gray-900">
          Become a Provider
        </h1>

        <p className="text-sm text-gray-500 sm:text-base">
          Fill your professional details to create your provider profile.
        </p>
      </div>

      <div className="mx-auto mb-8 mt-6 flex w-full items-start md:w-[70%]">
        {stepLabels.map((item, index) => {
          const isCompleted = index < currentIndex;
          const isActive = index === currentIndex;
          const isClickable = index <= currentIndex;

          return (
            <React.Fragment key={item.step}>
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => handleStepClick(index)}
                className="flex shrink-0 flex-col items-center disabled:cursor-not-allowed"
              >
                <span
                  className={`
                    flex h-9 w-9 items-center justify-center rounded-full
                    border transition-all duration-300 sm:h-10 sm:w-10
                    ${
                      isCompleted
                        ? "border-green-500 bg-green-500 text-white"
                        : isActive
                          ? "border-primary bg-primary text-white"
                          : "border-gray-300 bg-white text-gray-500"
                    }
                  `}
                >
                  {isCompleted ? <IoCheckmark size={20} /> : index + 1}
                </span>

                <span
                  className={`
                    mt-2 text-[10px] sm:text-xs
                    ${
                      isCompleted
                        ? "text-green-600"
                        : isActive
                          ? "text-primary"
                          : "text-gray-500"
                    }
                  `}
                >
                  {item.label}
                </span>
              </button>

              {index !== stepLabels.length - 1 && (
                <div
                  className={`
                    mx-2 mt-[18px] h-px flex-1 sm:mx-3 sm:mt-5
                    ${isCompleted ? "bg-green-500" : "bg-gray-300"}
                  `}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mx-auto w-full p-1 md:w-[90%]">
        <Outlet
          context={{
            formData,
            setFormData,
            phoneNumber,
            profileImage,
            nextMoveForm,
            prevMoveForm,
            hideButtons,
            applicationSubmitted,
            setApplicationSubmitted,
          }}
        />
      </div>
    </div>
  );
};

export default BecomeProvider;
