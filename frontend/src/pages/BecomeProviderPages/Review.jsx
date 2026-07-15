import React from "react";
import { AiFillIdcard } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineCurrencyRupee,
} from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import StatusBudge from "../../components/common/StatusBadge";
import { useCreateProviders } from "../../hooks/useProvider";
import Button from "../../components/common/Button";
const Review = () => {
  const navigate = useNavigate();
  const { formData, prevMoveForm, phoneNumber } = useOutletContext();

  const { createProviderMutation } = useCreateProviders();

  const submitProvider = () => {
    // guard against missing required refs (e.g. user landed here directly via URL)
    if (
      !formData.category?._id ||
      !formData.state?._id ||
      !formData.district?._id ||
      !formData.city?._id
    ) {
      alert("Please complete Basic Info before submitting.");
      navigate("/user/become-provider/basic-info");
      return;
    }

    if (!formData.aadharCard || !formData.certificate) {
      alert("Please upload your documents before submitting.");
      navigate("/user/become-provider/upload-documents");
      return;
    }

    const form = new FormData();

    form.append("phoneNumber", formData.phoneNumber || phoneNumber);

    form.append("experience", formData.experience);

    form.append("price", formData.price);

    form.append("categories", formData.category._id);

    form.append("state", formData.state._id);

    form.append("district", formData.district._id);

    form.append("city", formData.city._id);

    form.append("village", formData.village);

    form.append("lat", formData.lat);

    form.append("lng", formData.lng);

    if (formData.aadharCard instanceof File) {
      form.append("aadharCard", formData.aadharCard);
    }

    if (formData.certificate instanceof File) {
      form.append("certificate", formData.certificate);
    }

    if (formData.profileImage instanceof File) {
      form.append("profileImage", formData.profileImage);
    }

    createProviderMutation.mutate(form, {
      onSuccess: () => {
        navigate("/user/become-provider/submit");
      },
    });
  };

  return (
    <div className="my-4">
      <h1 className="text-xl font-semibold">Review Your Details</h1>
      <p className="text-sm font-medium mb-5">
        Please review your information before submitting.
      </p>

      <div className="md:flex md:w-full md:gap-5 ">
        <div className="md:border md:p-3 md:rounded-md md:shadow-[inset_0_0_3px_rgba(255,255,255,0.9)] flex-1">
          <div className="flex justify-between items-center md:my-1">
            <h1 className="text-lg font-semibold">Basic Information</h1>
            <Link
              to="/user/become-provider/basic-info"
              className="text-primary  font-semibold hover:underline"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <div className="flex justify-between items-center">
              <h3>Provider Number</h3>
              <p>{formData.phoneNumber || phoneNumber}</p>
            </div>
            <div className="flex justify-between items-center">
              <h3>Experience</h3>
              <p>{formData.experience}</p>
            </div>
            <div className="flex justify-between items-center">
              <h3>Price (Per Hour)</h3>
              <p className="flex items-center">
                <MdOutlineCurrencyRupee />
                {formData.price}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3>City</h3>
              <p>{formData.city?.name}</p>
            </div>
            <div className="flex justify-between items-center">
              <h3>Service Category</h3>
              <p>{formData.category?.name}</p>
            </div>
            <div className="flex justify-between items-center">
              <h3>Location</h3>
              <p>
                {formData.district?.name}, {formData.state?.name}
              </p>
            </div>
          </div>
        </div>
        <div className="md:border md:p-3 md:rounded-md md:shadow-[inset_0_0_3px_rgba(255,255,255,0.9)] flex-1">
          <div className="flex justify-between items-center md:my-1 ">
            <h1 className="text-lg font-semibold ">Documents</h1>
            <Link
              to="/user/become-provider/upload-documents"
              className="font-semibold text-primary hover:underline"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shadow-sm">
                  <FaUserCircle size={24} />
                </div>
                <h3>Profile Image</h3>
              </div>
              <StatusBudge
                badge={formData.profileImage ? "uploaded" : "pending"}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-4">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg shadow-sm">
                  <AiFillIdcard size={24} />
                </div>
                <h3>Aadhar Card</h3>
              </div>
              <StatusBudge
                badge={formData.aadharCard ? "uploaded" : "pending"}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-4">
                <div className="p-2 bg-yellow-100 text-yellow-600 shadow-sm rounded-lg">
                  <PiCertificateFill size={24} />
                </div>
                <h3>Certificate</h3>
              </div>

              <StatusBudge
                badge={formData.certificate ? "uploaded" : "pending"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mx-auto mt-6 gap-5">
        {/* back */}
        <Button
          color="white"
          onClick={prevMoveForm}
          className="w-full md:w-[20%]"
        >
          <MdChevronLeft size={25} />
          Back
        </Button>

        {/* next */}
        <Button
          onClick={submitProvider}
          disabled={createProviderMutation.isLoading}
          className="w-full md:w-[30%]"
        >
          {createProviderMutation.isLoading ? "Submitting..." : "Submit Application"}
          <MdChevronRight size={25} />
        </Button>
      </div>
    </div>
  );
};

export default Review;