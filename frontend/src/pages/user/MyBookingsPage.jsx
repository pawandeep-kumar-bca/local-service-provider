import { FaRegCalendarMinus } from "react-icons/fa"
import { MdLocationPin, MdOutlinePlumbing } from "react-icons/md"


const MyBookingsPage = () => {
  return (
    <div>
        {/* left side */}
        <div>
            <div>
                <ul>
                    <li>Incoming</li>
                    <li>Upcoming</li>
                    <li>Accepted</li>
                    <li>Completed</li>
                    <li>Pending</li>
                </ul>
            </div>
            <div>
                <div>
                    <img
            src="/assets/profile.png"
            alt="profile"
            className="w-[6rem] h-[6rem] rounded-full object-cover 
            "
          />
          <div>
            <div>
            <h1>Ashish verma</h1>
            <div><MdOutlinePlumbing
             />
             <div><MdLocationPin /> Delhi</div>
             <div>
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
        <div></div>
    </div>
  )
}

export default MyBookingsPage