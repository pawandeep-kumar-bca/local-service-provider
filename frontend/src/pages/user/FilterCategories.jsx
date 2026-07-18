
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import { BsGridFill } from "react-icons/bs";

const FilterCategories = ({url,setFilters}) => {
  const { data, isLoading } = useCategories();
  
    const categories = data?.categories || [];
  
    const base =
      "whitespace-nowrap flex gap-2 items-center border shrink-0 transition-all duration-300 mb-2 px-5 py-2 hover:bg-blue-200 hover:border-blue-300 hover:text-blue-600 rounded-xl font-semibold";
  
    const active = "bg-blue-200 border-blue-300 text-blue-600";
    const notActive = "border-muted border text-black";
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const scrollRef = useRef(null);
  
    const scrollLeft = () => {
      scrollRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    };
    const checkScroll = () => {
      const el = scrollRef.current;
  
      if (!el) return;
  
      setShowLeft(el.scrollLeft > 0);
  
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
    };
    useEffect(() => {
      checkScroll();
  
      const el = scrollRef.current;
  
      if (!el) return;
  
      el.addEventListener("scroll", checkScroll);
  
      window.addEventListener("resize", checkScroll);
  
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }, [data?.categories]);
    const scrollRight = () => {
      scrollRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    };
    const handleCategory = (categoryName) => {
      setFilters((prev) => ({
        ...prev,
        category: categoryName,
        page: 1,
      }));
    };
  
    if (isLoading) return null;
  
    return (
      <div className="md:mb-5 sticky top-20 bg-white z-40 pb-5 md:pb-1 pt-3 md:pt-1 md:px-2 relative">
        {showLeft && (
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow justify-center items-center z-20"
          >
            <MdKeyboardArrowLeft size={24} />
          </button>
        )}
  
        <ul
          className="mt-3 flex gap-4 overflow-x-auto scrollbar-hide"
          ref={scrollRef}
        >
          <NavLink
            to={`/${url}`}
            end
            onClick={() => handleCategory("all")}
            className={({ isActive }) =>
              `${base} ${isActive ? active : notActive}`
            }
          >
            <BsGridFill size={22} /> All Services
          </NavLink>
  
          {categories.map((category) => (
            <NavLink
              key={category._id}
              to={`/${url}/${category.slug}`}
              onClick={() => handleCategory(category.name)}
              className={({ isActive }) =>
                `${base} ${isActive ? active : notActive}`
              }
            >
              {category.icon && (
                <img
                  src={category.icon.url}
                  alt={category.name}
                  className="w-7 h-7"
                />
              )}
  
              {!category.icon && "📌"}
  
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </NavLink>
          ))}
        </ul>
  
        {showRight && (
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow justify-center items-center z-20"
          >
            <MdKeyboardArrowRight size={24} />
          </button>
        )}
      </div>
    );
}

export default FilterCategories