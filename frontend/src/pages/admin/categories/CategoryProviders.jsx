import React from "react";
import {
  FaSearch,
  FaEllipsisV,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";

const CategoryProviders = () => {
  const providers = [
    {
      id: 1,
      name: "John Doe",
      role: "Plumbing Expert",
      experience: "5 Years",
      rating: 4.8,
      status: "Active",
      joinedDate: "May 12, 2024",
    },
    {
      id: 2,
      name: "Mike Smith",
      role: "Pipe Specialist",
      experience: "7 Years",
      rating: 4.6,
      status: "Active",
      joinedDate: "May 13, 2024",
    },
    {
      id: 3,
      name: "Robert Brown",
      role: "Leak Detection Expert",
      experience: "3 Years",
      rating: 4.5,
      status: "Active",
      joinedDate: "May 14, 2024",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Plumbing Technician",
      experience: "6 Years",
      rating: 4.7,
      status: "Inactive",
      joinedDate: "May 15, 2024",
    },
    {
      id: 5,
      name: "William Clark",
      role: "Drain Cleaning Expert",
      experience: "4 Years",
      rating: 4.3,
      status: "Active",
      joinedDate: "May 16, 2024",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Plumbing Providers
        </h1>

        <p className="text-slate-500 mt-1">
          Manage all providers under plumbing category
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
        {/* Filters */}
        <div className="p-6 border-b border-slate-100">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search by providers..."
                className="w-full border border-slate-300 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Status */}
            <select className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            {/* Sort */}
            <select className="border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500">
              <option>Sort By</option>
              <option>Highest Rating</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-6 py-4 font-semibold text-slate-700">
                  Provider
                </th>

                <th className="text-left px-6 py-4 font-semibold text-slate-700">
                  Experience
                </th>

                <th className="text-left px-6 py-4 font-semibold text-slate-700">
                  Rating
                </th>

                <th className="text-left px-6 py-4 font-semibold text-slate-700">
                  Status
                </th>

                <th className="text-left px-6 py-4 font-semibold text-slate-700">
                  Joined Date
                </th>

                <th className="text-center px-6 py-4 font-semibold text-slate-700">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {providers.map((provider) => (
                <tr
                  key={provider.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition"
                >
                  {/* Provider */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                        <FaUserCircle className="text-2xl text-indigo-600" />
                      </div>

                      <div>
                        <h4 className="font-medium text-slate-800">
                          {provider.name}
                        </h4>

                        <p className="text-sm text-slate-500">
                          {provider.role}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Experience */}
                  <td className="px-6 py-5 text-slate-600">
                    {provider.experience}
                  </td>

                  {/* Rating */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      <span className="font-medium">
                        {provider.rating}
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        provider.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {provider.status}
                    </span>
                  </td>

                  {/* Joined Date */}
                  <td className="px-6 py-5 text-slate-600">
                    <div>
                      <p>{provider.joinedDate}</p>
                      <p className="text-xs text-slate-400">
                        10:20 AM
                      </p>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-5 text-center">
                    <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center mx-auto hover:bg-slate-100 transition">
                      <FaEllipsisV className="text-slate-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            Showing 1 to 5 of 20 entries
          </p>

          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50">
              ←
            </button>

            <button className="w-10 h-10 rounded-xl bg-indigo-600 text-white">
              1
            </button>

            <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50">
              2
            </button>

            <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50">
              3
            </button>

            <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50">
              4
            </button>

            <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-50">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProviders;