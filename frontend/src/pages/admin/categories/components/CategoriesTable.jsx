import React from "react";
import SearchFilterBar from "../../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../../components/common/admin/TableWrapper";
import { categories } from "../data/categoriesData";
import CategoryTableHeader from "./CategoryTableHeader";
import CategoryTableRow from "./CategoryTableRow";

const CategoriesTable = ({ onDeleteClick }) => {
  return (
    <TableWrapper>
      <SearchFilterBar
        placeholder="Search by categories..."
        filters={[
          {
            label: "All Status",
            options: ["Active", "Inactive"],
          },
          {
            label: "Sort By",
            options: [
              "Newest First",
              "Oldest First",
              "Descending Order",
              "Ascending Order",
            ],
          },
        ]}
      />

      <div className="border border-slate-300 rounded-xl">
        <CategoryTableHeader />

        <div className="border-t border-gray-200 mt-3 mb-2"></div>

        <div className="space-y-2 pb-3">
          {categories.map((category) => (
            <CategoryTableRow
              key={category.id}
              category={category}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </div>
      </div>
    </TableWrapper>
  );
};

export default CategoriesTable;