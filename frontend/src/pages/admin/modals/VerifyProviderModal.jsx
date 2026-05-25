import { MdOutlineVerifiedUser, MdVerifiedUser } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Button from "../../../components/common/Button";
import StatusBudge from "../../../components/common/StatusBadge";
const VerifyProviderModal = ({ close }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 z-[999] backdrop-blur-sm flex items-center justify-center "
      onClick={close}
    >
      <div className="w-full max-w-lg bg-white px-5 py-4 shadow-[0_0_10px_rgba(0,0,0,0.20)] rounded-xl " onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center ">
              <MdOutlineVerifiedUser size={26} />
            </div>
            <h1 className="text-2xl font-bold ">Verify Provider</h1>
          </div>
          <button
            onClick={close}
            className="p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        <div className="flex gap-3 mt-4 items-center">
          <img
            src="https://randomuser.me/api/portraits/women/34.jpg"
            alt="profile image"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <div className="flex gap-2 items-center">
              <h4 className="text-lg font-semibold">Aman Kumar </h4>
              <span className="bg-gray-100 rounded-lg py-1 text-xs px-3 text-gray-500">
                #PRO3434
              </span>
            </div>
            <div className="flex gap-2 items-center mt-1">
             <StatusBudge category="cleaning" className="font-normal"/>
              <p className="text-sm text-muted">aman@example.com</p>
            </div>
            <p className="text-sm text-muted mt-1">+91 98543 24321</p>
          </div>
        </div>
        <div className="px-4 py-3 mt-4 rounded-lg bg-green-50 flex items-center gap-3 ">
          <MdVerifiedUser size={24} className="text-green-500" />
          <div>
            <h4 className="text-green-900 font-semibold">
              Verification helps users trust this provider.
            </h4>
            <p className="text-sm text-green-700 mt-[0.4]">
              Please review the details and documents before verifying.
            </p>
          </div>
        </div>
        <div className="mt-3">
          <h4 className="text-lg font-bold ">Verification Status</h4>

          <div className="flex gap-2 mt-3">
            <input type="radio" name="status"  id="verifyProvider" className="accent-green-400" defaultChecked={true}/>
            <div>
              <label htmlFor="verifyProvider" className=" cursor-pointer">
                <p className="text-sm font-semibold">Verify Provider</p>
                 <p className="text-sm text-muted">
                Mark this provider as verified and active.
              </p>
              </label>
             
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <input type="radio" name="status" id="pendingProvider" className="accent-green-400"/>
            <div>
              <label
                htmlFor="pendingProvider"
                className="cursor-pointer"
              >
                <p className="text-sm font-semibold">keep as Pending</p>
                <p className="text-sm text-muted">
                Keep the provider in pending state.
              </p>
              </label>
              
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <input type="radio" name="status" id="rejectProvider" className="accent-green-400 border-green-500"/>
            
            <div>
              <label htmlFor="rejectProvider" className="cursor-pointer" >
                <p className="text-sm font-semibold">Reject Provider</p>
                 <p className="text-sm text-muted">
                Reject this provider verification.
              </p>
              </label>
             
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <label
            htmlFor="adminNote"
            className="text-sm font-semibold inline-block mb-1"
          >
            Admin Note (Optional)
          </label>
          <textarea
            name="adminNote"
            id="adminNote"
            placeholder="Add a note about this verification..."
            className="text-sm resize-none p-2 text-muted focus:ring focus:ring-green-500 focus:outline-none border border-muted rounded-lg selected:ring-green-500 mt-3"
          ></textarea>
        </div>

        <div className="flex gap-3 justify-end mt-5 mb-2">
          <Button color="white" onClick={close}>Cancel</Button>
          <Button color="success">Confirm Verification</Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyProviderModal;
