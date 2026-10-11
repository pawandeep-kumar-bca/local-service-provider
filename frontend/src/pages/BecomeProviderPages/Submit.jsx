
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdCheckCircle,
  MdOutlineAccessTime,
  MdOutlineDashboard,
  MdOutlineVerifiedUser,
  MdArrowForward,
} from "react-icons/md";
import { HiDocumentCheck } from "react-icons/hi2";
import { IoPaperPlane } from "react-icons/io5";

import StatusBadge from "../../components/common/StatusBadge";
import Button from "../../components/common/Button";

const Submit = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-5xl py-6 md:py-10">
      {/* Main Success Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Success Header */}
        <div className="relative overflow-hidden border-b border-green-100 bg-gradient-to-br from-green-50 via-white to-blue-50 px-5 py-10 text-center sm:px-10 md:py-14">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-green-100/50 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-blue-100/50 blur-2xl" />

          {/* Success Illustration */}
          <div className="relative mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-green-100 bg-white shadow-sm sm:h-32 sm:w-32">
            <HiDocumentCheck
              size={76}
              className="text-green-600 sm:text-[84px]"
            />

            <div className="absolute -bottom-1 -right-2 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-indigo-600 text-white shadow-sm">
              <IoPaperPlane size={19} />
            </div>

            <div className="absolute -right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
              <MdCheckCircle size={23} />
            </div>
          </div>

          {/* Heading */}
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-100/70 px-3 py-1 text-xs font-semibold text-green-700">
              <MdCheckCircle size={15} />
              Submission Successful
            </span>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              Application Submitted!
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Your provider application has been submitted successfully.
              Our team will review your information and uploaded documents.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 p-5 sm:p-7 md:grid-cols-2 md:gap-8 md:p-8">
          {/* Application Status */}
          <section className="rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <MdOutlineAccessTime size={25} />
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Application Status
                </h2>
                <p className="mt-0.5 text-xs text-gray-500">
                  Current review progress
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 rounded-lg bg-amber-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Under Review
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  Your application is awaiting verification.
                </p>
              </div>

              <StatusBadge badge="pending" />
            </div>

            <div className="mt-5 flex items-start gap-3">
              <MdOutlineVerifiedUser
                size={21}
                className="mt-0.5 shrink-0 text-indigo-600"
              />

              <p className="text-sm leading-6 text-gray-600">
                Please wait while our team verifies your details and
                documents. You will be notified when the status changes.
              </p>
            </div>
          </section>

          {/* What Happens Next */}
          <section className="rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <MdCheckCircle size={24} />
              </div>

              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  What Happens Next?
                </h2>
                <p className="mt-0.5 text-xs text-gray-500">
                  Your application journey
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <MdCheckCircle size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Application Submitted
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Your details and documents have been submitted.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <MdOutlineAccessTime size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Verification in Progress
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Our team will check your submitted information.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <MdOutlineVerifiedUser size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Final Decision
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    You will be informed when your application is reviewed.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 bg-gray-50/70 px-5 py-5 sm:flex-row sm:px-8">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-gray-800">
              Thank you for joining Local Service Connector!
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              You can visit your dashboard while your application is reviewed.
            </p>
          </div>

          <Button
            color="blue"
            type="button"
            onClick={() => navigate("/user/dashboard")}
            className="w-full sm:w-auto sm:min-w-48"
          >
            <MdOutlineDashboard size={20} />
            Go to Dashboard
            <MdArrowForward size={19} />
          </Button>
        </div>
      </div>

      {/* Review Time Note */}
      <p className="mt-5 text-center text-xs leading-5 text-gray-500">
        Application review usually takes 24–48 hours. Actual review time
        may vary.
      </p>
    </div>
  );
};

export default Submit;
