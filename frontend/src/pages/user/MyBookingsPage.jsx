import { FaRegCalendarMinus } from "react-icons/fa";
import { IoIosChatboxes, IoMdCall } from "react-icons/io";
import { MdLocationPin, MdOutlinePlumbing } from "react-icons/md";
import Button from '../../components/common/Button'

const MyBookingsPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-3 p-3">
      {/* left side */}
      <div className="md:w-[50%] shadow-[0_0_30px_rgba(0,0,0,0.38)] rounded p-3">
        <div className="mb-5">
          <ul className="flex gap-3 text-sm font-semibold">
            <li>Incoming</li>
            <li>Upcoming</li>
            <li>Accepted</li>
            <li>Completed</li>
            <li>Pending</li>
          </ul>
        </div>
        <div className="shadow-[0_0_30px_rgba(0,0,0,0.38)] rounded">
          <div className="shadow-[0_0_30px_rgba(0,0,0,0.38)] rounded flex items-center">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[6rem] h-[6rem] rounded-full object-cover 
            "
            />
            <div className="flex items-center justify-between">
              <div>
                <h1>Ashish verma</h1>
                <div className="flex">
                 <div>
                     <div className="flex items-center gap-1">
                    <MdOutlinePlumbing />
                    <p>Plumbing</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdLocationPin /> Delhi
                  </div>
                 </div>
                  <div className="flex items-center gap-1">
                    <FaRegCalendarMinus />
                    <p>May 20 ,2023 - 11:30 PM</p>
                  </div>
                </div>
              </div>
              <h1>₹ 250</h1>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="md:w-[50%] shadow-[0_0_30px_rgba(0,0,0,0.38)] rounded p-3">
        <div>
          <div>
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[6rem] h-[6rem] rounded-full object-cover 
            "
            />
            <h2>Ahish sharma</h2>
            <p>Plumbing Service</p>
          </div>
          <div>
            <Button><IoMdCall /> Call</Button>
            <Button><IoIosChatboxes /> Chat</Button>
          </div>
        </div>
        <div>
            <h1>Booking Info:</h1>
            <div>
               <div>
                 <h3>ID:#1234 </h3>
                <Button>Incoming</Button>
               </div>
               <div>
                <div>
                     <div>
                    <FaRegCalendarMinus />
                    <p>May 20 ,2023 - 11:30 PM</p>
                  </div>
                  <h1>₹ 240</h1>
                </div>
               </div>
            </div>
        </div>
        <div>
            <h1>Update Booking Status</h1>
            <Button>Accept</Button>
            <Button>Reject</Button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
