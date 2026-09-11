import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../../../components/common/Button";
import TransactionItem from "./TransactionItem";
import { transactions } from "../data/earningsData";

const RecentTransactions = () => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border border-slate-100
        md:p-5
        md:shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-text">
          Recent Transactions
        </h1>

        <Link
          className="
            text-sm
            font-semibold
            text-green-600
            hover:text-green-700
            transition-all
          "
        >
          View All
        </Link>
      </div>

      <div className="space-y-0">
        {transactions.map((item) => (
          <TransactionItem
            key={item.id}
            transaction={item}
          />
        ))}
      </div>

      <Button color="white" fullWidth className="mt-4">
        View All Transactions
        <FaAngleRight />
      </Button>
    </div>
  );
};

export default RecentTransactions;