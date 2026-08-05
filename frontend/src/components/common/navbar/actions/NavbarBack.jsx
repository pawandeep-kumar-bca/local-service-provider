import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavbarBack = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="p-2 rounded-lg hover:bg-gray-100 transition"
    >
      <IoArrowBack className="text-2xl" />
    </button>
  );
};

export default NavbarBack;