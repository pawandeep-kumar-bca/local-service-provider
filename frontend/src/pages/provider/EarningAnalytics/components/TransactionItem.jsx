import { MdOutlinePayments } from "react-icons/md";

const TransactionItem = ({ transaction }) => {
  const {
    image,
    name,
    service,
    date,
    amount,
    payment,
    status,
  } = transaction;

  return (
    <div
      className="
        rounded-2xl
        border border-slate-100
        p-4
        hover:shadow-[0_5px_20px_rgba(0,0,0,0.05)]
        transition-all duration-300
      "
    >
      {/* Desktop */}
      <div
        className="
          hidden md:grid
          grid-cols-[2fr_1fr_1fr_1fr_auto]
          items-center
          gap-4
        "
      >
        {/* User */}
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={name}
            className="
              w-12 h-12
              rounded-full
              object-cover
            "
          />

          <div>
            <h2 className="font-semibold text-text">
              {name}
            </h2>

            <p className="text-sm text-muted mt-1">
              {service}
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="flex justify-center">
          <p className="text-sm text-muted">
            {date}
          </p>
        </div>

        {/* Amount */}
        <div className="flex justify-center">
          <h2 className="font-bold text-text text-lg">
            {amount}
          </h2>
        </div>

        {/* Payment */}
        <div className="flex justify-center">
          <PaymentBadge payment={payment} />
        </div>

        {/* Status */}
        <div className="flex justify-end">
          <StatusBadge status={status} />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt={name}
              className="
                w-12 h-12
                rounded-full
                object-cover
              "
            />

            <div>
              <h2 className="font-semibold text-text">
                {name}
              </h2>

              <p className="text-sm text-muted mt-1">
                {service}
              </p>
            </div>
          </div>

          <h2 className="font-bold text-text text-lg">
            {amount}
          </h2>
        </div>

        <div
          className="
            flex items-center justify-between
            mt-4
            flex-wrap gap-3
          "
        >
          <p className="text-sm text-muted">
            {date}
          </p>

          <div className="flex items-center gap-2">
            <PaymentBadge payment={payment} />
            <StatusBadge status={status} />
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentBadge = ({ payment }) => {
  return (
    <div
      className="
        flex items-center gap-2
        px-3 py-1
        border border-muted
        rounded-lg
        bg-slate-50
      "
    >
      <MdOutlinePayments
        size={18}
        className="text-green-500"
      />

      <p className="text-sm font-medium text-muted">
        {payment}
      </p>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  return (
    <div
      className="
        px-4 py-1
        rounded-lg
        bg-green-100
        text-green-600
        text-xs
        font-semibold
      "
    >
      {status}
    </div>
  );
};

export default TransactionItem;