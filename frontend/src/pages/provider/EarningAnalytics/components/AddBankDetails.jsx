import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Input from "../../../../components/common/Input";
import Button from "../../../../components/common/Button";
import { useProviderBankDetails } from "../../../../hooks/useProvider";
import Loader from "../../../../components/common/Loader";

const AddBankDetails = ({ close }) => {
    const [formData, setFormData] = useState({
        accountHolderName: '',
        accountNumber: '',
        ifscCode: '',
        bankName: ''
    })
    const isFormValid =
        formData.accountHolderName.trim() &&
        formData.accountNumber.trim() &&
        formData.ifscCode.trim() &&
        formData.bankName.trim();
    const { providerBankDetailsMutation } = useProviderBankDetails()
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.accountHolderName.trim() ||
            !formData.accountNumber.trim() ||
            !formData.ifscCode.trim() ||
            !formData.bankName.trim()
        ) {
            return alert("All fields are required");
        }

        try {
            await providerBankDetailsMutation.mutateAsync(formData, {
                onSuccess: () => {
                    setFormData({
                        accountHolderName: '',
                        accountNumber: '',
                        ifscCode: '',
                        bankName: ''
                    })

                }
            });

            close();
        } catch (error) {
            console.error("Failed to add bank account:", error);
        }
    };
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    const changeValue = (e) => {
        const { value, name } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === "ifscCode" ? value.toUpperCase() : value,
        }));
    };
    return (
        <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
        >
            <div
                className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 pb-4 flex items-start justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            Add Bank Account
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            Enter your bank details to receive earnings securely.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={close}
                        className="rounded-full p-2 hover:bg-slate-100 transition-colors"
                    >
                        <IoClose className="text-2xl text-slate-700" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 pb-6">
                    <div className="space-y-4">
                        <Input
                            type="text"
                            id="accountHolderName"
                            value={formData.accountHolderName}
                            onChange={changeValue}
                            label="Account Holder Name"
                            placeholder="Enter account holder name"
                            required
                        />

                        <Input
                            type="text"
                            id="accountNumber"
                            value={formData.accountNumber}
                            onChange={changeValue}
                            label="Account Number"
                            placeholder="Enter account number"
                            inputMode="numeric"
                            required
                        />


                        <Input
                            type="text"
                            id="ifscCode"
                            value={formData.ifscCode}
                            onChange={changeValue}
                            label="IFSC Code"
                            placeholder="Enter IFSC code"
                            required
                        />

                        <Input
                            type="text"
                            id="bankName"
                            value={formData.bankName}
                            onChange={changeValue}
                            label="Bank Name"
                            placeholder="Enter bank name"
                            required
                        />
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex justify-end gap-3">
                        <Button
                            color="white"
                            type="button"
                            onClick={close}
                        >
                            Cancel
                        </Button>

                        <Button
                            color="success"
                            type="submit"
                            disabled={
                                !isFormValid ||
                                providerBankDetailsMutation.isPending
                            }
                        >
                            {providerBankDetailsMutation.isPending ? (
                                <>
                                    <Loader />
                                    Adding...
                                </>
                            ) : (
                                "Add Bank Account"
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBankDetails;