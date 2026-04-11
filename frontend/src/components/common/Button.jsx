const Button = ({
  children,
  fullWidth = false,
  className="",
  color = "success",
  ...props
}) => {
  const base =
    "py-2 px-4 flex items-center justify-center gap-2 font-roboto rounded-[4px] cursor-pointer font-base shadow-md transition-all inset-shadow-xs duration-200 disabled:opacity-50 disabled:cursor-not-allowed md:text-lg text-xs hover:scale-105 shadow-lg active:scale-95";



  const colors = {
    success: "bg-[#16A34A] text-white hover:bg-[#14c756]",
    white:
      "bg-white text-black border shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border-border hover:bg-[#f0f1f4] ",
    blue: "bg-[#2563EB] text-white shadow-[#2563EB]/50 hover:bg-[#3B82F6] ",
    danger: "bg-[#EF4444] text-white hover:bg-[#DC2626]",
    pending: "bg-[#FBBF24] text-white hover:bg-[#F59E0B]",
  };

  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type="button"
      className={`${base} ${width}  ${colors[color] || colors.success} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;//create: add welcome page UI