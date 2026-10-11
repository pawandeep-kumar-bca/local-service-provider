
import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineCurrencyRupee,
  MdOutlineLocationOn,
  MdOutlineWorkOutline,
  MdOutlinePhone,
  MdOutlineEdit,
  MdOutlineCheckCircle,
} from "react-icons/md";
import { AiFillIdcard } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

import StatusBadge from "../../components/common/StatusBadge";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import { useCreateProviders } from "../../hooks/useProvider";

const BASIC_INFO_PATH = "/user/become-provider/basic-info";
const DOCUMENTS_PATH = "/user/become-provider/upload-documents";

const DetailItem = ({ label, value }) => (
  <div className="min-w-0">
    <p className="mb-1 text-xs font-medium text-slate-500">{label}</p>
    <p className="break-words text-sm font-semibold text-slate-800">
      {value !== "" && value != null ? value : "Not provided"}
    </p>
  </div>
);

const SectionHeader = ({ icon, title, subtitle, editTo }) => (
  <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
    <div className="flex min-w-0 items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        {icon}
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        {subtitle && (
          <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
        )}
      </div>
    </div>

    {editTo && (
      <Link
        to={editTo}
        className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50"
      >
        <MdOutlineEdit size={15} />
        Edit
      </Link>
    )}
  </div>
);

