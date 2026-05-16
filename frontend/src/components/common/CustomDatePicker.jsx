import { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";

const CustomDatePicker = () => {

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Search by joined date..."
        dateFormat="dd/MM/yyyy"
        className="
          w-full
          border border-slate-300
          rounded-lg
          px-4 py-2
          outline-none
        "
      />
    <CiCalendar  className="absolute right-2 top-3 text-lg text-slate-500 cursor-pointer"/>
    </div>
  );
};

export default CustomDatePicker;