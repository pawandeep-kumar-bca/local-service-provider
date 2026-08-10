// import React from "react";

// const ExperienceFilter = ({ filters, setFilters }) => {
//   const experience = ["1", "3", "5", "7", "10", "15"];

//   return (
//     <select
//       name="experience"
//       id="experience"
//       value={filters.experience}
//       onChange={(e) =>
//         setFilters((prev) => ({
//           ...prev,
//           experience: e.target.value,
//         }))
//       }
//       className="border-2 border-brownness px-3 py-2 rounded-lg text-sm text-brownness font-semibold outline-none"
//     >
//       <option value="">Any Experience</option>

//       {experience.map((exp) => (
//         <option key={exp} value={exp}>
//           {exp}+ Years
//         </option>
//       ))}
//     </select>
//   );
// };

// export default ExperienceFilter;