const Review = () => {
  const navigate = useNavigate();

  const {
    formData,
    prevMoveForm,
    phoneNumber,
    profileImage,
    setApplicationSubmitted,
  } = useOutletContext();

  const { createProviderMutation } = useCreateProviders();
  const isSubmitting = createProviderMutation.isPending;

  const documents = [
    {
      label: "Profile Image",
      file: formData.profileImage || profileImage,
      icon: FaUserCircle,
      color: "bg-blue-50 text-blue-600",
      required: true,
    },
    {
      label: "Aadhaar Card",
      file: formData.aadharCard,
      icon: AiFillIdcard,
      color: "bg-emerald-50 text-emerald-600",
      required: true,
    },
    {
      label: "Certificate",
      file: formData.certificate,
      icon: PiCertificateFill,
      color: "bg-amber-50 text-amber-600",
      required: true,
    },
  ];

  const uploadedCount = documents.filter(
    (document) => Boolean(document.file)
  ).length;

  const priceLabel =
    formData.priceType === "hourly"
      ? "Per Hour"
      : formData.priceType === "fixed"
        ? "Fixed Price"
        : "Not specified";

  const validateApplication = () => {
    if (
      formData.experience === "" ||
      formData.experience == null ||
      Number(formData.experience) < 0
    ) {
      alert("Please enter valid experience.");
      navigate(BASIC_INFO_PATH);
      return false;
    }

    if (
      formData.price === "" ||
      formData.price == null ||
      Number(formData.price) <= 0
    ) {
      alert("Please enter a valid price.");
      navigate(BASIC_INFO_PATH);
      return false;
    }

    if (
      !formData.priceType ||
      !formData.category?._id ||
      !formData.state?._id ||
      !formData.district?._id ||
      !formData.city?._id ||
      !formData.locality?.trim() ||
      formData.lat === "" ||
      formData.lat == null ||
      formData.lng === "" ||
      formData.lng == null
    ) {
      alert("Please complete your basic information.");
      navigate(BASIC_INFO_PATH);
      return false;
    }

    if (!documents.every((document) => document.file)) {
      alert("Please upload all required documents.");
      navigate(DOCUMENTS_PATH);
      return false;
    }

    return true;
  };

  const submitProvider = () => {
    if (isSubmitting || !validateApplication()) return;

    const form = new FormData();

    form.append("phoneNumber", formData.phoneNumber || phoneNumber);
    form.append("experience", formData.experience);
    form.append("price", formData.price);
    form.append("priceType", formData.priceType);
    form.append("categoryId", formData.category._id);
    form.append("state", formData.state._id);
    form.append("district", formData.district._id);
    form.append("city", formData.city._id);
    form.append("locality", formData.locality.trim());
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
        setApplicationSubmitted(true);
        navigate("/user/become-provider/submit");
      },
      onError: (error) => {
        console.error("Provider application error:", error);
        alert(
          error?.response?.data?.message ||
            "Unable to submit your application. Please try again."
        );
      },
    });
  };

  const cardClass =
    "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm";

  return (
    <div className="mx-auto w-full max-w-6xl pb-8">
      <div className="mb-6">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          <MdOutlineCheckCircle size={15} />
          Final Step
        </div>

        <h1 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
          Review Your Application
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Check your information carefully before submitting your provider
          application.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-8">
          <section className={cardClass}>
            <SectionHeader
              icon={<MdOutlinePhone size={20} />}
              title="Personal Information"
              subtitle="Contact and professional experience"
              editTo={BASIC_INFO_PATH}
            />

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 p-5 sm:grid-cols-2">
              <DetailItem
                label="Phone Number"
                value={formData.phoneNumber || phoneNumber}
              />
              <DetailItem
                label="Experience"
                value={
                  formData.experience !== "" &&
                  formData.experience != null
                    ? `${formData.experience} Years`
                    : null
                }
              />
            </div>
          </section>

          <section className={cardClass}>
            <SectionHeader
              icon={<MdOutlineWorkOutline size={20} />}
              title="Service Information"
              subtitle="Category and service pricing"
              editTo={BASIC_INFO_PATH}
            />

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 p-5 sm:grid-cols-3">
              <DetailItem
                label="Service Category"
                value={formData.category?.name}
              />

              <DetailItem
                label="Service Price"
                value={
                  <span className="inline-flex items-center">
                    <MdOutlineCurrencyRupee size={17} />
                    {formData.price}
                  </span>
                }
              />

              <DetailItem label="Pricing Type" value={priceLabel} />
            </div>
          </section>

          <section className={cardClass}>
            <SectionHeader
              icon={<MdOutlineLocationOn size={20} />}
              title="Service Location"
              subtitle="Where customers can find your services"
              editTo={BASIC_INFO_PATH}
            />

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 p-5 sm:grid-cols-3">
              <DetailItem label="State" value={formData.state?.name} />
              <DetailItem label="District" value={formData.district?.name} />
              <DetailItem label="City" value={formData.city?.name} />
              <DetailItem label="Locality / Area" value={formData.locality} />
              <DetailItem label="Latitude" value={formData.lat} />
              <DetailItem label="Longitude" value={formData.lng} />
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:col-span-4">
          <section className={cardClass}>
            <SectionHeader
              icon={<AiFillIdcard size={20} />}
              title="Uploaded Documents"
              subtitle={`${uploadedCount} of ${documents.length} selected`}
              editTo={DOCUMENTS_PATH}
            />

            <div className="divide-y divide-slate-100 px-4">
              {documents.map((document) => {
                const Icon = document.icon;
                const uploaded = Boolean(document.file);

                return (
                  <div
                    key={document.label}
                    className="flex items-center justify-between gap-2 py-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${document.color}`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800">
                          {document.label}
                          {document.required && (
                            <span className="ml-1 text-red-500">*</span>
                          )}
                        </p>

                        <p className="mt-0.5 truncate text-xs text-slate-500">
                          {uploaded
                            ? document.file?.name || "File selected"
                            : "Not uploaded"}
                        </p>
                      </div>
                    </div>

                    <StatusBadge badge={uploaded ? "uploaded" : "pending"} />
                  </div>
                );
              })}
            </div>
          </section>

          <section className={cardClass}>
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Application Summary
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Overview of your provider application
              </p>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-500">Service Category</span>
                <span className="text-right font-semibold text-slate-800">
                  {formData.category?.name || "—"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-500">Location</span>
                <span className="text-right font-semibold text-slate-800">
                  {formData.city?.name || "—"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-500">Documents</span>
                <span className="font-semibold text-slate-800">
                  {uploadedCount}/{documents.length}
                </span>
              </div>

              <div className="rounded-lg border border-indigo-100 bg-indigo-50 p-3">
                <div className="flex items-start gap-2">
                  <MdOutlineCheckCircle
                    size={19}
                    className="mt-0.5 shrink-0 text-indigo-600"
                  />
                  <p className="text-xs leading-5 text-indigo-800">
                    Your application will be sent for review. Please verify all
                    details before submitting.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <div className="mt-6 flex flex-col-reverse items-center justify-between gap-3 border-t border-slate-200 pt-5 sm:flex-row">
        <Button
          type="button"
          color="white"
          onClick={prevMoveForm}
          disabled={isSubmitting}
          className="w-full sm:w-auto sm:min-w-32"
        >
          <MdChevronLeft size={21} />
          Back
        </Button>

        <Button
          type="button"
          onClick={submitProvider}
          disabled={isSubmitting}
          className="w-full sm:w-auto sm:min-w-52"
        >
          {isSubmitting ? (
            <>
              <Loader size="small" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <MdChevronRight size={21} />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Review;
