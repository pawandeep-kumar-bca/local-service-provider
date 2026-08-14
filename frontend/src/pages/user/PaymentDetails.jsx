import {
  MdOutlinePayment,
  MdReceiptLong,
  MdCalendarToday,
  MdCreditCard,
  MdCheckCircle,
  MdCurrencyRupee,
  MdLocationOn,
  MdPerson,
  MdHome,
  MdAccessTime,
  MdSchedule,
} from "react-icons/md";

import { FaPhoneAlt, FaRegCalendarMinus, FaStar } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import StatusBadge from "../../components/common/StatusBadge";
import { useParams } from "react-router-dom";
import { useUserPaymentDetails } from "../../hooks/usePayment";
import Avatar from "../../components/common/Avatar";

const PaymentDetails = () => {
  const { paymentId } = useParams();

  const { data } = useUserPaymentDetails(paymentId);
  const payment = data?.paymentDetails;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "2-digit",
    });
  };
  const formatAmount = (amount, currency = "INR") => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  const paymentInfo = [
    {
      label: "Payment ID",
      value: payment?.paymentId || "-",
      icon: <MdOutlinePayment size={18} />,
    },
    {
      label: "Receipt / Booking ID",
      value: payment?.receipt,
      icon: <MdReceiptLong size={18} />,
    },
    {
      label: "Payment Date",
      value: formatDate(payment?.createdAt),
      icon: <MdCalendarToday size={18} />,
    },
    {
      label: "Payment Method",
      value: payment?.paymentMethod?.toUpperCase() || "-",
      icon: <MdCreditCard size={18} />,
    },
    {
      label: "Razorpay Payment ID",
      value: payment?.razorpayPaymentId,
      icon: <SiRazorpay size={18} />,
    },
    {
      label: "Razorpay Order ID",
      value: payment?.razorpayOrderId,
      icon: <SiRazorpay size={18} />,
    },
    {
      label: "Payment Status",
      value: payment?.paymentStatus || "-",
      icon: <MdCheckCircle size={18} />,
    },
    {
      label: "Currency",
      value: payment?.currency || "INR",
      icon: <MdCurrencyRupee size={18} />,
    },
  ];
  const formatTime = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  return (
    <section className="w-full pb-8">
      <div className="mt-5 bg-white border border-blue-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 md:p-6">
          {/* HEADER */}

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
              <MdCurrencyRupee size={21} />
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold text-brownness">
                Payment Breakdown
              </h2>

              <p className="text-xs md:text-sm text-grayness mt-0.5">
                Detailed breakdown of your payment
              </p>
            </div>
          </div>

          {/* FEE CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* PROVIDER FEE */}

            <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs md:text-sm text-grayness">Provider Fee</p>

                <span className="w-8 h-8 rounded-lg bg-white text-primary flex items-center justify-center">
                  <MdPerson size={18} />
                </span>
              </div>

              <p className="text-xl md:text-2xl font-bold text-brownness mt-3">
                {formatAmount(
                  payment?.bookingId?.pricing?.serviceCharge,
                  payment?.currency,
                )}
              </p>

              <p className="text-xs text-grayness mt-1">Service amount</p>
            </div>

            {/* PLATFORM FEE */}

            <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs md:text-sm text-grayness">Platform Fee</p>

                <span className="w-8 h-8 rounded-lg bg-white text-indigo-500 flex items-center justify-center">
                  <MdOutlinePayment size={18} />
                </span>
              </div>

              <p className="text-xl md:text-2xl font-bold text-brownness mt-3">
                {formatAmount(
                  payment?.bookingId?.pricing?.platformFee,
                  payment?.currency,
                )}
              </p>

              <p className="text-xs text-grayness mt-1">LSC platform charge</p>
            </div>

            {/* TOTAL */}

            <div className="rounded-xl border border-green-200 bg-green-50/50 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs md:text-sm text-grayness">Total Paid</p>

                <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] md:text-xs font-semibold">
                  Paid
                </span>
              </div>

              <p className="text-xl md:text-2xl font-bold text-brownness mt-3">
                {formatAmount(
                  payment?.bookingId?.pricing?.totalAmount,
                  payment?.currency,
                )}
              </p>

              <p className="text-xs text-green-600 font-medium mt-1">
                Paid via {payment?.paymentMethod?.toUpperCase() || "UPI"}
              </p>
            </div>
          </div>

          {/* BREAKDOWN */}

          <div className="flex-1">
            <div className="flex gap-2 items-center py-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                <MdOutlinePayment size={21} />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-brownness">
                Transaction Information
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-5 p-2">
              {paymentInfo.map((item, idx) => (
                <div key={idx} className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-8 h-8 shrink-0 rounded-lg bg-blue-50 text-primary flex items-center justify-center">
                      {item.icon}
                    </span>

                    <span className="text-xs md:text-sm text-grayness">
                      {item.label}
                    </span>
                  </div>

                  {item.label === "Payment Status" ? (
                    <div className="ml-10">
                      <StatusBadge badge={item.value} />
                    </div>
                  ) : (
                    <p
                      className="
                        ml-10
                        font-semibold
                        text-sm
                        md:text-base
                        text-brownness
                        truncate
                      "
                      title={item.value}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOOKING INFORMATION
      ====================================================== */}

      <div className="mt-5 bg-white border border-blue-100 rounded-2xl shadow-sm p-5 md:p-6">
        {/* HEADER */}

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
            <MdReceiptLong size={21} />
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-bold text-brownness">
              Booking Information
            </h2>

            <p className="text-xs md:text-sm text-grayness">
              Service, booking and provider information
            </p>
          </div>
        </div>

        {/* BOOKING GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* ================= BOOKING DETAILS ================= */}

          <div className="rounded-xl border border-blue-100 bg-blue-50/30 p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white text-primary flex items-center justify-center shadow-sm">
                <MdCalendarToday size={19} />
              </div>

              <h3 className="font-semibold text-brownness">Booking Details</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-grayness">Booking ID</p>

                  <p className="text-sm font-semibold text-brownness mt-0.5">
                    {payment?.bookingId?.bookingId || "-"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-grayness">Booking Status</p>

                  <div className="mt-2">
                    <StatusBadge badge={payment?.bookingId?.bookingStatus} />
                  </div>
                </div>
              </div>
<div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-grayness">Booking Date</p>
                <div className="flex items-center gap-1 mt-1">
                  <FaRegCalendarMinus size={15} className="text-primary" />
                  <p className="text-sm font-semibold text-brownness ">
                    {formatDate(payment?.bookingId?.bookingDate)}
                  </p>
                </div>
              </div>
               <div>
                <p className="text-xs text-grayness">Duration</p>

                <p className="text-sm font-semibold text-brownness mt-0.5">
                  {payment?.bookingId?.durationHours || 0} Hours
                </p>
              </div>
</div>
              <div className="mt-0.5">
                <p className="text-xs text-grayness">Booking Slot</p>
                <div className="flex items-center gap-1 mt-1">
                  <MdAccessTime size={15} className="text-primary" />

                  <p className="text-sm font-semibold text-brownness">
                    {formatTime(
                      payment?.bookingId?.bookingSlot?.startTime,
                    ).toUpperCase()}
                    {" - "}
                    {formatTime(
                      payment?.bookingId?.bookingSlot?.endTime,
                    ).toUpperCase()}
                  </p>
                </div>
              </div>
             
            </div>
          </div>

          {/* ================= SERVICE DETAILS ================= */}

          <div className="rounded-xl border border-pink-100 bg-pink-50/30 p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white text-pink-500 flex items-center justify-center shadow-sm">
                <MdOutlinePayment size={19} />
              </div>

              <h3 className="font-semibold text-brownness">Service Details</h3>
            </div>

            <div className="flex items-center gap-3">
              <div
                className=" w-14 flex items-center justify-center h-14 rounded-xl"
                style={{
                  backgroundColor:
                    payment?.bookingId?.serviceSnapshot?.serviceBackground,
                }}
              >
                <img
                  src={payment?.bookingId?.serviceSnapshot?.serviceImage}
                  alt={
                    payment?.bookingId?.serviceSnapshot?.categoryName ||
                    "Service"
                  }
                  className="w-10 h-10  object-cover border border-pink-100"
                />
              </div>

              <div className="min-w-0">
                <h4 className="font-bold text-brownness truncate">
                  {payment?.bookingId?.serviceSnapshot?.categoryName || "-"}
                </h4>

                <p className="text-xs text-grayness mt-1">
                  {payment?.bookingId?.serviceSnapshot?.priceType === "hourly"
                    ? "Hourly Service"
                    : "Fixed Service"}
                </p>
              </div>
            </div>

            <div className="border-t border-pink-100 mt-4 pt-4 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-grayness">Price Type</span>

                <span className="text-sm font-semibold text-brownness capitalize">
                  {payment?.bookingId?.serviceSnapshot?.priceType || "-"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-grayness">Service Price</span>

                <span className="text-sm font-bold text-primary">
                  {formatAmount(
                    payment?.bookingId?.serviceSnapshot?.price,
                    payment?.currency,
                  )}
                  {payment?.bookingId?.serviceSnapshot?.priceType ===
                    "hourly" && "/hr"}
                </span>
              </div>
            </div>
          </div>

          {/* ================= SERVICE ADDRESS ================= */}

          <div className="rounded-xl border border-blue-100 bg-blue-50/30 p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white text-blue-500 flex items-center justify-center shadow-sm">
                <MdLocationOn size={20} />
              </div>

              <h3 className="font-semibold text-brownness">Service Address</h3>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2">
                <MdHome size={16} className="text-grayness mt-0.5 shrink-0" />

                <p className="text-sm text-brownness leading-5">
                  {payment?.bookingId?.serviceAddressSnapshot?.fullAddress ||
                    "-"}
                </p>
              </div>

              <p className="text-sm text-brownness pl-6">
                {payment?.bookingId?.serviceAddressSnapshot?.village || "-"}
              </p>

              <p className="text-sm text-brownness pl-6">
                {payment?.bookingId?.serviceAddressSnapshot?.city || "-"},{" "}
                {payment?.bookingId?.serviceAddressSnapshot?.district || "-"}
              </p>

              <p className="text-sm text-brownness pl-6">
                {payment?.bookingId?.serviceAddressSnapshot?.state || "-"}
              </p>

              {payment?.bookingId?.serviceAddressSnapshot?.landmark && (
                <div className="mt-4 pt-3 border-t border-blue-100">
                  <p className="text-xs text-grayness">Landmark</p>

                  <p className="text-sm font-medium text-brownness mt-1">
                    {payment?.bookingId?.serviceAddressSnapshot?.landmark}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ================= PROVIDER DETAILS ================= */}

          <div className="rounded-xl border border-green-100 bg-green-50/30 p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white text-green-600 flex items-center justify-center shadow-sm">
                <MdPerson size={20} />
              </div>

              <h3 className="font-semibold text-brownness">Provider Details</h3>
            </div>

            {/* PROVIDER PROFILE */}

            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-14 h-14 object-cover border-2 border-white rounded-full shadow-sm">
                  <Avatar
                    name={payment?.bookingId?.providerSnapshot?.name}
                    image={
                      payment?.bookingId?.providerSnapshot?.profileImage?.url
                    }
                  />
                </div>
                {payment?.bookingId?.providerSnapshot?.availability && (
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
                )}
              </div>

              <div className="min-w-0">
                <h4 className="font-bold text-brownness truncate">
                  {payment?.bookingId?.providerSnapshot?.name || "-"}
                </h4>

                <div className="flex items-center gap-1 mt-1">
                  <FaStar size={12} className="text-yellow-400" />

                  <span className="text-xs font-medium text-brownness">
                    {payment?.bookingId?.providerSnapshot?.rating || 0}
                  </span>

                  <span className="text-xs text-grayness">
                    ({payment?.bookingId?.providerSnapshot?.totalReview || 0}{" "}
                    reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* PROVIDER INFO */}

            <div className="border-t border-green-100 mt-4 pt-4 space-y-3">
              <div>
                <p className="text-xs text-grayness">Provider ID</p>

                <p className="text-sm font-semibold text-brownness mt-1">
                  {payment?.bookingId?.providerSnapshot?.providerId || "-"}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt size={12} className="text-green-600" />

                <span className="text-sm font-semibold text-brownness">
                  {payment?.bookingId?.providerSnapshot?.phone || "-"}
                </span>
              </div>

              <span
                className={`
                  inline-flex
                  px-2.5
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  ${
                    payment?.bookingId?.providerSnapshot?.availability
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }
                `}
              >
                {payment?.bookingId?.providerSnapshot?.availability
                  ? "Available"
                  : "Unavailable"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetails;
