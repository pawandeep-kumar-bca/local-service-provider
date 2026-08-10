// import { MdFilterListAlt } from "react-icons/md";
// import { TbSortAscending2Filled } from "react-icons/tb";
// import ProviderSortModel from "../sortComponents.jsx/ProviderSortModel";
// import { useState } from "react";
// import ProviderSortByPrice from "../sortComponents.jsx/ProviderSortByPrice";
// import CategoryFilter from "./CategoryFilter";
// import ProviderFilterModal from "./ProviderFilterModal";

// const ProviderSortBar = ({ filters, setFilters }) => {
//   const [openFilters, setOpenFilters] = useState(false);
//   const [openSorts, setOpenSorts] = useState(false);
//   return (
//     <>
//       <div className="flex gap-4 items-center">
//         <div>
//           <CategoryFilter filters={filters} setFilters={setFilters}/>
//           <ProviderSortByPrice filters={filters} setFilters={setFilters} />
//         </div>
//         <button
//           type="button"
//           onClick={() => setOpenFilters(true)}
//           className="bg-green-500 block md:hidden text-white py-1 px-3 rounded-sm flex items-center gap-1 cursor-pointer"
//         >
//           <TbSortAscending2Filled size={18} />{" "}
//           <span className="font-semibold">Sorts</span>
//         </button>
//         <button
//           type="button"
//           onClick={() => setOpenFilters(true)}
//           className="bg-green-500 text-white py-1 px-3 rounded-sm flex items-center gap-1 cursor-pointer"
//         >
//           <MdFilterListAlt size={18} />{" "}
//           <span className="font-semibold">Filters</span>
//         </button>
//       </div>
//       {openFilters && (
//         <ProviderFilterModal
//           filters={filters}
//           setFilters={setFilters}
//           isClose={() => setOpenFilters(false)}
//         />
//       )}
//       {openSorts && (
//         <ProviderSortModel
//           filters={filters}
//           setFilters={setFilters}
//           isClose={() => setOpenSorts(false)}
//         />
//       )}
//     </>
//   );
// };

// export default ProviderSortBar;
