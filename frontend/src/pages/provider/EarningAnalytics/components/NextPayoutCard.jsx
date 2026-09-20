import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useProviderNextPayout } from "../../../../hooks/useProvider";


const NextPayoutCard = () => {
  const {
    data,
    isLoading,
    isError,
  } = useProviderNextPayout();

  const payout = data?.result;

  const formatDate = (date) => {
    if (!date) return "--";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatAmount = (amount) => {
    return Number(amount || 0).toLocaleString("en-IN");
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-[0_5px_20px_rgba(0,0,0,0.06)]">
        <p className="text-muted">
          Loading next payout...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-[0_5px_20px_rgba(0,0,0,0.06)]">
        <p className="text-red-500">
          Failed to load payout details.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        bg-white
        rounded-xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-4 flex-wrap">

        <div>
          <div className="flex items-center gap-2">

            <div
              className="
                w-11 h-11
                rounded-2xl
                bg-green-100
                text-green-600
                flex items-center justify-center
              "
            >
              <MdOutlineCalendarMonth size={24} />
            </div>

            <h1 className="text-2xl font-bold text-text">
              Next Payout
            </h1>

          </div>

          <p className="text-muted mt-3 text-base">
            Your next payout will be processed on
          </p>

          <h2 className="text-2xl font-bold text-text mt-2">
            {formatDate(payout?.payoutDate)}
          </h2>
        </div>

        {/* Amount */}
        <div
          className="
            bg-slate-50
            rounded-xl
            px-5 py-2
            min-w-[180px]
          "
        >
          <p className="text-muted text-sm font-medium">
            Estimated Amount
          </p>

          <h1 className="text-4xl font-bold text-text mt-3">
            ₹{formatAmount(payout?.estimatedAmount)}
          </h1>
        </div>

      </div>

      {/* Progress */}
      <div className="mt-4">

        <div
          className="
            w-full
            h-2
            bg-slate-100
            rounded-full
            overflow-hidden
          "
        >
          <div
            className="
              h-full
              bg-green-500
              rounded-full
              transition-all
              duration-500
            "
            style={{
              width: `${payout?.progress || 0}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div
          className="
            flex items-center justify-between
            mt-4
            gap-4
          "
        >
          {payout?.steps?.map((step, index) => (
            <PayoutStep
              key={step.key}
              completed={step.completed}
              label={step.label}
              stepNumber={index + 1}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

const PayoutStep = ({
  completed,
  label,
  stepNumber,
}) => {
  return (
    <div className="flex items-center gap-2">

      {completed ? (
        <IoCheckmarkCircle
          size={24}
          className="text-green-500"
        />
      ) : (
        <div
          className="
            w-6 h-6
            rounded-full
            bg-slate-400
            text-white
            flex items-center justify-center
            text-xs
            font-bold
          "
        >
          {stepNumber}
        </div>
      )}

      <p className="font-medium text-muted">
        {label}
      </p>

    </div>
  );
};

export default NextPayoutCard;