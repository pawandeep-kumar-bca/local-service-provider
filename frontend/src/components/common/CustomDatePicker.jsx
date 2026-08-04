import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";

const CustomDatePicker = ({ filters, setFilters, placeHolder }) => {
  // Convert stored string (yyyy-MM-dd) to Date object
  const selectedDate = filters.date
    ? new Date(`${filters.date}T00:00:00`)
    : null;

  return (
    <div className="relative w-full">
      <DatePicker
        wrapperClassName="w-full"
        selected={selectedDate}
        onChange={(date) => {
          if (!date) {
            setFilters((prev) => ({
              ...prev,
              date: "",
            }));
            return;
          }

          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");

          setFilters((prev) => ({
            ...prev,
            date: `${year}-${month}-${day}`, // yyyy-MM-dd
          }));
        }}
        placeholderText={placeHolder}
        dateFormat="dd/MM/yyyy"
        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none"
      />

      <CiCalendar className="absolute right-3 top-3 text-lg text-slate-500 pointer-events-none" />
    </div>
  );
};

export default CustomDatePicker;