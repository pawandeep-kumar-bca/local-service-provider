// import React from "react";
// import { toggleSortOption } from "../../../utils/sortHelper";
// import { MdArrowDropDown } from "react-icons/md";

// const ProviderSortByExperience = ({ filters, setFilters }) => {
//   const currentValue =
//     filters.sort.find((s) => s.startsWith("experience-")) || "";
//   return (
//     <div className="relative">
//       <select
//         name="experience"
//         id="experience"
//         className="w-full appearance-none outline-none border-2 border-brownness rounded-lg bg-white text-brownness text-sm font-semibold py-2 pl-3 pr-8 cursor-pointer min-w-[130px]
//         "
//         value={currentValue}
//         onChange={(e) => {
//           const value = e.target.value;
//           if (!value) {
//             setFilters((prev) => ({
//               ...prev,
//               sort: prev.sort.filter((s) => !s.startsWith("experience-")),
//             }));
//             return;
//           }
//           setFilters((prev) => ({
//             ...prev,
//             sort: toggleSortOption(prev.sort, value),
//           }));
//         }}
//       >
//         <option value="">All Experience</option>
//         <option value="experience-high">High to Low</option>
//         <option value="experience-low"> Low to High</option>
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

// export default ProviderSortByExperience;
