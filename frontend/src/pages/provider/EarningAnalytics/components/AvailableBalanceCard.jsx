import { IoWalletOutline } from "react-icons/io5";
import { PiHandWithdrawLight } from "react-icons/pi";
import { CiBank } from "react-icons/ci";
import Button from "../../../../components/common/Button";

const AvailableBalanceCard = () => {
  
  return (
    <div
      className=" bg-white rounded-xl border border-slate-100 p-5 shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
    >
      <div className="flex items-center gap-5">
        <div
          className="
            w-12 h-12
            flex items-center justify-center
            bg-green-100
            text-green-500
            rounded-xl
          "
        >
          <IoWalletOutline size={20} />
        </div>

        <h1 className="text-lg font-bold text-text">
          Available Balance
        </h1>
      </div>

      <div className="mt-3">
        <h1 className="text-3xl font-bold">
          ₹24,500
        </h1>

        <p className="text-sm text-muted">
          You can withdraw your earnings anytime.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-5">
        <Button fullWidth>
          <PiHandWithdrawLight size={24} />
          Withdraw Now
        </Button>

        <Button
          fullWidth
          color="white"
          className="text-green-500"
        >
          <CiBank size={24} />
          Add Bank Account
        </Button>
      </div>

      <div
        className="
          mt-6
          bg-green-100
          rounded-2xl
          px-4 py-2
        "
      >
        <h2 className="font-semibold text-text">
          Get Paid Faster 🚀
        </h2>

        <p className="text-xs text-muted leading-6">
          Complete your KYC and add a verified bank account
          for instant payouts.
        </p>

        <Button className="mt-1 md:text-sm">
          Complete KYC
        </Button>
      </div>
    </div>
  );
};

export default AvailableBalanceCard;