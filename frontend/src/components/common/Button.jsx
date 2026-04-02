const Button = ({
  children,
  fullWidth = false,
  className="",
  color = "success",
  ...props
}) => {
  const base =
    "py-2 px-5 font-roboto rounded-[4px] cursor-pointer font-[500] shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg sm:text-sm hover:scale-105 shadow-md active:scale-95";



  const colors = {
    success: "bg-[#16A34A] text-white hover:bg-[#14c756]",
    white:
      "bg-white text-black border border-border hover:shadow-md hover:bg-[#f0f1f4]",
    blue: "bg-[#2563EB] text-white hover:bg-[#3B82F6] ",
    danger: "bg-[#EF4444] text-white hover:bg-[#DC2626]",
    pending: "bg-[#FBBF24] text-black hover:bg-[#F59E0B]",
  };

  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type="button"
      className={`${base} ${width} ${colors[color] || colors.success} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;//create: add welcome page UI