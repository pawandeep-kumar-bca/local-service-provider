// import React from "react";
// import { useCategoriesTabs } from "../../../hooks/useCategories";
// import { IoGrid } from "react-icons/io5";

// const CategoryFilter = ({ filters, setFilters }) => {
//   const { data } = useCategoriesTabs();
//   const categories = data?.categories;

//   return (
//     <select
//       name="categories"
//       id="category"
//       value={filters.categoryId}
//       onChange={(e) =>
//         setFilters((prev) => ({
//           ...prev,
//           categoryId: e.target.value,
//         }))
//       }
//       className="border-2 border-brownness px-3 py-2 rounded-lg text-sm text-brownness font-semibold outline-0 "
//     >
//       <option value="">All Categories</option>
//       {categories?.map((category) => (
//         <option key={category._id} value={category._id}>
//           {category.name}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default CategoryFilter;
