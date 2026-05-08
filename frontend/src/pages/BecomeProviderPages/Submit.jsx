
import StatusBadge from "../../components/common/StatusBadge";
import { IoPaperPlane } from "react-icons/io5";
import { HiDocumentCheck } from "react-icons/hi2";

const Submit = () => {
  return (
    <div>
      <div className="text-center">
        <div className="relative w-[8rem] mx-auto">
          <HiDocumentCheck size={120} className="text-primary/80" />
          <IoPaperPlane size={50} className="text-green-400 absolute bottom-0 right-0" />
        </div>
        <h1 className="text-2xl font-semibold text-text mt-7">Application Submitted!</h1>
        <h3 className="text-text font-semibold my-2 text-sm">Review usually takes 24–48 hours.</h3>
        <p className="text-lg md:w-[60%] md:mx-auto text-muted font-extralight mt-2">
          Your provider application has been submitted successfully. We will
          review your details and documents.
        </p>
      </div>
      <div className="p-3 border rounded-md mt-4 md:w-[50%] mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-text">Status</h3>
          <StatusBadge badge="pending" />
        </div>
        <p className="text-sm text-muted font-semibold mt-3">You will be notified once your application is reviewed.</p>
      </div>
    </div>
  );
};

export default Submit;
