
const StatusBadge = ({ children, badge = "active" }) => {
  const base = " py-1 px-3 rounded  text-sm flex w-fit gap-1 items-center";
  const badges = {
    active: "bg-green-100 text-green-600 border",
    inactive: "bg-gray-100 text-gray-500 border",
    pending: "bg-yellow-100 text-yellow-600 border",
    completed: "bg-blue-100 text-blue-600 border",
    failed: "bg-red-100 text-red-600 border",
  };
  return <span className={`${base} ${badges[badge] || badges.active}`}>{children}</span>;
};

export default StatusBadge;
