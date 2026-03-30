const Loader = ({ size = "small", color = "blue" }) => {
  const loaderSize = {
    small: "w-[25px] h-[25px]",
    medium: "w-[35px] h-[35px]",
    extraMedium: "w-[40px] h-[40px]",
    big: "w-[45px] h-[45px]",
  };

  const colors = {
    white: "border-t-white",
    black: "border-t-black",
    blue: "border-t-[#2563EB]",
  };

  const base =
    "border-[3px] border-[#E2E8F0] rounded-full animate-spin";

  return (
    <div
      className={`${base} ${colors[color] || colors.blue} ${
        loaderSize[size] || loaderSize.small
      }`}
    ></div>
  );
};

export default Loader;