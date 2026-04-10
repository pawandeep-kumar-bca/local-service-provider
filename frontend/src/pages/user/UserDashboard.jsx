import { BiBookAdd } from "react-icons/bi";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import Navbar from '../../components/common/NavBar'
const UserDashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full h-full my-5 px-3">
        
      <div
        className="w-[100%] p-6 rounded-2xl 
  bg-[#3B82F6]
  shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex justify-between items-start mt-3"
      >
        <div>
          <h1 className="text-bg font-bold text-2xl pb-1">Hi, shivam </h1>
          <p className="text-bg text-lg font-medium md:font-normal">
            Welcome to your dashboard
          </p>
          
        </div>
        <img src="/assets/man.png" alt="image" className="w-[15%] hidden md:block "/>
      </div>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 mb-6">
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.45)] p-5 rounded-lg  flex items-start gap-3">
        <BiBookAdd className="text-3xl text-danger"/>
        <div className="flex flex-col items-center"><h1 className="text-2xl font-bold">4</h1>
        <h2 className="text-sm font-bold">Total Booking</h2></div>
     </div>
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.45)] p-5 rounded-lg flex items-start gap-6 ">
         <FaCheckCircle className="text-2xl text-success" />
        <div className="flex w-[50%] flex-col items-center"><h1 className="text-2xl font-bold">4</h1>
        <h2 className="text-sm font-bold">Active</h2></div>
     </div>
      <div className="shadow-[0_0_15px_rgba(0,0,0,0.45)] p-5 rounded-lg flex items-start gap-4">
        <FaCheckCircle className="text-2xl text-primary" />
        <div className="flex w-[50%] flex-col items-center"><h1 className="text-2xl font-bold">4</h1>
        <h2 className="text-sm font-bold">Completed</h2></div>
     </div>
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.45)] p-5 rounded-lg flex items-start gap-4">
        <FaStar className="text-2xl text-warning" />
        <div className="flex w-[50%] flex-col items-center"><h1 className="text-2xl font-bold">4</h1>
        <h2 className="text-sm font-bold">Reviewed</h2></div>
     </div>
       
     </div>
    </div>
    </>
  );
};

export default UserDashboard;
