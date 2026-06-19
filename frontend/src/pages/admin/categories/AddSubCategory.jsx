import React from "react";
import {
  FaArrowLeft,
  FaPlus,
  FaImage,
  FaLayerGroup,
  FaLightbulb,
} from "react-icons/fa";
import Button from "../../../components/common/Button";

const AddSubCategory = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Add Sub Category
          </h1>
          <p className="text-slate-500">
            Create a new sub category under an existing category
          </p>
        </div>

        <div className="flex gap-3">
          <Button color="white">
            <FaArrowLeft />
            Back
          </Button>

          <Button color="purple">
            <FaPlus />
            Create Sub Category
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border p-6">
            <h2 className="text-xl font-semibold mb-6">
              Sub Category Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Parent Category *
                </label>

                <select className="w-full border rounded-xl px-4 py-3">
                  <option>Select Category</option>
                  <option>Plumbing</option>
                  <option>Electrician</option>
                  <option>Cleaning</option>
                  <option>Painting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Sub Category Name *
                </label>

                <input
                  type="text"
                  placeholder="Pipe Installation"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Slug *
                </label>

                <input
                  type="text"
                  placeholder="pipe-installation"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Display Order
                </label>

                <input
                  type="number"
                  placeholder="1"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium mb-2">
                Description
              </label>

              <textarea
                rows="5"
                placeholder="Write sub category description..."
                className="w-full border rounded-xl px-4 py-3 resize-none"
              />
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-3xl border p-6">
            <h2 className="text-xl font-semibold mb-6">
              Settings
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between border rounded-2xl p-4">
                <div>
                  <h4 className="font-medium">
                    Active Status
                  </h4>
                  <p className="text-sm text-slate-500">
                    Show to users
                  </p>
                </div>

                <input type="checkbox" />
              </div>

              <div className="flex justify-between border rounded-2xl p-4">
                <div>
                  <h4 className="font-medium">
                    Featured
                  </h4>
                  <p className="text-sm text-slate-500">
                    Show on homepage
                  </p>
                </div>

                <input type="checkbox" />
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-3xl border p-6">
            <h2 className="text-xl font-semibold mb-6">
              SEO Information
            </h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Meta Title"
                className="w-full border rounded-xl px-4 py-3"
              />

              <textarea
                rows="4"
                placeholder="Meta Description"
                className="w-full border rounded-xl px-4 py-3 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border p-6">
            <h2 className="text-xl font-semibold mb-5">
              Upload Image
            </h2>

            <div className="border-2 border-dashed rounded-2xl p-8 text-center">
              <FaImage className="mx-auto text-5xl text-slate-400 mb-4" />

              <p className="text-slate-500 mb-4">
                Upload Sub Category Image
              </p>

              <Button color="purple">
                Choose File
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white">
            <FaLayerGroup className="text-3xl mb-3" />

            <h3 className="font-semibold text-xl">
              Sub Category Preview
            </h3>

            <p className="text-white/80 mt-2">
              This sub category will appear inside the selected parent category.
            </p>
          </div>

          <div className="bg-white rounded-3xl border p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaLightbulb className="text-yellow-500" />
              <h3 className="font-semibold">
                Tips
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>✔ Select correct parent category.</li>
              <li>✔ Keep sub category names short.</li>
              <li>✔ Use SEO friendly slug.</li>
              <li>✔ Upload square image.</li>
              <li>✔ Set display order properly.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubCategory;