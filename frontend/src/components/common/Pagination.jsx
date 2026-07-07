import React from "react";
import Button from "./Button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 mt-8">

      <Button
        color="white"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <MdKeyboardArrowLeft />
        Previous
      </Button>

      <div className="bg-white border rounded-xl px-6 py-2 shadow-sm">
        <span className="font-semibold text-lg">
          {currentPage}
        </span>

        <span className="text-gray-400 mx-2">
          of
        </span>

        <span className="font-semibold text-lg">
          {totalPages}
        </span>
      </div>

      <Button
        color="green"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <MdKeyboardArrowRight />
      </Button>

    </div>
  );
};

export default Pagination;