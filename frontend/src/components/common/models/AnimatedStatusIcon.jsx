import React from "react";

const AnimatedStatusIcon = ({
  icon: Icon,
  size = 50,
  iconClassName = "",
  gradient = "from-red-500 to-red-700",
  glowColor = "bg-red-300",
  ringColor = "border-red-200",
}) => {
  const dots = [
    "top-5 left-10 bg-yellow-400 w-2 h-2",
    "top-2 right-20 bg-blue-500 w-3 h-3",
    "bottom-0 left-15 bg-pink-500 w-2.5 h-2.5",
    "-bottom-5 right-8 bg-orange-400 w-2 h-2",
    "top-0 left-20 bg-purple-500 w-1.5 h-1.5",
    "top-12 right-10 bg-cyan-400 w-2 h-2",
  ];

  return (
    <div className="relative flex items-center justify-center mt-18 md:mt-0 mb-5">
      {/* Decorative Dots */}
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`absolute ${dot} rounded-full animate-ping opacity-70`}
        />
      ))}

      {/* Glow Ring */}
      <div
        className={`absolute w-[5rem] h-[5rem] rounded-full animate-ping opacity-70 ${glowColor}`}
      />

      <div
        className={`absolute w-[6.5rem] h-[6.5rem] rounded-full border-2 border-dashed opacity-60 ${ringColor}`}
      />

      {/* Main Icon */}
      <div
        className={`relative z-10 flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-white shadow-lg`}
      >
        {Icon && <Icon size={size} className={iconClassName} />}
      </div>
    </div>
  );
};

export default AnimatedStatusIcon;
