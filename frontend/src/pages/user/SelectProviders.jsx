import React from "react";
import Button from "../../components/common/Button";
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

const SelectProviders = () => {
  const providers = [
    {
      id: 1,
      name: "Aman Gupta",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 4.3,
      reviews: 340,
      experience: "5 Years Experience",
      price: 299,
      status: true,
    },

    {
      id: 2,
      name: "Rohit Sharma",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 4.7,
      reviews: 520,
      experience: "7 Years Experience",
      price: 399,
      status: true,
    },

    {
      id: 3,
      name: "Vikas Kumar",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 4.5,
      reviews: 280,
      experience: "4 Years Experience",
      price: 249,
      status: false,
    },

    {
      id: 4,
      name: "Rahul Verma",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 4.8,
      reviews: 610,
      experience: "8 Years Experience",
      price: 499,
      status: true,
    },

    {
      id: 5,
      name: "Deepak Singh",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 4.2,
      reviews: 190,
      experience: "3 Years Experience",
      price: 199,
      status: false,
    },

    {
      id: 6,
      name: "Ankit Sharma",
      image: "https://i.pravatar.cc/150?img=6",
      rating: 4.6,
      reviews: 450,
      experience: "6 Years Experience",
      price: 349,
      status: true,
    },

    {
      id: 7,
      name: "Pankaj Yadav",
      image: "https://i.pravatar.cc/150?img=7",
      rating: 4.4,
      reviews: 300,
      experience: "5 Years Experience",
      price: 279,
      status: true,
    },

    {
      id: 8,
      name: "Suresh Kumar",
      image: "https://i.pravatar.cc/150?img=8",
      rating: 4.1,
      reviews: 160,
      experience: "2 Years Experience",
      price: 180,
      status: false,
    },

    {
      id: 9,
      name: "Mohit Verma",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 4.9,
      reviews: 720,
      experience: "10 Years Experience",
      price: 599,
      status: true,
    },

    {
      id: 10,
      name: "Ajay Kumar",
      image: "https://i.pravatar.cc/150?img=10",
      rating: 4.3,
      reviews: 260,
      experience: "4 Years Experience",
      price: 240,
      status: false,
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text">Select Provider</h1>
        <Button color="white"><IoIosArrowBack />Back</Button>
      </div>
      <div className="border border-muted rounded-md mt-5">
        {providers.map((provider, index) => {
          const {
            id,
            name,
            image,
            rating,
            reviews,
            experience,
            price,
            status,
          } = provider;
          return (
            <>
              <div
                key={id}
                className="md:px-4 md:py-3 px-2 py-3 flex justify-between"
              >
                <div className="flex gap-4 items-center md:flex-1">
                  <div className="relative">
                    <img
                      src={image}
                      alt="profile"
                      className=" w-16 h-16 min-w-16 rounded-full object-cover border-4 border-white shadow-[0_10px_25px_rgba(0, 0.15)] ring-2 ring-primary/20 flex-shrink-0
    "
                    />

                    {/* Online Dot */}
                    <div className="absolute bottom-1 bg-white flex items-center justify-center right-0 w-4 h-4 rounded-full">
                        <div
                      className={` w-3 h-3 rounded-full  shadow-sm ${status ? "bg-green-500" : "bg-white border-3  border-green-500"}
  `}
                    />
                    </div>
                  </div>

                  <div className="flex md:items-center md:gap-4  flex-col md:flex-row  md:justify-between md:w-full">
                    <h1 className="text-lg font-bold">{name}</h1>
                    <div className="flex items-center gap-1 md:gap-2">
                      <FaStar className="text-yellow-500" size={20} />
                      <h2 className="text-lg font-bold">{rating}</h2>
                      <p className="text-sm text-muted">({reviews} reviews)</p>
                    </div>
                    <p className="text-lg font-semibold">{experience}</p>
                  </div>
                </div>

                <div className="flex items-center justify-end md:gap-5 gap-2 flex-col md:flex-row md:flex-1">
                  <div className="flex items-center">
                    <MdOutlineCurrencyRupee size={20} />
                    <h1 className="text-xl font-bold">{price}</h1>
                  </div>
                  <Button>Select</Button>
                </div>
              </div>

              {index !== providers.length - 1 && (
                <div className="w-full h-px bg-gray-200"></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SelectProviders;
