import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";

const CustomDatePicker = ({ filters, setFilters }) => {
  return (
    <div className="relative">
      <DatePicker
        value={filters.date}
        onChange={(date) => {
          setFilters((prev) => ({
            ...prev,
            date: date.toISOString().split("T")[0],
          }));
        }}
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
      <CiCalendar className="absolute right-2 top-3 text-lg text-slate-500 cursor-pointer" />
    </div>
  );
};

export default CustomDatePicker;
