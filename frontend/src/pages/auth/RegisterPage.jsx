import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
const LoginPage = () => {
 const { registerMutation } = useAuth(); 
  const [fullname ,setName] = useState('')
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
 const submitForm = (e) => {
    e.preventDefault(); // 🔥 page reload stop

    registerMutation.mutate({
      fullname,
      email,
      password,
    });
    setName('')
    setEmail('')
    setPassword('')
  };
  return (
    <div className="w-full md:flex h-full">
      <h1 className="bg-gradient-to-br text-center from-blue-400 via-blue-600 to-blue-800 text-2xl text-white font-medium pb-16 pt-10 rounded-b-3xl shadow-lg md:hidden">
        Create Account
      </h1>
      <div className=" rounded-t-3xl md:rounded-xl -mt-11 md:mt-0  bg-card  px-6 py-8 max-w-md w-full mx-auto">
        <form onSubmit={submitForm}>
          <Input label="Name" id="name" type="text" value={fullname} onChange={(e)=>{
            setName(e.target.value)
          }}/>
          <Input label="Email" id="email" type="text" value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
          <Input label="Password" id="password" type="password" value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }}/>

          <Button type="submit" color="success" fullWidth>
            Sign Up
          </Button>
        </form>

        <div className="w-full h-[2px] md:hidden flex bg-border rounded-full mt-6 mb-2"></div>
        <h4 className="text-center md:hidden flex text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold cursor-pointer text-primary"
          >
            Login
          </Link>{" "}
        </h4>
      </div>
    </div>
  );
};

export default LoginPage;
