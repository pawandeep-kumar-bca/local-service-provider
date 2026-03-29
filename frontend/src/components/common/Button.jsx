const Button = ({
  children,
  fullWidth = false,
  color = "success",
  ...props
}) => {
  const base =
    "py-2 px-5 rounded-[4px] cursor-pointer font-[500] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm";



  const colors = {
    success: "bg-[#22C55E] text-white hover:bg-[#16A34A]",
    white:
      "bg-white text-black border border-[#E2E8F0] hover:bg-[#f0f1f4]",
    darkBlue: "bg-[#3B82F6] text-white hover:bg-[#2563EB]",
    danger: "bg-[#EF4444] text-white hover:bg-[#DC2626]",
    pending: "bg-[#FBBF24] text-black hover:bg-[#F59E0B]",
  };

  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type="button"
      className={`${base} ${width} ${colors[color] || colors.success}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;