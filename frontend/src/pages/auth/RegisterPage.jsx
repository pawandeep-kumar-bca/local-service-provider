import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
  return (
    <div className="w-full min-h-screen">
      <h1 className="bg-gradient-to-br text-center from-blue-400 via-blue-600 to-blue-800 text-2xl text-white font-medium pb-16 pt-10 rounded-b-3xl shadow-lg">
        Create Account
      </h1>
      <div className=" rounded-t-3xl -mt-11 bg-card  px-6 py-8">
        <form>
          <Input label="Name" id="name" type="text" />
          <Input label="Email" id="email" type="text" />
          <Input label="Password" id="password" type="password" />

          <Button color="success" fullWidth>
            Sign Up
          </Button>
        </form>

        
        <div className="w-full h-[2px] bg-border rounded-full mt-6 mb-2"></div>
        <h4 className="text-center text-sm">
          Already have an account?{" "}
          <span className="font-semibold cursor-pointer text-primary">
            Login
          </span>{" "}
        </h4>
      </div>
    </div>
  );
};

export default LoginPage;
