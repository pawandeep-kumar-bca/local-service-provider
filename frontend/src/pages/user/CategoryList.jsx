import React from "react";
import {
  FaBolt,
  FaFaucet,
  FaSnowflake,
  FaPumpSoap,
  FaHammer,
  FaTools,
  FaPaintRoller,
  FaBug,
  FaTint,
  FaCut,
  FaStar,
} from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Button from "../../components/common/Button";
import StatusBadge from "../../components/common/StatusBadge";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

const CategoryList = () => {
  const navigate = useNavigate();
  const context = useOutletContext();
  const filters = context.filters;
  const { data } = useCategories(filters);
  const categories = data?.categories || [];

  return (
    <>
      {categories.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {categories.map((category) => {
            return (
              <div
                key={category._id}
                className=" rounded-xl px-5 py-4 flex flex-col items-center justify-center relative backdrop-blur-sm
            border border-muted bg-white shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] hover:scale-[1.02] duration-300 ease-in-out transition-all duration-300"
              >
                <div className="absolute top-3 right-3">
                  <StatusBadge badge={category.status} />
                </div>

                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full`}
                  style={{ backgroundColor: category.backgroundColor }}
                >
                  <img
                    src={category.icon?.url}
                    alt={category.name}
                    width={35}
                    height={35}
                  />
                  {/* <Icon className={`${iconColor}`} size={34} /> */}
                </div>
                <h1 className="text-2xl font-bold my-3">{category.name}</h1>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" size={24} />
                  <h2 className="text-xl font-bold">3.5</h2>
                  <p className="text-lg text-muted">500 reviews</p>
                </div>
                <div className="flex items-center mt-2 mb-5">
                  <p className="text-lg ">Starting at</p>
                  <div className="flex items-center font-bold text-xl">
                    <MdOutlineCurrencyRupee />
                    500
                  </div>
                </div>

                <Button
                  color="success"
                  fullWidth
                  onClick={() => navigate("/user/category/select-provider")}
                >
                  Book Now
                </Button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <h2 className="text-2xl font-bold text-gray-800">
            No Services Found
          </h2>

          <p className="text-muted mt-2 text-center">
            We couldn’t find any services in this category yet.
          </p>
        </div>
      )}
    </>
  );
};

export default CategoryList;
