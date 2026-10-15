
import React, { useState } from "react";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import { FaLock, FaShieldAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useUser } from "../../hooks/useUser";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { changePasswordMutation } = useUser();
  const { logoutMutation } = useAuth();

  const isPasswordValid = {
    minLength: password.newPassword.length >= 8,
    uppercase: /[A-Z]/.test(password.newPassword),
    lowercase: /[a-z]/.test(password.newPassword),
    number: /[0-9]/.test(password.newPassword),
    specialChar: /[^A-Za-z0-9]/.test(password.newPassword),
  };

  const passwordRules = [
    { key: "minLength", label: "At least 8 characters" },
    { key: "uppercase", label: "One uppercase letter (A-Z)" },
    { key: "lowercase", label: "One lowercase letter (a-z)" },
    { key: "number", label: "At least one number (0-9)" },
    { key: "specialChar", label: "One special character (!@#$)" },
  ];

  const isPasswordStrong = Object.values(isPasswordValid).every(Boolean);
  const passwordsMatch =
    password.confirmPassword.length > 0 &&
    password.newPassword === password.confirmPassword;

  const isFormValid =
    password.currentPassword.length > 0 &&
    isPasswordStrong &&
    passwordsMatch;

  const handler = (e) => {
    const { name, value } = e.target;

    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitChangePassword = async (e) => {
    e.preventDefault();

    if (!isFormValid || changePasswordMutation.isPending) return;

    try {
      await changePasswordMutation.mutateAsync(password);
      await logoutMutation.mutateAsync();

      dispatch(logout());

      setPassword({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <FaLock size={17} />
            </div>

            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
              Change Password
            </h2>
          </div>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Update your password regularly to keep your account secure.
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-2 text-xs font-medium text-green-700 sm:flex">
          <FaShieldAlt size={13} />
          Account Security
        </div>
      </div>

      {/* Main Card */}
      <form
        onSubmit={submitChangePassword}
        className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Password Fields */}
          <div className="space-y-5 p-5 sm:p-7 lg:col-span-3">
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-900">
                Update your credentials
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Enter your current password and choose a new one.
              </p>
            </div>

            <div className="space-y-5">
              <Input
                label="Current Password"
                id="currentPassword"
                name="currentPassword"
                value={password.currentPassword}
                onChange={handler}
                type="password"
                required
                placeholder="Enter current password"
              />

              <div className="border-t border-gray-100 pt-5">
                <Input
                  label="New Password"
                  id="newPassword"
                  name="newPassword"
                  value={password.newPassword}
                  onChange={handler}
                  type="password"
                  required
                  placeholder="Create a strong password"
                />
              </div>

              <Input
                label="Confirm New Password"
                id="confirmPassword"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handler}
                type="password"
                required
                placeholder="Re-enter your new password"
              />

              {password.confirmPassword.length > 0 && (
                <p
                  className={`flex items-center gap-2 text-xs font-medium ${
                    passwordsMatch ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {passwordsMatch ? (
                    <IoIosCheckmark size={18} />
                  ) : (
                    <IoIosClose size={18} />
                  )}

                  {passwordsMatch
                    ? "Passwords match"
                    : "Passwords do not match"}
                </p>
              )}
            </div>
          </div>

          {/* Password Requirements */}
          <div className="border-t border-gray-100 bg-gray-50/70 p-5 sm:p-7 lg:col-span-2 lg:border-l lg:border-t-0">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <MdOutlineSecurity size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Password strength
                </h3>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Meet all the requirements for a stronger password.
                </p>
              </div>
            </div>

            {/* Strength Indicator */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">
                  Requirements completed
                </span>

                <span className="text-xs font-semibold text-gray-700">
                  {Object.values(isPasswordValid).filter(Boolean).length}/5
                </span>
              </div>

              <div className="flex gap-1.5">
                {passwordRules.map((rule) => (
                  <div
                    key={rule.key}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      isPasswordValid[rule.key]
                        ? "bg-green-500"
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-5 space-y-3">
              {passwordRules.map((rule) => {
                const valid = isPasswordValid[rule.key];

                return (
                  <div
                    key={rule.key}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-3 transition-colors ${
                      valid
                        ? "border-green-100 bg-green-50/70"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        valid
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {valid ? (
                        <IoIosCheckmark size={19} />
                      ) : (
                        <IoIosClose size={19} />
                      )}
                    </div>

                    <span
                      className={`text-xs font-medium sm:text-sm ${
                        valid ? "text-green-700" : "text-gray-600"
                      }`}
                    >
                      {rule.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50 p-3">
              <div className="flex items-start gap-2.5">
                <FaShieldAlt
                  className="mt-0.5 shrink-0 text-indigo-600"
                  size={14}
                />

                <p className="text-xs leading-5 text-indigo-800">
                  Avoid using your name, birthday, or passwords you use on
                  other websites.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p className="text-xs leading-5 text-gray-500">
            You may need to log in again after updating your password.
          </p>

          <div className="sm:min-w-[180px]">
            <Button
              type="submit"
              disabled={!isFormValid || changePasswordMutation.isPending}
              className="w-full"
            >
              {changePasswordMutation.isPending
                ? "Updating..."
                : "Update Password"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
