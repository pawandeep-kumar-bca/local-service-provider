const Cards = ({ children, icon, value }) => {
  return (
    <div
      className="backdrop-blur-sm
            border
border-muted
bg-white

shadow-[0_5px_15px_rgba(0,0,0,0.06)] p-5 rounded-lg  flex items-start gap-3"
    >
      {icon}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">{value}</h1>
        <h2 className="text-sm md:text-lg font-bold">{children}</h2>
      </div>
    </div>
  );
};

export default Cards;
