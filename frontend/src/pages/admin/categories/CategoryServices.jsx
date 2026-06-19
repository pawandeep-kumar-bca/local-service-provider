import React from "react";
import {
  FaPlus,
  FaSearch,
  FaEllipsisV,
} from "react-icons/fa";
import Button from "../../../components/common/Button";

const services = [
  {
    id: 1,
    name: "Pipe Installation",
    slug: "pipe-installation",
    providers: 25,
    status: "Active",
    createdAt: "May 12, 2024",
  },
  {
    id: 2,
    name: "Leak Detection",
    slug: "leak-detection",
    providers: 18,
    status: "Active",
    createdAt: "May 13, 2024",
  },
  {
    id: 3,
    name: "Tap Repair",
    slug: "tap-repair",
    providers: 22,
    status: "Active",
    createdAt: "May 14, 2024",
  },
  {
    id: 4,
    name: "Water Tank Cleaning",
    slug: "water-tank-cleaning",
    providers: 30,
    status: "Hidden",
    createdAt: "May 15, 2024",
  },
  {
    id: 5,
    name: "Drain Cleaning",
    slug: "drain-cleaning",
    providers: 15,
    status: "Active",
    createdAt: "May 16, 2024",
  },
];

const CategoryServices = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          

          <h1 className="text-3xl font-bold text-slate-800 mt-2">
            Plumbing Services
          </h1>
        </div>

        <Button color="purple">
          <FaPlus />
          Add Service
        </Button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200">
        {/* Filters */}
        <div className="p-6 border-b border-slate-100">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-4 text-slate-400" />

              <input
                type="text"
                placeholder="Search services..."
                className="w-full border border-slate-300 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Status */}
            <select className="border border-slate-300 rounded-xl px-4 py-3">
              <option>All Status</option>
              <option>Active</option>
              <option>Hidden</option>
            </select>

            {/* Sort */}
            <select className="border border-slate-300 rounded-xl px-4 py-3">
              <option>Sort By</option>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-6 py-4">
                  Service Name
                </th>

                <th className="text-left px-6 py-4">
                  Slug
                </th>

                <th className="text-left px-6 py-4">
                  Providers
                </th>

                <th className="text-left px-6 py-4">
                  Status
                </th>

                <th className="text-left px-6 py-4">
                  Created Date
                </th>

                <th className="text-center px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {services.map((service) => (
                <tr
                  key={service.id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-6 py-5 font-medium text-slate-700">
                    {service.name}
                  </td>

                  <td className="px-6 py-5 text-slate-500">
                    {service.slug}
                  </td>

                  <td className="px-6 py-5">
                    {service.providers}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {service.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-slate-600">
                    {service.createdAt}
                  </td>

                  <td className="px-6 py-5 text-center">
                    <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center mx-auto hover:bg-slate-100">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-6 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing 1 to 5 of 10 entries
          </p>

          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl border">
              1
            </button>

            <button className="w-10 h-10 rounded-xl border">
              2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryServices;