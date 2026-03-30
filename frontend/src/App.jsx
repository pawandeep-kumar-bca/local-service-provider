import { useState } from "react";
import Modal from "./components/common/Modal";
const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex bg-red">
      <div className="relative">
        <h1>hello bcchoo loredm</h1>
        <button onClick={() => setOpen(true)}>Open Modal</button>

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Cancel Booking"
          onConfirm={() => {
            console.log("Confirmed");
            setOpen(false);
          }}
        >
          Are you sure you want to cancel this booking?
        </Modal>
      </div>
    </div>
  );
};

export default App;
