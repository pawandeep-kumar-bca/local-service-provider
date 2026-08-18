import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import { MdLockReset } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Loader from "../../components/common/Loader";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const { sendForgotPasswordEmailMutation } = useAuth();

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    await sendForgotPasswordEmailMutation.mutateAsync({ email });
    setEmail("");
  };
  return (
    <div className="min-h-screen w-full bg-bg flex items-center justify-center md:p-6">
      <div
        className="
          w-full
          min-h-screen
          md:min-h-0
          md:max-w-5xl
          md:h-[600px]
          bg-card
          md:rounded-3xl
          overflow-hidden
          md:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          flex
        "
      >
        {/* ================= LEFT - DESKTOP ================= */}
        <div
          className="
            hidden
            md:flex
            w-1/2
            relative
            overflow-hidden
            bg-gradient-to-br
            from-blue-600
            via-blue-500
            to-indigo-600
            items-center
            justify-center
            p-10
          "
        >
          {/* Decorative circles */}
          <div
            className="
              absolute
              -top-20
              -left-20
              w-64
              h-64
              rounded-full
              bg-white/10
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -right-20
              w-72
              h-72
              rounded-full
              bg-white/10
            "
          />

          <div className="relative z-10 text-center text-white">
            {/* Illustration */}
            <div className="relative mx-auto mb-8 w-64 h-52">
              {/* Laptop Screen */}
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  top-8
                  w-56
                  h-36
                  rounded-xl
                  bg-white
                  p-2
                  shadow-2xl
                "
              >
                <div
                  className="
                    w-full
                    h-full
                    rounded-lg
                    bg-gradient-to-br
                    from-blue-50
                    to-indigo-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      w-20
                      h-20
                      rounded-full
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <MdLockReset size={48} className="text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div
                className="
                  absolute
                  bottom-2
                  left-1/2
                  -translate-x-1/2
                  w-64
                  h-4
                  rounded-b-xl
                  bg-white
                  shadow-lg
                "
              />

              {/* Mail Icon */}
              <div
                className="
                  absolute
                  -right-1
                  top-1
                  w-14
                  h-14
                  rounded-2xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  rotate-6
                "
              >
                <IoMailOutline size={28} className="text-blue-600" />
              </div>

              {/* Security Icon */}
              <div
                className="
                  absolute
                  left-0
                  bottom-5
                  w-12
                  h-12
                  rounded-xl
                  bg-white/90
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  -rotate-6
                "
              >
                <FaShieldAlt size={22} className="text-green-500" />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-3">Forgot your password?</h2>

            <p className="text-white/80 max-w-sm mx-auto leading-relaxed">
              Don't worry. Enter your registered email and we'll help you
              securely reset your password.
            </p>
          </div>
        </div>

        {/* ================= RIGHT - FORM ================= */}
        <div
          className="
            w-full
            md:w-1/2
            flex
            flex-col
            md:items-center
            md:justify-center
          "
        >
          {/* ================= MOBILE HEADER ================= */}
          <div
            className="
              w-full
              bg-gradient-to-br
              from-blue-400
              via-blue-600
              to-blue-800
              text-center
              text-white
              md:hidden
              pt-10
              pb-20
              rounded-b-3xl
              shadow-lg
            "
          >
            <h1 className="text-2xl font-medium">Forgot Password?</h1>
          </div>

          {/* ================= FORM CONTAINER ================= */}
          <div
            className="
              w-full
              max-w-md
              bg-card
              rounded-t-3xl
              -mt-12
              relative
              z-10
              px-6
              py-8
              md:rounded-none
              md:mt-0
              md:px-12
              md:py-10
            "
          >
            {/* Icon */}
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-blue-50
                flex
                items-center
                justify-center
                mb-6
              "
            >
              <MdLockReset size={36} className="text-blue-600" />
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Reset your password
            </h1>

            {/* Description */}
            <p className="text-sm text-muted mb-8 leading-relaxed">
              Enter the email address associated with your account. We'll send
              you a link to reset your password.
            </p>

            {/* Form */}
            <form onSubmit={forgotPasswordHandler}>
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                className="placeholder:font-semibold mb-5"
              />

              <Button
                type="submit"
                color="success"
                disabled={
                  sendForgotPasswordEmailMutation.isPending
                }
                fullWidth
              >
                {sendForgotPasswordEmailMutation.isPending
                  ? <Loader size="small" />
                  : "Send Reset Link"}
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-7">
              <div className="flex-1 h-px bg-border" />

              <span className="text-xs text-muted">OR</span>

              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Back to Login */}
            <Link
              to="/login"
              className="
                block
                text-center
                text-sm
                font-bold
                text-primary
                hover:underline
                transition-all
              "
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
