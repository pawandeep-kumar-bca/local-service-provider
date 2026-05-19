const Button = ({
  children,
  fullWidth = false,
  className = "",
  color = "success",
  ...props
}) => {
  
  const base =
  "py-2 md:py-2 lg:py-2 px-6 md:px-4   flex items-center justify-center gap-2 font-roboto rounded-xl cursor-pointer font-medium shadow-md transition-all duration-300 disabled:opacity-50  disabled:cursor-not-allowed hover:scale-[1.01] active:scale-95 text-lg md:text-base";

  const colors = {
    success: "bg-green-600 text-white hover:bg-[#14c756]",
    white:
      "bg-white text-black border shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border-border hover:bg-[#f0f1f4] ",
    blue: "bg-[#2563EB] text-white shadow-[#2563EB]/50 hover:bg-[#3B82F6] ",
    purple:"bg-purple-600 text-white shadow-purple-300 hover:bg-purple-700",
    danger: "bg-[#EF4444] text-white hover:bg-[#DC2626]",
    yellow: "bg-[#FBBF24] text-white hover:bg-[#F59E0B]",
    gray:'bg-white border border-gray-300 text-gray-700'
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

export default Button; //create: add welcome page UI
