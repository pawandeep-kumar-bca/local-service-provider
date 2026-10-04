
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoIosArrowBack } from "react-icons/io";
// import { MdOutlineCloudUpload } from "react-icons/md";
// import Button from "../../components/common/Button";
// import { useGetCategoriesForProvider } from "../../hooks/useCategories";
// import api from "../../services/api";

// const AddNewService = () => {
//   const navigate = useNavigate();

//   // Fetch categories from API
//   const { data, isLoading } = useGetCategoriesForProvider();
//   const categories = data?.data || [];

//   // Form state
//   const [formData, setFormData] = useState({
//     categoryId: "",
//     experience: "",
//     priceType: "",
//     price: "",
//     description: "",
//     certificate: null,
//   });

//   const [loading, setLoading] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle certificate upload
//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];

//     if (file) {
//       setFormData((prev) => ({
//         ...prev,
//         certificate: file,
//       }));
//     }
//   };

//   // Submit form
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (!formData.categoryId) {
//   //     return alert("Please select a service category");
//   //   }

//   //   if (!formData.certificate) {
//   //     return alert("Please upload your certificate");
//   //   }

//   //   try {
//   //     setLoading(true);

//   //     const payload = new FormData();

//   //     payload.append("categoryId", formData.categoryId);
//   //     payload.append("experience", formData.experience);
//   //     payload.append("priceType", formData.priceType);
//   //     payload.append("price", formData.price);
//   //     payload.append("description", formData.description);
//   //     payload.append("certificate", formData.certificate);

//   //     // Replace this URL with your actual backend route
    

     
  
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="md:shadow-[0_0_20px_rgba(0,0,0,0.10)] md:p-4 rounded-xl"
//       >
//         {/* Header */}
//         <div className="mb-4 flex justify-between">
//           <div>
//             <h1 className="text-xl md:text-2xl font-bold text-text">
//               Select Service
//             </h1>

//             <p className="text-sm md:text-base text-muted mt-1">
//               Choose a service from the list provided by admin.
//             </p>
//           </div>

//           <div>
//             <Button type="button" onClick={() => navigate(-1)}>
//               <IoIosArrowBack />
//               Back
//             </Button>
//           </div>
//         </div>

//         {/* Category Selection */}
//         {isLoading ? (
//           <p className="text-center py-6">Loading categories...</p>
//         ) : categories.length === 0 ? (
//           <p className="text-center py-6 text-muted">
//             No categories available.
//           </p>
//         ) : (
//           <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
//             {categories.map((category) => (
//               <label
//                 key={category._id}
//                 htmlFor={category._id}
//                 className="relative cursor-pointer"
//               >
//                 <input
//                   type="radio"
//                   name="categoryId"
//                   id={category._id}
//                   value={category._id}
//                   checked={formData.categoryId === category._id}
//                   onChange={handleChange}
//                   className="hidden peer"
//                 />

//                 <div
//                   className="border rounded-xl border-gray-200
//                   peer-checked:bg-green-50
//                   peer-checked:border-green-400
//                   hover:border-green-500 hover:bg-green-50
//                   text-center transition-all
//                   peer-checked:scale-[1.02]
//                   duration-300 p-4 flex flex-col
//                   justify-center items-center gap-2
//                   peer-checked:ring-1 peer-checked:ring-green-200"
//                 >
//                   <div
//                     className="md:w-16 md:h-16 h-14 w-14 rounded-full
//                     flex justify-center items-center"
//                     style={{
//                       backgroundColor: category.backgroundColor,
//                     }}
//                   >
//                     <img
//                       src={category.icon?.url}
//                       alt={category.name}
//                       className="w-8 h-8 object-contain"
//                     />
//                   </div>

//                   <h1 className="md:text-lg text-sm font-semibold text-text">
//                     {category.name}
//                   </h1>
//                 </div>
//               </label>
//             ))}
//           </div>
//         )}

//         {/* Pricing & Duration */}
//         <div className="mt-6">
//           <div className="mb-4">
//             <h1 className="text-xl md:text-2xl font-bold text-text">
//               Pricing & Duration
//             </h1>

//             <p className="text-sm md:text-base text-muted mt-1">
//               Set your pricing and experience.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-4">

//             {/* Price */}
//             <div>
//               <label
//                 htmlFor="price"
//                 className="block mb-2 font-medium text-sm"
//               >
//                 Price (₹) <span className="text-red-500">*</span>
//               </label>

//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="Enter service price"
//                 min="1"
//                 required
//                 className="w-full border border-gray-300 px-3 py-2
//                 rounded-md focus:ring focus:ring-blue-200
//                 focus:outline-none"
//               />
//             </div>

//             {/* Price Type */}
//             <div>
//               <label
//                 htmlFor="priceType"
//                 className="block mb-2 font-medium text-sm"
//               >
//                 Price Type <span className="text-red-500">*</span>
//               </label>

//               <select
//                 name="priceType"
//                 id="priceType"
//                 value={formData.priceType}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 px-3 py-2
//                 rounded-md focus:ring focus:ring-blue-200
//                 focus:outline-none bg-white"
//               >
//                 <option value="" disabled>
//                   Select Price Type
//                 </option>

//                 <option value="Fixed Price">Fixed Price</option>
//                 <option value="Hourly">Hourly</option>
//               </select>
//             </div>

//             {/* Experience */}
//             <div>
//               <label
//                 htmlFor="experience"
//                 className="block mb-2 font-medium text-sm"
//               >
//                 Experience (Years){" "}
//                 <span className="text-red-500">*</span>
//               </label>

//               <input
//                 type="number"
//                 id="experience"
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 placeholder="Enter your experience"
//                 min="0"
//                 required
//                 className="w-full border border-gray-300 px-3 py-2
//                 rounded-md focus:ring focus:ring-blue-200
//                 focus:outline-none"
//               />
//             </div>

//           </div>
//         </div>

//         {/* Description */}
//         <div className="mt-5">
//           <label
//             htmlFor="description"
//             className="block mb-2 font-medium text-sm"
//           >
//             Service Description
//           </label>

//           <textarea
//             name="description"
//             id="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="4"
//             placeholder="Describe your service and expertise..."
//             className="w-full border border-gray-300 px-3 py-2
//             rounded-md focus:ring focus:ring-blue-200
//             focus:outline-none resize-none"
//           />
//         </div>

//         {/* Certificate Upload */}
//         <div className="mt-5">
//           <label className="block mb-2 font-medium text-sm">
//             Upload Certificate{" "}
//             <span className="text-red-500">*</span>
//           </label>

//           <label
//             htmlFor="certificate"
//             className="flex flex-col items-center justify-center
//             border-2 border-dashed border-gray-300 rounded-xl
//             p-6 cursor-pointer hover:border-green-500
//             hover:bg-green-50 transition"
//           >
//             <MdOutlineCloudUpload
//               size={35}
//               className="text-gray-500"
//             />

//             <p className="font-medium text-sm mt-2">
//               {formData.certificate
//                 ? formData.certificate.name
//                 : "Click to upload certificate"}
//             </p>

//             <p className="text-xs text-muted mt-1">
//               Upload your service-related certificate
//             </p>

//             <input
//               type="file"
//               id="certificate"
//               name="certificate"
//               accept=".pdf,.jpg,.jpeg,.png"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </label>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col md:flex-row justify-end gap-3 my-5">
//           <Button
//             type="button"
//             color="white"
//             className="w-full md:w-fit md:px-10"
//             onClick={() => navigate(-1)}
//           >
//             Cancel
//           </Button>

//           <Button
//             type="submit"
//             disabled={loading || isLoading}
//             className="w-full md:w-fit md:px-10"
//           >
//             {loading ? "Saving..." : "Save Service"}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddNewService;
