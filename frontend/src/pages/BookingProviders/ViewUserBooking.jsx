import ViewProviderBookingDetails from "./ViewProviderBookingDetails";
import Button from "../../components/common/Button";
import { useState } from "react";
import CancelConfirmedBooking from "./CancelConfirmedBooking";


const ViewUserBooking = () => {
  const [cancel, setCancel] = useState(false);
  return (
    <>
      <div className="md:shadow-[inset_0_0_4px_rgba(0,0,0,0.54)] rounded-xl md:p-4 min-h-[calc(100vh-110px)] overflow-hidden">
        <ViewProviderBookingDetails layout="row" />

        <div className="flex md:flex-row flex-col md:w-[60%] mx-auto items-center md:gap-3 md:mt-4">
          <div className="flex gap-3 mt-5 mb-4 w-full md:flex-2">
            <Button color="blue" fullWidth>
              Chat with Provider
            </Button>
            <Button fullWidth color="success">
              Call Provider
            </Button>
          </div>
          <div className="w-full md:flex-1">
            <Button color="danger" fullWidth onClick={() => setCancel(true)}>
              Cancel Booking
            </Button>
          </div>
        </div>
      </div>
      {cancel && <CancelConfirmedBooking/>}
    </>
  );
};

export default ViewUserBooking;
