import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

const NextPayoutCard = () => {
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
            25 May 2025
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
            ₹2,000
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
              w-[72%]
              h-full
              bg-green-500
              rounded-full
            "
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
          <PayoutStep
            completed
            label="Request"
          />

          <PayoutStep
            completed
            label="Processing"
          />

          <PayoutStep label="Payout" />
        </div>
      </div>
    </div>
  );
};

const PayoutStep = ({ completed, label }) => {
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
          3
        </div>
      )}

      <p className="font-medium text-muted">
        {label}
      </p>
    </div>
  );
};

export default NextPayoutCard;