
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineCloudUpload } from "react-icons/md";
import Button from "../../components/common/Button";
import { useCategoryCreate, useGetCategoriesForProvider } from "../../hooks/useCategories";


const AddNewService = () => {
  const navigate = useNavigate();

  // Fetch categories from API
  const { data, isLoading } = useGetCategoriesForProvider();
  const categories = data?.data || [];

  // Form state
  const [formData, setFormData] = useState({
    categoryId: "",
    experience: "",
    priceType: "",
    price: "",
    description: "",
    certificate: null,
  });


  const { createCategoryForProviderMutation } = useCategoryCreate()
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle certificate upload
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setFormData((prev) => ({
        ...prev,
        certificate: file,
      }));
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.categoryId) {
      return alert("Please select a service category");
    }

    if (!formData.certificate) {
      return alert("Please upload your certificate");
    }




    const payload = new FormData();

    payload.append("categoryId", formData.categoryId);
    payload.append("experience", formData.experience);
    payload.append("priceType", formData.priceType);
    payload.append("price", formData.price);
    payload.append("description", formData.description);
    payload.append("certificate", formData.certificate);


    await createCategoryForProviderMutation.mutateAsync(payload)




  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="md:shadow-[0_0_20px_rgba(0,0,0,0.10)] md:p-4 rounded-xl"
      >
        {/* Header */}
        <div className="mb-4 flex justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-text">
              Select Service
            </h1>

            <p className="text-sm md:text-base text-muted mt-1">
              Choose a service from the list provided by admin.
            </p>
          </div>

          <div>
            <Button type="button" onClick={() => navigate(-1)}>
              <IoIosArrowBack />
              Back
            </Button>
          </div>
        </div>

        {/* Category Selection */}
        {isLoading ? (
          <p className="text-center py-6">Loading categories...</p>
        ) : categories.length === 0 ? (
          <p className="text-center py-6 text-muted">
            No categories available.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {categories.map((category) => (
              <label
                key={category._id}
                htmlFor={category._id}
                className="relative cursor-pointer"
              >
                <input
                  type="radio"
                  name="categoryId"
                  id={category._id}
                  value={category._id}
                  checked={formData.categoryId === category._id}
                  onChange={handleChange}
                  className="hidden peer"
                />

                <div
                  className="border rounded-xl border-gray-200
                  peer-checked:bg-green-50
                  peer-checked:border-green-400
                  hover:border-green-500 hover:bg-green-50
                  text-center transition-all
                  peer-checked:scale-[1.02]
                  duration-300 p-4 flex flex-col
                  justify-center items-center gap-2
                  peer-checked:ring-1 peer-checked:ring-green-200"
                >
                  <div
                    className="md:w-16 md:h-16 h-14 w-14 rounded-full
                    flex justify-center items-center"
                    style={{
                      backgroundColor: category.backgroundColor,
                    }}
                  >
                    <img
                      src={category.icon?.url}
                      alt={category.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <h1 className="md:text-lg text-sm font-semibold text-text">
                    {category.name}
                  </h1>
                </div>
              </label>
            ))}
          </div>
        )}

        {/* Pricing & Duration */}
        <div className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Pricing & Experience
            </h2>

            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
              Set your service price and share your professional experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

          {/* Left Side: Experience & Description */}
          <div className="flex flex-col gap-5">

            {/* Experience */}
            <div>
              <label
                htmlFor="experience"
                className="block mb-2 font-medium text-sm"
              >
                Experience (Years){" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Enter your experience"
                min="0"
                required
                className="w-full border border-gray-300 px-3 py-2.5
        rounded-lg focus:ring-2 focus:ring-green-100
        focus:border-green-500 focus:outline-none transition"
              />
            </div>

            {/* Description */}
            <div className="flex-1">
              <label
                htmlFor="description"
                className="block mb-2 font-medium text-sm"
              >
                Service Description
              </label>

              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your service and expertise..."
                className="w-full h-[calc(100%-28px)] min-h-[120px]
        border border-gray-300 px-3 py-2.5 rounded-lg
        focus:ring-2 focus:ring-green-100
        focus:border-green-500 focus:outline-none
        resize-none transition"
              />
            </div>

          </div>

          {/* Right Side: Certificate Upload */}
          <div className="flex flex-col">

            <label className="block mb-2 font-medium text-sm">
              Upload Certificate{" "}
              <span className="text-red-500">*</span>
            </label>

            <label
              htmlFor="certificate"
              className="flex flex-col items-center justify-center
      flex-1 min-h-[220px] border-2 border-dashed
      border-gray-300 rounded-xl p-6 cursor-pointer
      hover:border-green-500 hover:bg-green-50
      transition-all duration-200"
            >
              <MdOutlineCloudUpload
                size={42}
                className="text-green-600"
              />

              <p className="font-medium text-sm mt-3 text-center break-all">
                {formData.certificate
                  ? formData.certificate.name
                  : "Click to upload certificate"}
              </p>

              <p className="text-xs text-muted mt-2 text-center">
                Upload your service-related certificate
              </p>

              <p className="text-xs text-gray-400 mt-1">
                PDF, JPG, JPEG, PNG
              </p>

              <input
                type="file"
                id="certificate"
                name="certificate"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

          </div>

        </div>



        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-end gap-3 my-5">
          <Button
            type="button"
            color="white"
            className="w-full md:w-fit md:px-10"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={createCategoryForProviderMutation.isLoading}
            className="w-full md:w-fit md:px-10"
          >
            {createCategoryForProviderMutation.isLoading ? "Saving..." : "Save Service"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewService;
