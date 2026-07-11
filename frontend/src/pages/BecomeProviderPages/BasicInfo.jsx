// import React, { useState } from "react";
// import Input from "../../components/common/Input";
// import Button from "../../components/common/Button";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { useCreateProviders } from "../../hooks/useProvider";
// import { useCategories } from "../../hooks/useCategories";
// import { useStates } from "../../hooks/useStates";
// const BasicInfo = () => {
//   const [cityOpen, setCityOpen] = useState(false);
//   const [serviceOpen, setServiceOpen] = useState(false);
//   const [stateOpen, setStateOpen] = useState(false);
//   const [districtOpen, setDistrictOpen] = useState(false);
//   const { createProviderMutation } = useCreateProviders();

//   const { data, isLoading } = useCategories();
//   const [providerName, setProviderName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [experience, setExperience] = useState("");
//   const [price, setPrice] = useState("");
//   const [serviceCategory, setServiceCategory] = useState("");
//   const [state, setState] = useState("");
//   const [district, setDistrict] = useState("");
//   const [city, setCity] = useState("");
//   const [village, setVillage] = useState("");

//   const submitForm = (e) => {
//     e.preventDefault();
//     createProviderMutation.mutate({
//       providerName,
//       phoneNumber,
//       experience,
//       price,
//       state,
//       district,
//       city,
//       village,
//       serviceCategory,
//     });
//     setProviderName("");
//     setCity("");
//     setPhoneNumber("");
//     setExperience("");
//     setPrice("");
//     setState("");
//     setDistrict("");
//     setVillage("");
//     setServiceCategory("");
//   };

//   const categories = data?.categories;

//   const { data: getState } = useStates();
//   const states = getState?.allStates;

//   return (
//     <div>
//       <h1 className="text-xl font-semibold text-text mt-2 mb-5">
//         Basic Information
//       </h1>
//       <div>
//         <form onSubmit={submitForm}>
//           <div className="flex flex-col md:flex-row md:gap-5">
//             <Input
//               label="Provider Name"
//               id="providerName"
//               placeholder="Enter your name"
//               type="text"
//               value={providerName}
//               onChange={(e) => setProviderName(e.target.value)}
//               required
//             />
//             <Input
//               label="Phone Number"
//               id="phoneNumber"
//               placeholder="Enter phone number"
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex flex-col md:flex-row md:gap-5">
//             <Input
//               label="Experience (Years)"
//               id="experience"
//               placeholder="e.g.3"
//               type="number"
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               required
//               min="0"
//             />
//             <Input
//               label="Price (Per Hour)"
//               id="price"
//               placeholder="e.g. 500"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               required
//               min="0"
//             />
//           </div>

//           <div className="flex flex-col md:flex-row md:gap-5 items-center mb-3">
//             {/* Service Category */}
//             <div className="flex flex-col w-full relative">
//               <label
//                 htmlFor="serviceCategory"
//                 className="block mb-2 font-medium text-lg md:text-sm text-text"
//               >
//                 Service Category <span className="text-red-500">*</span>
//               </label>

//               <select
//                 name="serviceCategory"
//                 id="serviceCategory"
//                 value={serviceCategory}
//                 onChange={(e) => setServiceCategory(e.target.value)}
//                 className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
//       "
//                 onClick={() => setServiceOpen((prev) => !prev)}
//               >
//                 <option value="" disabled className="bg-muted text-white">
//                   Select Service
//                 </option>
//                 {isLoading ? <option>Loading...</option> : ""}
//                 {categories?.map((category) => (
//                   <option key={category._id} value={category._id}>
//                     {" "}
//                     {category.name.charAt(0).toUpperCase() +
//                       category.name.slice(1)}
//                   </option>
//                 ))}
//               </select>

//               {/* custom arrow */}
//               {serviceOpen ? (
//                 <IoIosArrowDown
//                   className="absolute right-2 top-[42px] text-muted pointer-events-none"
//                   size={22}
//                 />
//               ) : (
//                 <IoIosArrowUp
//                   className="absolute right-2 top-[42px]  text-muted pointer-events-none"
//                   size={22}
//                 />
//               )}
//             </div>
//             {/* State */}

