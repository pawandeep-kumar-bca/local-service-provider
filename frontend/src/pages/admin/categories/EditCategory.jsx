import React from "react";
import {
  FaArrowLeft,
  FaSave,
  FaImage,
  FaTag,
} from "react-icons/fa";
import Button from "../../../components/common/Button";

const EditCategory = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Edit Category
          </h1>
          <p className="text-slate-500">
            Update category information and settings
          </p>
        </div>

        <div className="flex gap-3">
          <Button color="white">
            <FaArrowLeft />
            Back
          </Button>

          <Button color="purple">
            <FaSave />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Side Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-6">
              Basic Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category Name
                </label>

                <input
                  type="text"
                  defaultValue="Plumbing"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Slug
                </label>

                <input
                  type="text"
                  defaultValue="plumbing"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium mb-2">
                Description
              </label>

              <textarea
                rows={5}
                defaultValue="Professional plumbing services including installation, maintenance and repair work."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 resize-none"
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
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Meta Description
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter meta description"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-6">
              Category Settings
            </h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between border rounded-2xl p-4">
                <div>
                  <h4 className="font-medium">
                    Active Status
                  </h4>
                  <p className="text-sm text-slate-500">
                    Show category to users
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                />
              </div>

              <div className="flex items-center justify-between border rounded-2xl p-4">
                <div>
                  <h4 className="font-medium">
                    Featured Category
                  </h4>
                  <p className="text-sm text-slate-500">
                    Highlight on homepage
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upload Image */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-5">
              Category Image
            </h2>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center">
              <FaImage className="mx-auto text-5xl text-slate-400 mb-4" />

              <p className="text-slate-600 mb-3">
                Upload Category Image
              </p>

              <Button color="purple">
                Choose File
              </Button>
            </div>
          </div>

          {/* Category Stats */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-5">
              Statistics
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-500">
                  Services
                </span>
                <span className="font-semibold">
                  10
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Providers
                </span>
                <span className="font-semibold">
                  120
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Created
                </span>
                <span className="font-semibold">
                  12 May 2024
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Updated
                </span>
                <span className="font-semibold">
                  20 May 2024
                </span>
              </div>
            </div>
          </div>

          {/* Category Type */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white">
            <FaTag className="text-3xl mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Plumbing
            </h3>

            <p className="text-white/80 text-sm">
              Professional plumbing services category.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;