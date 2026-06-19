import React from "react";
import {
  FaArrowLeft,
  FaPlus,
  FaImage,
  FaLightbulb,
} from "react-icons/fa";
import Button from "../../../components/common/Button";

const AddCategory = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Add New Category
          </h1>
          <p className="text-slate-500">
            Create a new service category for your platform
          </p>
        </div>

        <div className="flex gap-3">
          <Button color="white">
            <FaArrowLeft />
            Back
          </Button>

          <Button color="purple">
            <FaPlus />
            Create Category
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Category Information */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-6">
              Category Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter category name"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Slug *
                </label>

                <input
                  type="text"
                  placeholder="category-slug"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Display Order
                </label>

                <input
                  type="number"
                  placeholder="1"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Status
                </label>

                <select className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium mb-2">
                Description *
              </label>

              <textarea
                rows={5}
                placeholder="Write category description..."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* SEO Information */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-6">
              SEO Information
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Meta Title
                </label>

                <input
                  type="text"
                  placeholder="Enter meta title"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Meta Description
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter meta description"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Category Settings */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-6">
              Category Settings
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between border rounded-2xl p-4">
                <div>
                  <h4 className="font-medium">
                    Active Category
                  </h4>

                  <p className="text-sm text-slate-500">
                    Show this category to users
                  </p>
                </div>

                <input
                  type="checkbox"
                  className="w-5 h-5"
                />
              </div>

              <div className="flex items-center justify-between border rounded-2xl p-4">
                <div>
                  <h4 className="font-medium">
                    Featured Category
                  </h4>

                  <p className="text-sm text-slate-500">
                    Display on homepage
                  </p>
                </div>

                <input
                  type="checkbox"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Image Upload */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-5">
              Category Image
            </h2>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center">
              <FaImage className="mx-auto text-5xl text-slate-400 mb-4" />

              <p className="text-slate-600 mb-4">
                Upload category image
              </p>

              <Button color="purple">
                Choose File
              </Button>
            </div>
          </div>

          {/* Preview Card */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Category Preview
            </h3>

            <p className="text-white/80 text-sm">
              Preview how your category will appear in the platform.
            </p>
          </div>

          {/* Tips Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaLightbulb className="text-yellow-500 text-xl" />
              <h3 className="font-semibold">
                Tips
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>✔ Use a unique category name.</li>
              <li>✔ Upload a square image.</li>
              <li>✔ Keep description concise.</li>
              <li>✔ Enable featured only if needed.</li>
              <li>✔ Add SEO details for better visibility.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;