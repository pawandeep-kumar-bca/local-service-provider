const Button = ({
  children,
  fullWidth = false,
  className = "",
  color = "success",
  loading = false,
  ...props
}) => {
  const base =
    "py-2 md:py-2 lg:py-2 px-6 md:px-4 flex items-center justify-center gap-2 font-roboto rounded-xl cursor-pointer font-medium shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-95 text-lg md:text-base whitespace-nowrap";

  const colors = {
  success:
    "bg-green-600 text-white hover:bg-green-700",

  white:
    "bg-white text-slate-700  hover:bg-slate-50",

  blue:
    "bg-blue-600 text-white hover:bg-blue-700",

  purple:
    "bg-violet-600 text-white hover:bg-violet-700",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  yellow:
    "bg-amber-500 text-white hover:bg-amber-600",

  gray:
    "bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200",
};

  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type="button"
      disabled={loading || props.disabled}
      className={`${base} ${width} ${
        colors[color] || colors.success
      } ${className}`}
      {...props}
    >
      {loading && (
        <span
          className="
            h-4 w-4
            animate-spin
            rounded-full
            border-2 border-current
            border-t-transparent
          "
        />
      )}

      {children}
    </button>
  );
};

export default Button;