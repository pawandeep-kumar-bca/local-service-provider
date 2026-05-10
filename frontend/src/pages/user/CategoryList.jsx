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
import { useParams } from "react-router-dom";
const CategoryList = () => {
  const services = [
    {
      id: 1,
      title: "Electrician",
      icon: FaBolt,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-100",
      rating: 4.6,
      reviews: 230,
      startingPrice: 299,
      category: "home-repair",
      status: "available",
    },

    {
      id: 2,
      title: "Plumber",
      icon: FaFaucet,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
      rating: 4.5,
      reviews: 180,
      startingPrice: 299,
      category: "plumbing",
      status: "available",
    },

    {
      id: 3,
      title: "AC Repair",
      icon: FaSnowflake,
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-100",
      rating: 4.4,
      reviews: 150,
      startingPrice: 399,
      category: "appliance",
      status: "available",
    },

    {
      id: 4,
      title: "Home Cleaning",
      icon: FaPumpSoap,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-100",
      rating: 4.7,
      reviews: 210,
      startingPrice: 249,
      category: "cleaning",
      status: "available",
    },

    {
      id: 5,
      title: "Carpenter",
      icon: FaHammer,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100",
      rating: 4.5,
      reviews: 160,
      startingPrice: 349,
      category: "home-repair",
      status: "available",
    },

    {
      id: 6,
      title: "Appliance Repair",
      icon: FaTools,
      iconColor: "text-gray-600",
      bgColor: "bg-gray-100",
      rating: 4.4,
      reviews: 130,
      startingPrice: 299,
      category: "appliance",
      status: "available",
    },

    {
      id: 7,
      title: "Painting",
      icon: FaPaintRoller,
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
      rating: 4.6,
      reviews: 190,
      startingPrice: 349,
      category: "home-decor",
      status: "available",
    },

    {
      id: 8,
      title: "Pest Control",
      icon: FaBug,
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
      rating: 4.5,
      reviews: 140,
      startingPrice: 299,
      category: "cleaning",
      status: "available",
    },

    {
      id: 9,
      title: "RO Service",
      icon: FaTint,
      iconColor: "text-sky-500",
      bgColor: "bg-sky-100",
      rating: 4.4,
      reviews: 120,
      startingPrice: 249,
      category: "appliance",
      status: "available",
    },

    {
      id: 10,
      title: "Salon at Home",
      icon: FaCut,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100",
      rating: 4.6,
      reviews: 170,
      startingPrice: 349,
      category: "appliance",
      status: "available",
    },
  ];

  const { category } = useParams();

  const filterCategory = !category
    ? services
    : services.filter((items) => items.category === category);
  console.log(filterCategory);

  return (
    <>
    {(filterCategory.length > 0) ?<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {filterCategory.map((service) => {
        const {
          id,
          title,
          icon: Icon,
          iconColor,
          bgColor,
          rating,
          reviews,
          startingPrice,
          status,
        } = service;
        return (
          <div
            key={id}
            className=" rounded-xl px-5 py-4 flex flex-col items-center justify-center relative backdrop-blur-sm
            border border-muted bg-white shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] hover:scale-[1.02] duration-300 ease-in-out transition-all duration-300"
          >
            <div className="absolute top-3 right-3">
              <StatusBadge badge={status} />
            </div>
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${bgColor}`}
            >
              <Icon className={`${iconColor}`} size={34} />
            </div>
            <h1 className="text-2xl font-bold my-3">{title}</h1>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" size={24} />
              <h2 className="text-xl font-bold">{rating}</h2>
              <p className="text-lg text-muted">({reviews})</p>
            </div>
            <div className="flex items-center gap-2 my-2">
              <p className="text-lg ">Starting at</p>
              <div className="flex items-center font-bold text-xl">
                <MdOutlineCurrencyRupee /> {startingPrice}
              </div>
            </div>

            <Button color="success" fullWidth>
              Book Now
            </Button>
          </div>
        );
      })}
    </div>:<div className="flex flex-col items-center justify-center py-16">
  <h2 className="text-2xl font-bold text-gray-800">
    No Services Found
  </h2>

  <p className="text-muted mt-2 text-center">
    We couldn’t find any services in this category yet.
  </p>
</div>}
    </>
  );
};

export default CategoryList;
