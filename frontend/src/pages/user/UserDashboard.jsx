
const UserDashboard = () => {
  return (
    <div className="w-full h-full my-5 px-3">
      <div
        className="w-[100%] p-6 rounded-2xl 
  bg-[#3B82F6]
  shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex justify-between items-start"
      >
        <div>
          <h1 className="text-bg font-bold text-2xl pb-1">Hi, shivam </h1>
          <p className="text-bg text-lg font-medium md:font-normal">
            Welcome to your dashboard
          </p>
          
        </div>
        <img src="/assets/project.png" alt="image" className="w-[15%] hidden md:block"/>
      </div>
     <div>
        <div className="w-[20%] shadow-[0_0_15px_rgba(0,0,0,0.45)] p-5 rounded-lg mt-6">

     </div>
     </div>
    </div>
  );
};

export default UserDashboard;
