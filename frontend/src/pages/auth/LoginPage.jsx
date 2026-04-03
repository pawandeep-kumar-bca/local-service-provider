import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
  return (
    <div className="w-full md:flex h-full">
      <h1 className="bg-gradient-to-br text-center from-blue-400 via-blue-600 to-blue-800 text-2xl text-white font-medium pb-16 pt-10 rounded-b-3xl shadow-lg md:hidden">
        Login
      </h1>
      <div className=" rounded-t-3xl md:rounded-xl -mt-11 md:mt-0  bg-card  px-6 py-8 max-w-md w-full mx-auto">
        <form>
          <Input label="Email" id="email" type="text" />
          <Input label="Password" id="password" type="password" />
          <span className="pb-7 block text-right cursor-pointer text-primary text-sm font-medium">
            Forgot password?
          </span>

          <Button color="success" fullWidth>
            Login
          </Button>
        </form>

        <div className="flex w-full items-center gap-2 mt-6 mb-6">
          <div className="flex-1 h-[2px] bg-border rounded-full"></div>
          <span className="font-bold opacity-70 text-sm">Or continue with</span>
          <div className="flex-1 h-[2px] bg-border rounded-full"></div>
        </div>
        <Button
          color="white"
          fullWidth
          className="flex items-center gap-2 justify-center"
        >
          <FcGoogle size={20} /> Continue with Google
        </Button>
        <div className="w-full h-[2px] bg-border rounded-full mt-6 mb-2"></div>
        <h4 className="text-center text-sm">
          Don't have an account?{" "}
          <span className="font-semibold cursor-pointer text-primary">
            Register
          </span>{" "}
        </h4>
      </div>
    </div>
  );
};

export default LoginPage;
