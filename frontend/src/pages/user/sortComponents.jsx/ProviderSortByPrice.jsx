import { MdArrowDropDown } from "react-icons/md";
import { toggleSortOption } from "../../../utils/sortHelper";

const ProviderSortByPrice = ({ filters, setFilters }) => {
  const currentValue = filters.sort.find((s) => s.startsWith("price-")) || "";

  return (
    <div className="relative">
      <select
        value={currentValue}
        onChange={(e) => {
          const value = e.target.value;
          if (!value) {
            // "All Price" select karne pe price wala option hata do
            setFilters((prev) => ({
              ...prev,
              sort: prev.sort.filter((s) => !s.startsWith("price-")),
            }));
            return;
          }
          setFilters((prev) => ({
            ...prev,
            sort: toggleSortOption(prev.sort, value),
          }));
        }}
        className="w-full appearance-none outline-none border-2 border-brownness rounded-lg bg-white text-brownness text-sm font-semibold py-2 pl-3 pr-8 cursor-pointer min-w-[130px]
        "
        name="price"
        id="price"
      >
        <option value="">All Price</option>
        <option value="price-high">High to Low</option>
        <option value="price-low">Low to High</option>
      </select>
      <MdArrowDropDown
        className="
                  pointer-events-none
                  absolute
                  top-1/2
                  right-2
                  -translate-y-1/2
                  text-xl
                  text-brownness
                "
      />
    </div>
  );
};

export default ProviderSortByPrice;
