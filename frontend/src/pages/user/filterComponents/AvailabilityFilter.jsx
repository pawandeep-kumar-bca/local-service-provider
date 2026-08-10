// const AvailabilityFilter = ({ filters, setFilters }) => {
//   return (
//     <div className="space-y-2">
//       <div className="flex items-center justify-between">
//         <label className="flex items-center gap-2">
//           <input
//             type="radio"
//             name="availability"
//             value=""
//             checked={filters.availability === ""}
//             onChange={(e) =>
//               setFilters((prev) => ({
//                 ...prev,
//                 availability: e.target.value,
//               }))
//             }
//           />

//           <span className="text-sm font-semibold text-grayness">
//             All
//           </span>
//         </label>
//       </div>

//       <div className="flex items-center justify-between">
//         <label className="flex items-center gap-2">
//           <input
//             type="radio"
//             name="availability"
//             value="true"
//             checked={filters.availability === "true"}
//             onChange={(e) =>
//               setFilters((prev) => ({
//                 ...prev,
//                 availability: e.target.value,
//               }))
//             }
//           />

//           <span className="text-sm font-semibold text-grayness">
//             Available Now
//           </span>
//         </label>
//       </div>

//       <div className="flex items-center justify-between">
//         <label className="flex items-center gap-2">
//           <input
//             type="radio"
//             name="availability"
//             value="false"
//             checked={filters.availability === "false"}
//             onChange={(e) =>
//               setFilters((prev) => ({
//                 ...prev,
//                 availability: e.target.value,
//               }))
//             }
//           />

//           <span className="text-sm font-semibold text-grayness">
//             Not Available
//           </span>
//         </label>
//       </div>
//     </div>
//   );
// };
// export default AvailabilityFilter;
