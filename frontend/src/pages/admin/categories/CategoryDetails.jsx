import React from "react";
import {
  FaTools,
  FaUsers,
  FaBriefcase,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaArrowLeft,
} from "react-icons/fa";
import Button from "../../../components/common/Button";

const services = [
  {
    name: "Pipe Installation",
    providers: 25,
    bookings: 150,
  },
  {
    name: "Leak Detection",
    providers: 18,
    bookings: 120,
  },
  {
    name: "Tap Repair",
    providers: 22,
    bookings: 95,
  },
  {
    name: "Bathroom Fitting",
    providers: 30,
    bookings: 210,
  },
];

const CategoryDetails = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Category Details
          </h1>
          <p className="text-slate-500">
            Manage category information and services
          </p>
        </div>

        <div className="flex gap-3">
          <Button color="white">
            <FaArrowLeft />
            Back
          </Button>

          <Button color="purple">
            <FaEdit />
            Edit
          </Button>

          <Button color="danger">
            <FaTrash />
            Delete
          </Button>
        </div>
      </div>

      {/* Hero Card */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 rounded-3xl p-8 text-white shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center">
            <FaTools className="text-5xl" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h2 className="text-4xl font-bold">
                Plumbing
              </h2>

              <span className="px-3 py-1 rounded-full bg-white/20 text-sm">
                Active
              </span>

              <span className="px-3 py-1 rounded-full bg-white/20 text-sm">
                Featured
              </span>
            </div>

            <p className="text-white/90 max-w-3xl leading-7">
              Professional plumbing services including pipe installation,
              leakage fixing, water tank maintenance, bathroom fittings
              and emergency repair solutions.
            </p>

            
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        {/* Description */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Description
          </h3>

          <p className="text-slate-600 leading-8">
            This category includes all plumbing-related services
            such as installation, maintenance, leak fixing,
            bathroom fittings, water supply systems and repair
            work. Customers can easily find trusted providers
            and book services online.
          </p>
        </div>

        {/* Services */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-slate-800">
              Services
            </h3>

            <button className="text-indigo-600 font-medium hover:text-indigo-700">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 font-semibold text-slate-700">
                    Service Name
                  </th>

                  <th className="text-left py-4 font-semibold text-slate-700">
                    Providers
                  </th>

                  <th className="text-left py-4 font-semibold text-slate-700">
                    Bookings
                  </th>
                </tr>
              </thead>

              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 hover:bg-slate-50 transition"
                  >
                    <td className="py-4 font-medium text-slate-700">
                      {service.name}
                    </td>

                    <td className="text-slate-600">
                      {service.providers}
                    </td>

                    <td>
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                        {service.bookings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;