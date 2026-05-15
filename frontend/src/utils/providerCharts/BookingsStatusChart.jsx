// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const data = [
//   {
//     name: "Confirmed",
//     value: 45,
//     count: 3842,
//     color: "#3B82F6",
//   },
//   {
//     name: "Completed",
//     value: 35,
//     count: 2987,
//     color: "#22C55E",
//   },
//   {
//     name: "Pending",
//     value: 15,
//     count: 1285,
//     color: "#F59E0B",
//   },
//   {
//     name: "Cancelled",
//     value: 5,
//     count: 428,
//     color: "#EF4444",
//   },
// ];

// const AppointmentsStatusChart = () => {
//   return (
//     <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
//       {/* Header */}
//       <h3 className="text-lg font-semibold text-slate-800 mb-8">
//         Appointments by Status
//       </h3>

//       <div className="flex items-center justify-between gap-5">
//         {/* Chart */}
//         <div className="relative w-[220px] h-[220px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={data}
//                 innerRadius={70}
//                 outerRadius={95}
//                 paddingAngle={2}
//                 dataKey="value"
//               >
//                 {data.map((item, index) => (
//                   <Cell key={index} fill={item.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>

//           {/* Center */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <h2 className="text-3xl font-bold text-slate-900">
//               8,542
//             </h2>

//             <p className="text-sm text-slate-500">Total</p>
//           </div>
//         </div>

//         {/* Status */}
//         <div className="space-y-5">
//           {data.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex items-center justify-between gap-10"
//             >
//               <div className="flex items-center gap-3">
//                 <div
//                   className="w-3 h-3 rounded-full"
//                   style={{ backgroundColor: item.color }}
//                 />

//                 <span className="text-sm text-slate-700">
//                   {item.name}
//                 </span>
//               </div>

//               <div className="text-sm text-slate-600">
//                 {item.value}% ({item.count.toLocaleString()})
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppointmentsStatusChart;