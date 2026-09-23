import React, { useState } from "react";
import { CiBank } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import Button from "../../../../components/common/Button";
import Loader from "../../../../components/common/Loader";

import { useProviderBankDetails } from "../../../../hooks/useProvider";

const WithdrawalAmountRequest = ({ close }) => {
    const [amount, setAmount] = useState("");

    const { providerWithdrawalMutation } = useProviderBankDetails();

    const handleAmountChange = (e) => {
        const value = e.target.value;


        if (/^\d*$/.test(value)) {
            setAmount(value);
        }
    };

    const MIN_WITHDRAWAL_AMOUNT = 500;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const withdrawalAmount = Number(amount);

        if (!withdrawalAmount || withdrawalAmount <= 0) {
            return alert("Please enter a valid withdrawal amount");
        }

        if (withdrawalAmount < MIN_WITHDRAWAL_AMOUNT) {
            return alert(`Minimum withdrawal amount is ₹${MIN_WITHDRAWAL_AMOUNT}`);
        }

        try {
            await providerWithdrawalMutation.mutateAsync({
                amount: withdrawalAmount,
            });

            close();
        } catch (error) {
            console.error("Withdrawal request failed:", error);
        }
    };

    const quickAmounts = [500, 1000, 2000, 5000];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={close}
        >
            <div
                className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-start justify-between border-b border-slate-100 p-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                            <CiBank className="text-3xl text-green-600" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800">
                                Withdraw Earnings
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Enter the amount you want to withdraw
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={close}
                        className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <IoClose className="text-2xl" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    {/* Amount */}
                    <div>
                        <label
                            htmlFor="withdrawal"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Enter Withdrawal Amount
                        </label>

                        <div className="flex items-center overflow-hidden rounded-xl border-2 border-slate-200 transition-all focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-50">
                            <span className="border-r border-slate-200 bg-slate-50 px-4 py-3 text-xl font-medium text-slate-700">
                                ₹
                            </span>

                            <input
                                type="text"
                                name="withdrawal"
                                id="withdrawal"
                                value={amount}
                                onChange={handleAmountChange}
                                placeholder="Enter amount"
                                inputMode="numeric"
                                autoFocus
                                className="w-full border-0 px-4 py-3 text-lg font-medium text-slate-700 outline-none placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    {/* Quick Amount */}
                    <div className="mt-4">
                        <p className="mb-2 text-xs font-medium text-slate-500">
                            Quick Select
                        </p>

                        <div className="grid grid-cols-4 gap-2">
                            {quickAmounts.map((quickAmount) => (
                                <button
                                    key={quickAmount}
                                    type="button"
                                    onClick={() => setAmount(String(quickAmount))}
                                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${amount === String(quickAmount)
                                        ? "border-green-500 bg-green-50 text-green-600"
                                        : "border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:bg-green-50"
                                        }`}
                                >
                                    ₹{quickAmount.toLocaleString("en-IN")}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Information */}
                    <div className="mt-5 rounded-xl bg-blue-50 p-4">
                        <div className="flex gap-3">
                            <div className="mt-0.5 text-blue-600">ⓘ</div>

                            <div>
                                <p className="text-sm font-medium text-blue-800">
                                    Withdrawal Information
                                </p>

                                <p className="mt-1 text-xs leading-5 text-blue-600">
                                    Your withdrawal will be sent to your verified primary bank account.
                                    Minimum withdrawal amount is ₹500. Please make sure the entered
                                    amount is available.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Selected Amount */}
                    <div className="mt-5 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">
                                Withdrawal Amount
                            </span>

                            <span className="text-lg font-bold text-slate-800">
                                ₹{Number(amount || 0).toLocaleString("en-IN")}
                            </span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex justify-end gap-3">
                        <Button
                            color="white"
                            type="button"
                            onClick={close}
                            disabled={providerWithdrawalMutation.isPending}
                        >
                            Cancel
                        </Button>

                        <Button
                            color="success"
                            type="submit"
                            disabled={
                                !amount ||
                                Number(amount) < MIN_WITHDRAWAL_AMOUNT ||
                                providerWithdrawalMutation.isPending
                            }
                        >
                            {providerWithdrawalMutation.isPending ? (
                                <span className="flex items-center gap-2">
                                    <Loader />
                                    Requesting...
                                </span>
                            ) : (
                                "Request Withdrawal"
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WithdrawalAmountRequest;