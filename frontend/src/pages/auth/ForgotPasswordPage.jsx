import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
const LoginPage = () => {
  return (
    <div className="w-full min-h-screen">
      <h1 className="bg-gradient-to-br text-center from-blue-400 via-blue-600 to-blue-800 text-2xl text-white font-medium pb-16 pt-10 rounded-b-3xl shadow-lg">
        Forgot Password?
      </h1>
      <div className=" rounded-t-3xl -mt-11 bg-card  px-6 py-8">
        <h4 className="font-semibold text-center mb-7 text-muted text-lg">
          Enter your email to reset your password
        </h4>
        <form>
          <Input
            placeholder="Email"
            id="email"
            type="text"
            className="placeholder:font-semibold mb-4"
          />
          <Button color="success" fullWidth>
            Send Reset Link
          </Button>
        </form>

        <div className="w-full h-[2px] bg-border rounded-full mt-6 mb-2"></div>
        <h4 className="text-center text-sm font-bold cursor-pointer text-primary">
          Back To Login
        </h4>
      </div>
    </div>
  );
};

export default LoginPage;
