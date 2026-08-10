// import React from "react";

// const ProviderSortByPrice = ({ filters, setFilters }) => {
//   const selectedPrice =
//     filters.sort?.find(
//       (item) =>
//         item === "price-high" ||
//         item === "price-low"
//     ) || "";

//   const handlePriceSort = (e) => {
//     const value = e.target.value;

//     setFilters((prev) => {
//       const otherSorts = (prev.sort || []).filter(
//         (item) =>
//           item !== "price-high" &&
//           item !== "price-low"
//       );

//       return {
//         ...prev,
//         sort: value
//           ? [...otherSorts, value]
//           : otherSorts,
//       };
//     });
//   };

//   return (
//     <select
//       value={selectedPrice}
//       onChange={handlePriceSort}
//       name="price"
//       id="price"
//     >
//       <option value="">All Price</option>
//       <option value="price-high">High to Low</option>
//       <option value="price-low">Low to High</option>
//     </select>
//   );
// };

// export default ProviderSortByPrice;