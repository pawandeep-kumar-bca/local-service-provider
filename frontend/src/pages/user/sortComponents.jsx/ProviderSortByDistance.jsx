// import React from "react";
// import { toggleSortOption } from "../../../utils/sortHelper";
// import { MdArrowDropDown } from "react-icons/md";

// const ProviderSortByDistance = ({ filters, setFilters }) => {
//   const currentValue =
//     filters.sort.find((s) => s.startsWith("distance-")) || "";
//   return (
//     <div className="relative">
//       <select
//         name="distance"
//         id="distance"
//         className="w-full appearance-none outline-none border-2 border-brownness rounded-lg bg-white text-brownness text-sm font-semibold py-2 pl-3 pr-8 cursor-pointer min-w-[130px]
//         "
//         value={currentValue}
//         onChange={(e) => {
//           const value = e.target.value;
//           if (!value) {
//             setFilters((prev) => ({
//               ...prev,
//               sort: prev.sort.filter((s) => s.startsWith("distance-")),
//             }));
//             return;
//           }
//           setFilters((prev) => ({
//             ...prev,
//             sort: toggleSortOption(prev.sort, value),
//           }));
//         }}
//       >
//         <option value="">All Distance</option>
//         <option value="distance-near">Nearest First</option>
//         <option value="distance-far">Farthest First</option>
//       </select>
//       <MdArrowDropDown
//         className="
//                   pointer-events-none
//                   absolute
//                   top-1/2
//                   right-2
//                   -translate-y-1/2
//                   text-xl
//                   text-brownness
//                 "
//       />
//     </div>
//   );
// };

// export default ProviderSortByDistance;
