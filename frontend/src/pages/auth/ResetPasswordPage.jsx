import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import { MdLockReset } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ResetPasswordPage = () => {
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

              {/* Security Icon */}
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
                <FaShieldAlt size={28} className="text-green-500" />
              </div>

              {/* Success Icon */}
              <div
                className="
                  absolute
                  left-0
                  bottom-5
                  w-12
                  h-12
                  rounded-xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  -rotate-6
                "
              >
                <IoCheckmarkCircleOutline size={27} className="text-blue-600" />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-3">Create a new password</h2>

            <p className="text-white/80 max-w-sm mx-auto leading-relaxed">
              Choose a strong password to keep your account secure and
              protected.
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
            <h1 className="text-2xl font-medium">Reset Password</h1>
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
              Create a new password for your account. Make sure your new
              password is strong and secure.
            </p>

            {/* Form */}
            <form>
              <Input
                placeholder="New Password"
                id="newPassword"
                type="password"
                className="placeholder:font-semibold mb-4"
              />

              <Input
                placeholder="Confirm New Password"
                id="confirmPassword"
                type="password"
                className="placeholder:font-semibold mb-5"
              />

              <Button color="success" fullWidth>
                Reset Password
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

export default ResetPasswordPage;
