import React, { useState } from "react";
import {
  FaArrowLeft,
  FaPlus,
  FaImage,
  FaLightbulb,
  FaImages,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useCategoryCreate } from "../../../hooks/useCategories";
const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    backgroundColor: "#C5E8B7",
    sortOrder: 0,
    status: "active",
    icon: null,
  });
  const { createCategoryMutation } = useCategoryCreate();

  const handelValue = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitCategory = (e) => {
    e.preventDefault();
    const form = new FormData();

    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("icon", formData.icon);
    form.append("backgroundColor", formData.backgroundColor);
    form.append("status", formData.status);
    form.append("sortOrder", formData.sortOrder);
    createCategoryMutation.mutate(form);
  };
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
        </div>
      </div>
      <form onSubmit={submitCategory}>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Information */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <FaImages className="text-indigo-600" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold">
                    Category Information
                  </h2>

                  <p className="text-sm text-slate-500">
                    Fill the details to add a new category.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  value={formData.name}
                  onChange={handelValue}
                  label="Category Name"
                  type="text"
                  placeholder="e.g. Plumber"
                  id="name"
                  required
                />
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Background Color
                  </label>

                  <div className="relative">
                    <input
                      name="backgroundColor"
                      className="w-full text-sm  border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white"
                      value={formData.backgroundColor}
                      onChange={handelValue}
                    />

                    <input
                      type="color"
                      name="backgroundColor"
                      value={formData.backgroundColor}
                      onChange={handelValue}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 border-none bg-transparent cursor-pointer"
                    />
                  </div>
                </div>
                <Input
                  name="sortOrder"
                  value={formData.sortOrder}
                  onChange={handelValue}
                  label="Display Order"
                  type="number"
                  placeholder="e.g. 1"
                  id="sortOrder"
                />

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Status
                  </label>

                  <div className="flex gap-3">
                    <label className="relative">
                      <input
                        value="active"
                        onChange={handelValue}
                        type="radio"
                        defaultChecked
                        name="status"
                        className="hidden peer"
                      />

                      <span className="text-green-500  flex items-center gap-2 transition-all duration-300 border border-green-300 hover:border-green-500 hover:bg-green-50 font-medium peer-checked:bg-green-50 peer-checked:border-green-500 px-5 py-2 rounded-lg cursor-pointer peer-checked:font-semibold peer-checked:shadow-sm">
                        <FaCheckCircle className="text-green-500" /> Active
                      </span>
                    </label>

                    <label className="relative">
                      <input
                        type="radio"
                        name="status"
                        className="hidden peer"
                        value="inactive"
                        onChange={handelValue}
                      />

                      <span className="text-red-500 gap-2 flex items-center transition-all duration-300 border border-red-300 hover:border-red-500 hover:bg-red-50 font-medium peer-checked:bg-red-50 peer-checked:border-red-500 px-5 py-2 rounded-lg cursor-pointer peer-checked:font-semibold peer-checked:shadow-sm">
                        <FaTimesCircle className="text-red-500" /> Inactive
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium mb-2">
                  Description *
                </label>

                <textarea
                  value={formData.description}
                  onChange={handelValue}
                  name="description"
                  rows={4}
                  placeholder="e.g. Electrical repair and installation services."
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Image Upload */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-semibold mb-4">Upload Icon</h3>

              <label htmlFor="icon">
                <input
                  type="file"
                  id="icon"
                  name="icon"
                  className="hidden"
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      icon: e.target.files[0],
                    }));
                  }}
                />

                <div className="border border-dashed border-success rounded-2xl p-8 bg-green-50 hover:bg-green-100 transition cursor-pointer flex flex-col items-center">
                  <AiOutlineCloudUpload
                    size={45}
                    className="text-success mb-3"
                  />

                  <h4 className="font-semibold">Click to Upload</h4>

                  <p className="text-sm text-slate-500 mt-1">
                    PNG, JPG, SVG (Max 2MB)
                  </p>
                </div>
              </label>
            </div>
            {/* Tips Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-yellow-500 text-xl" />
                <h3 className="font-semibold">Tips</h3>
              </div>

              <ul className="space-y-3 text-sm text-slate-600">
                <li>✔ Use a unique category name.</li>
                <li>✔ Upload a square image.</li>
                <li>✔ Keep description concise.</li>
                <li>✔ Enable featured only if needed.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-end mt-4">
          <Button color="white">Cancel</Button>
          <Button color="primary">
            <FaPlus />
            Create Category
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