//             <div className="flex flex-col w-full relative">
//               <label
//                 htmlFor="state"
//                 className="block mb-2 font-medium text-lg md:text-sm text-text"
//               >
//                 State <span className="text-red-500">*</span>
//               </label>

//               <select
//                 name="state"
//                 id="state"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
//       "
//                 onClick={() => setStateOpen((prev) => !prev)}
//               >
//                 <option value="" disabled className="bg-muted text-white">
//                   Select City
//                 </option>

//                 {states?.map((state) => (
//                   <option key={state._id} value={state._id}>
//                     {state.name.charAt(0).toUpperCase() + state.name.slice(1)}
//                   </option>
//                 ))}
//               </select>

//               {/* custom arrow */}

//               {stateOpen ? (
//                 <IoIosArrowDown
//                   className="absolute right-2 top-[42px] text-muted pointer-events-none"
//                   size={22}
//                 />
//               ) : (
//                 <IoIosArrowUp
//                   className="absolute right-2 top-[42px]  text-muted pointer-events-none"
//                   size={22}
//                 />
//               )}
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row md:gap-5 items-center">
//             {/* district */}
//             <div className="flex flex-col w-full relative">
//               <label
//                 htmlFor="district"
//                 className="block mb-2 font-medium text-lg md:text-sm text-text"
//               >
//                 District <span className="text-red-500">*</span>
//               </label>

//               <select
//                 name="district"
//                 id="district"
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
//       "
//                 onClick={() => setDistrictOpen((prev) => !prev)}
//               >
//                 <option value="" disabled className="bg-muted text-white">
//                   Select Service
//                 </option>

//                 <option value="mistry">Mistry</option>

//                 <option value="painter">Painter</option>

//                 <option value="electrician">Electrician</option>
//               </select>

//               {/* custom arrow */}
//               {districtOpen ? (
//                 <IoIosArrowDown
//                   className="absolute right-2 top-[42px] text-muted pointer-events-none"
//                   size={22}
//                 />
//               ) : (
//                 <IoIosArrowUp
//                   className="absolute right-2 top-[42px]  text-muted pointer-events-none"
//                   size={22}
//                 />
//               )}
//             </div>
//             {/* City */}

//             <div className="flex flex-col w-full relative">
//               <label
//                 htmlFor="city"
//                 className="block mb-2 font-medium text-lg md:text-sm text-text"
//               >
//                 City <span className="text-red-500">*</span>
//               </label>

//               <select
//                 name="city"
//                 id="city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
//       "
//                 onClick={() => setCityOpen((prev) => !prev)}
//               >
//                 <option value="" disabled className="bg-muted text-white">
//                   Select City
//                 </option>

//                 <option value="sultanganj">Sultanganj</option>

//                 <option value="bhagalpur">Bhagalpur</option>

//                 <option value="mungar">Mungar</option>
//               </select>

//               {/* custom arrow */}

//               {cityOpen ? (
//                 <IoIosArrowDown
//                   className="absolute right-2 top-[42px] text-muted pointer-events-none"
//                   size={22}
//                 />
//               ) : (
//                 <IoIosArrowUp
//                   className="absolute right-2 top-[42px]  text-muted pointer-events-none"
//                   size={22}
//                 />
//               )}
//             </div>
//           </div>
//           <div className="mt-3 ">
//             <div>
//               <label
//                 htmlFor="Village"
//                 className="block mb-2 font-medium text-lg md:text-sm text-text"
//               >
//                 Village <span className="text-red-500">*</span>
//               </label>

//               <div
//                 className="
//       relative
//       border
//       rounded-lg
//       bg-white
//       transition-all duration-300
//       focus-within:border-primary
//       focus-within:ring-2
//       focus-within:ring-primary/30
//     "
//               >
//                 <input
//                   type="text"
//                   id="Village"
//                   value={village}
//                   onChange={(e) => setVillage(e.target.value)}
//                   placeholder="Select your Village on map"
//                   className="
//         w-full
//         px-3
//         py-3
//         pr-36
//         rounded-lg
//         outline-none
//         border-0
//         bg-transparent
//       "
//                 />

//                 <div className="absolute right-1 top-1">
//                   <Button color="blue">Select Location</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BasicInfo;
