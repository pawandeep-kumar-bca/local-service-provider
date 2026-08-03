import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";

const CustomDatePicker = ({ filters, setFilters, placeHolder }) => {
  return (
    <div className="relative w-full">
      <DatePicker
      wrapperClassName="w-full"
        selected={filters.date ? new Date(filters.date) : null}
        onChange={(date) =>
          setFilters((prev) => ({
            ...prev,
            date: date.toISOString().split("T")[0],
          }))
        }
        placeholderText={placeHolder}
        dateFormat="dd/MM/yyyy"
        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none"
      />
      <CiCalendar className="absolute right-3 top-3 text-lg text-slate-500 pointer-events-none" />
    </div>
  );
};

export default CustomDatePicker;
