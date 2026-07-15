import React, { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button";
import PageHeader from "../../../components/common/admin/PageHeader";
import DeleteModal from "../modals/DeleteModal";

import CategoryStatsSection from "./components/CategoryStatsSection";
import CategoriesTable from "./components/CategoriesTable";

const AllCategoriesList = () => {
  const navigate = useNavigate();

  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const handleDeleteClick = (category) => setCategoryToDelete(category);
  const closeDeleteModal = () => setCategoryToDelete(null);

  return (
    <>
      <div>
        <PageHeader
          title="Categories Management"
          subtitle="Create and manage all service categories."
          button={
            <Button onClick={() => navigate("/admin/categories/add-category")}>
              <HiPlus size={22} />
              Add New Category
            </Button>
          }
        />

        <CategoryStatsSection />

        <CategoriesTable onDeleteClick={handleDeleteClick} />
      </div>

      {categoryToDelete && (
        <DeleteModal
          open={!!categoryToDelete}
          close={closeDeleteModal}
          text={`Are you sure you want delete ${categoryToDelete.title} category? This action cannot be undone.`}
          title="Category"
        />
      )}
    </>
  );
};

export default AllCategoriesList;