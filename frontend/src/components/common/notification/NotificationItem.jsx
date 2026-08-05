import { BsThreeDots } from "react-icons/bs";

const NotificationItem = ({ notification }) => {
  const {
    title,
    name,
    role,
    message,
    time,
    unread,
    icon: Icon,
    bgColor,
    iconColor,
  } = notification;

  return (
    <>
      <div className="flex justify-between gap-3 p-3 hover:bg-gray-50 transition">

        <div className="flex gap-3">

          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${bgColor}`}
          >
            <Icon size={34} className={iconColor} />
          </div>

          <div>

            <h2 className="font-semibold">
              {title}
            </h2>

            <p className="text-sm font-medium">
              {name} ({role})
            </p>

            <p className="text-sm text-gray-600">
              {message}
            </p>

          </div>

        </div>

        <div className="flex flex-col items-center gap-2">

          {unread && (
            <div className="w-2 h-2 rounded-full bg-green-500" />
          )}

          <span className="text-xs">
            {time}
          </span>

          <BsThreeDots className="cursor-pointer" />

        </div>

      </div>

      <div className="border-t" />
    </>
  );
};

export default NotificationItem;