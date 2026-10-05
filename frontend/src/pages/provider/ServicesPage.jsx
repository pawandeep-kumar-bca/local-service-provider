
// import Button from "../../components/common/Button";
// import { IoMdAdd } from "react-icons/io";
// import ServicesList from "../../components/provider/ServicesList";
// import { useNavigate } from "react-router-dom";
// import { useGetOwnCategoriesForProvider } from "../../hooks/useCategories";

// const ServicesPage = () => {
//   const navigate = useNavigate();

//   const { data, isPending, isError, error } =
//     useGetOwnCategoriesForProvider();

//   const services = data?.data || [];

//   if (isPending) {
//     return <div className="p-5 text-center">Loading services...</div>;
//   }

//   if (isError) {
//     return (
//       <div className="p-5 text-center text-red-500">
//         {error?.response?.data?.message || "Failed to load services"}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold text-text">
//             My Services
//           </h1>

//           <p className="text-sm md:text-base text-muted mt-1">
//             Manage your services and pricing.
//           </p>
//         </div>

//         <Button
//           color="purple"
//           onClick={() => navigate("/provider/my-services/add-service")}
//           className="shrink-0"
//         >
//           <IoMdAdd size={22} />
//           Add Service
//         </Button>
//       </div>

//       {/* Services List */}
//       {services.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
//           {services.map((service) => (
//             <ServicesList
//               key={service._id}
//               service={service}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center">
//           <h3 className="text-lg font-semibold text-gray-800">
//             No services found
//           </h3>

//           <p className="text-sm text-gray-500 mt-2">
//             Add your first service to get started.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicesPage;
