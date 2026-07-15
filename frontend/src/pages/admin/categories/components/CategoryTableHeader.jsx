import React from "react";


const CategoryTableHeader = () => {
  return (
    <div
      className="
        grid
        grid-cols-[2fr_1fr_1fr_1fr_1.2fr_0.5fr]
        items-center
        mt-3
        text-sm
        font-bold
        text-black/80
        px-3
      "
    >
      <span className="pl-15">Category</span>
      <span className="text-center">Slug</span>
      <span className="text-center">Providers</span>
      <span className="text-center">Status</span>
      <span className="text-center">Created Date</span>
      <span className="text-center">Action</span>
    </div>
  );
};

export default CategoryTableHeader;