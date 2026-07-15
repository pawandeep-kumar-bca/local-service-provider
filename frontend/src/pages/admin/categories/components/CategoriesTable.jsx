import React, { useState } from "react";
import SearchFilterBar from "../../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../../components/common/admin/TableWrapper";
import CategoryTableHeader from "./CategoryTableHeader";
import CategoryTableRow from "./CategoryTableRow";
import { useCategories } from "../../../../hooks/useCategories";
import useDebounce from "../../../../hooks/useDebounce";


const CategoriesTable = ({ onDeleteClick }) => {
  
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    sort: "newest first",
    date: "",
    page: 1,
    limit: 10,
});


const debouncedSearch = useDebounce(filters.search, 500);
  const { data} = useCategories({...filters,search:debouncedSearch});
  const categories = data?.categories || [];
  return (
    <TableWrapper>
      <SearchFilterBar
        placeholder="Search by categories..."
        filters={filters}
        setFilters={setFilters}
        options={[
          {
            label: "All Status",
            value: filters.status,
            onChange:(value)=>{
                setFilters((prev)=>({
                    ...prev,
                    status:value
                }))
            },
            options: ["Active", "Inactive"],
          },
          {
            label: "Sort By",
            value: filters.sortBy,
            onChange: (value)=>{
                setFilters((prev)=>({
                    ...prev,
                    sortBy:value
                }))
            },
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
              key={category._id}
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
