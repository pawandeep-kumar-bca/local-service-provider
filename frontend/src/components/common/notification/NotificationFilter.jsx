const tabs = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Unread",
    value: "unread",
  },
  {
    label: "Booking",
    value: "booking",
  },
  {
    label: "Message",
    value: "message",
  },
];

const NotificationFilter = ({
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <div className="sticky top-0 bg-white z-10 flex gap-2 p-3 overflow-x-auto">

      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveFilter(tab.value)}
          className={`px-4 py-1 rounded-xl whitespace-nowrap border transition
          ${
            activeFilter === tab.value
              ? "bg-primary text-white"
              : "border-gray-300"
          }`}
        >
          {tab.label}
        </button>
      ))}

    </div>
  );
};

export default NotificationFilter;