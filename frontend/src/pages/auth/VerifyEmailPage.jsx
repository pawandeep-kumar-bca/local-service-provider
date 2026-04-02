import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
const LoginPage = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="flex flex-col items-center justify-center mt-10 mb-1">
        <img src="/assets/mail.jpg" alt="mail" className="w-64 h-auto" />
      </div>
      <div className=" px-6 py-8">
        <h1 className="font-bold text-center mb-6 text-text text-3xl">Verify Your Email</h1>
    <p className="font-semibold text-center mb-6 text-muted text-lg">
          We have sent a verification link to your email address.
        </p>
        <p className="font-semibold text-center mb-6 text-muted text-lg">
          Pease check your inbox and confirm your email.
        </p>
        <Button color="pending" fullWidth>
          Reset Email
        </Button>

        <div className="w-full h-[2px] bg-border rounded-full mt-6 mb-2"></div>
        <h4 className="text-center text-sm font-bold cursor-pointer text-primary">
          Back To Login
        </h4>
      </div>
    </div>
  );
};

export default LoginPage;
