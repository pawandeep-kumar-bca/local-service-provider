import React from 'react'

const UserCardBookings = () => {
  return (
    <div
                key={id}
                className="border border-gray-200 bg-white rounded-2xl p-5
    shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                {/* Top */}
                <div className="flex justify-between items-start">
                  <h1 className="text-lg font-bold text-text">{id}</h1>

                  <StatusBadge badge={status} />
                </div>
                <p className="bg-red-50 text-red-500 px-2 py-1 text-xs font-semibold rounded mt-2 inline-block">
                  If you are not accept your service scheduled expires in 50 min
                </p>
                {/* Divider */}
                <div className="border-t border-gray-100 my-2"></div>

                {/* Customer */}
                <div className="flex justify-between items-center gap-3">
                  <div className="flex gap-3 items-center">
                    {/* Profile */}
                    <div className="relative">
                      <img
                        src={customerImage}
                        alt="profile"
                        className="w-16 h-16 min-w-16 rounded-full object-cover
            border-4 border-white shadow-md ring-2 ring-primary/10"
                      />

                      {/* Online Dot */}
                      <div
                        className="absolute bottom-1 right-1 w-4 h-4 rounded-full
            bg-green-500 border-2 border-white"
                      />
                    </div>

                    {/* Customer Info */}
                    <div>
                      <h1 className="text-lg md:text-xl font-semibold text-text">
                        {customerName}
                      </h1>
                      {/* Payment */}

                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-xs bg-gray-100 border-gray-300 flex items-center gap-1 py-1 px-2 rounded-sm border text-green-600">
                          <IoMdCash size={16} /> <span>{paymentType}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {/* Call */}
                    <button
                      className="
      flex items-center justify-center
      w-11 h-11 rounded-xl cursor-pointer
      bg-green-50 border border-green-300 text-green-600
      hover:bg-green-100
      hover:-translate-y-0.5
      transition-all duration-300
    "
                    >
                      <IoMdCall size={22} />
                    </button>

                    {/* Chat */}
                    <button
                      className="
      flex items-center justify-center
      w-11 h-11 rounded-xl cursor-pointer
      bg-blue-50 border border-blue-300 text-blue-600
      hover:bg-blue-100
      hover:-translate-y-0.5
      transition-all duration-300
    "
                    >
                      <BiMessageRoundedDetail size={22} />
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-2"></div>

                {/* Service */}
                <div className="flex gap-3 items-center">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl
        bg-cyan-100 text-cyan-600
        flex items-center justify-center shrink-0"
                  >
                    <Icon size={28} />
                  </div>

                  {/* Service Info */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-text">
                      {serviceName}
                    </h3>

                    <div className="flex items-center text-sm text-muted font-medium">
                      <p>₹ {price}</p>

                      <span className="flex items-center">
                        <LuDot size={20} />
                        <p>{duration}</p>
                      </span>
                    </div>

                    {/* Earnings */}
                    <p className="text-sm text-green-600 font-semibold mt-1">
                      You Earn ₹{earning}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-2"></div>

                {/* Date & Time */}
                <div className="flex gap-2 items-center">
                  <CiCalendar
                    size={22}
                    className="text-muted mt-0.5 shrink-0"
                  />

                  <span
                    className="flex flex-wrap items-center
        text-sm md:text-base font-medium text-gray-700"
                  >
                    <p>{serviceDate}</p>

                    <LuDot size={18} />

                    <p>
                      {startTime} - {endTime}
                    </p>
                  </span>
                </div>

                {/* Address */}
                <div className="flex gap-2 items-center mt-3">
                  <CiLocationOn
                    size={22}
                    className="text-muted mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="text-sm md:text-base font-medium text-gray-700">
                      {address}
                    </p>

                    <p className="text-xs text-muted mt-1">{distance}</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-3">
                  <PiNotePencilLight
                    size={22}
                    className="text-muted mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm text-gray-700 text-semibold">Customer Note</p>
                    <p className="text-xs text-gray-500">Please before comes in by home please call me. </p>
                  </div>
                </div>
                {/* Bottom Buttons */}
                <div className="flex  gap-3 mt-6">
                  <Button fullWidth color="danger">
                    Reject
                  </Button>

                  <Button fullWidth>Accept</Button>
                </div>
              </div>
  )
}

export default UserCardBookings