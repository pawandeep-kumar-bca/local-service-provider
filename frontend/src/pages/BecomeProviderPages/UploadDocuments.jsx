
import React from "react";
import { useOutletContext } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AiFillIdcard } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
import {
  MdChevronLeft,
  MdChevronRight,
  MdCloudUpload,
  MdCheckCircle,
  MdOutlineInfo,
  MdOutlineDescription,
} from "react-icons/md";

import Button from "../../components/common/Button";

const UploadDocuments = () => {
  const {
    formData,
    setFormData,
    nextMoveForm,
    prevMoveForm,
    profileImage,
  } = useOutletContext();

  const currentProfileImage = formData.profileImage || profileImage;

  const documents = [
    {
      key: "profileImage",
      title: "Profile Image",
      description: "Upload a clear photo of yourself.",
      hint: "JPG, PNG or WebP",
      accept: "image/jpeg,image/png,image/webp",
      icon: FaUserCircle,
      color: "bg-blue-50 text-blue-600",
      file: currentProfileImage,
      required: true,
    },
    {
      key: "aadharCard",
      title: "Aadhaar Card",
      description: "Upload the front side of your Aadhaar card.",
      hint: "JPG, PNG or WebP",
      accept: "image/jpeg,image/png,image/webp",
      icon: AiFillIdcard,
      color: "bg-emerald-50 text-emerald-600",
      file: formData.aadharCard,
      required: true,
    },
    {
      key: "certificate",
      title: "Skill Certificate",
      description: "Upload your experience or skill certificate.",
      hint: "PDF, JPG or PNG",
      accept: ".pdf,image/jpeg,image/png",
      icon: PiCertificateFill,
      color: "bg-amber-50 text-amber-600",
      file: formData.certificate,
      required: true,
    },
  ];

  const totalDocuments = documents.length;

  const uploadedCount = documents.filter(
    (document) => Boolean(document.file)
  ).length;

  const uploadProgress = Math.round(
    (uploadedCount / totalDocuments) * 100
  );

  const handleFileChange = (key, file) => {
    if (!file) return;

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("File size must be 5 MB or less.");
      return;
    }

    setFormData((previous) => ({
      ...previous,
      [key]: file,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (!currentProfileImage) {
      alert("Please upload your profile image.");
      return;
    }

    if (!formData.aadharCard) {
      alert("Please upload your Aadhaar card.");
      return;
    }

    if (!formData.certificate) {
      alert("Please upload your certificate.");
      return;
    }

    nextMoveForm();
  };

  return (
    <div className="mx-auto w-full max-w-5xl pb-8 pt-3">
      <div className="mb-7">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          <MdCloudUpload size={16} />
          Provider Verification
        </div>

        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Upload Required Documents
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          Upload clear and valid documents to complete your provider
          registration.
        </p>
      </div>

      <form onSubmit={submitForm}>
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Required Documents
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  All three documents are required.
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700">
                {uploadedCount}/{totalDocuments} Uploaded
              </span>
            </div>

            {documents.map((document) => {
              const Icon = document.icon;
              const uploaded = Boolean(document.file);

              return (
                <section
                  key={document.key}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-indigo-200 sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 items-start gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${document.color}`}
                      >
                        <Icon size={25} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-semibold text-gray-900">
                            {document.title}
                          </h3>

                          <span className="text-xs font-medium text-red-500">
                            Required
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                          {document.description}
                        </p>

                        <p className="mt-2 text-xs text-gray-400">
                          Supported formats: {document.hint}
                        </p>

                        {uploaded && (
                          <div className="mt-2 flex min-w-0 items-center gap-1.5 text-xs font-medium text-emerald-700">
                            <MdCheckCircle size={16} className="shrink-0" />
                            <span className="break-all">
                              {document.file?.name || "File selected"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <label
                      className={`
                        flex w-full shrink-0 cursor-pointer items-center
                        justify-center gap-2 rounded-lg border px-4 py-2.5
                        text-sm font-semibold transition sm:w-auto
                        ${
                          uploaded
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            : "border-indigo-200 bg-white text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50"
                        }
                      `}
                    >
                      {uploaded ? (
                        <MdCheckCircle size={18} />
                      ) : (
                        <MdCloudUpload size={19} />
                      )}

                      {uploaded ? "Change File" : "Upload File"}

                      <input
                        type="file"
                        accept={document.accept}
                        className="sr-only"
                        aria-label={`Upload ${document.title}`}
                        onChange={(event) => {
                          const file = event.target.files?.[0];

                          if (file) {
                            handleFileChange(document.key, file);
                          }

                          // Same file ko dobara select karne ki permission.
                          event.target.value = "";
                        }}
                      />
                    </label>
                  </div>
                </section>
              );
            })}
          </div>

          <aside className="space-y-4 lg:col-span-4">
            <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-900">
                Upload Progress
              </h2>

              <div className="mt-4 flex items-end justify-between gap-3">
                <p className="text-2xl font-bold text-indigo-600">
                  {uploadProgress}%
                </p>

                <p className="text-xs text-gray-500">
                  {uploadedCount} of {totalDocuments} documents
                </p>
              </div>

              <div
                className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100"
                role="progressbar"
                aria-valuenow={uploadProgress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Document upload progress"
              >
                <div
                  className="h-full rounded-full bg-indigo-600 transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>

              <div className="mt-4 space-y-3">
                {documents.map((document) => (
                  <div
                    key={document.key}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-xs text-gray-600">
                      {document.title}
                    </span>

                    {document.file ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
                        <MdCheckCircle size={15} />
                        Ready
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-gray-400">
                        Pending
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-blue-100 bg-blue-50/70 p-5">
              <div className="flex items-center gap-2">
                <MdOutlineInfo size={21} className="text-blue-600" />
                <h2 className="text-sm font-semibold text-gray-900">
                  Upload Guidelines
                </h2>
              </div>

              <ul className="mt-3 space-y-2.5 text-xs leading-5 text-gray-600">
                <li>• Ensure details are clearly readable.</li>
                <li>• Upload the correct document in each section.</li>
                <li>• Avoid blurry or cropped photos.</li>
                <li>• Maximum file size is 5 MB per file.</li>
              </ul>

              <div className="mt-4 flex items-start gap-2 border-t border-blue-100 pt-3">
                <MdOutlineDescription
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <p className="text-xs leading-5 text-gray-500">
                  Your documents will be used for provider verification.
                </p>
              </div>
            </section>
          </aside>
        </div>

        <div className="mt-7 flex flex-col-reverse justify-between gap-3 border-t border-gray-200 pt-5 sm:flex-row">
          <Button
            color="white"
            type="button"
            onClick={prevMoveForm}
            className="w-full sm:w-auto sm:min-w-36"
          >
            <MdChevronLeft size={22} />
            Back
          </Button>

          <Button type="submit" className="w-full sm:w-auto sm:min-w-40">
            Review Application
            <MdChevronRight size={22} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadDocuments;
