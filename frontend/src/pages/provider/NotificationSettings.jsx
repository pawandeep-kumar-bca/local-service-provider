import React, { useState } from 'react'
import { GiSecretBook } from "react-icons/gi";
import { FcAdvertising } from "react-icons/fc";
import { AiTwotoneSound } from "react-icons/ai";
import { MdOutlineEmail,MdOutlineMessage,MdOutlineSystemUpdateAlt } from "react-icons/md";
const NotificationSettings = () => {
     
  const [onBookingNotification, setOnBookingNotification] = useState(false);
  const [onEmailNotification, setOnEmailNotification] = useState(false);
  const [onBookingUpdateNotification, setOnBookingUpdateNotification] = useState(false);
  const [onSmsNotification, setOnSmsNotification] = useState(false);
  const [onPromotionNotification, setOnPromotionNotification] = useState(false);
  const [onSoundNotification, setOnSoundNotification] = useState(false);

     const notifications = [
      {
      Icon:GiSecretBook,
      bgColor:'bg-blue-100',
      textColor:'text-blue-500',
      heading:'New Booking Requests',
      text:'Get notified when you receive a new booking request.',
      value:onBookingNotification,
      setValue:setOnBookingNotification,
     },
    {
      Icon:MdOutlineEmail,
      bgColor:'bg-blue-100',
      textColor:'text-blue-500',
      heading:'Email Notifications',
      text:'Receive notifications on your email',
      value:onEmailNotification,
      setValue:setOnEmailNotification,
     },
     {
      Icon:MdOutlineSystemUpdateAlt,
      bgColor:'bg-green-100',
      textColor:'text-green-500',
      heading:'Booking Updates',
      text:'Get notified about booking status updates.',
      value:onBookingUpdateNotification,
      setValue:setOnBookingUpdateNotification,
     }, {
      Icon:MdOutlineMessage,
      bgColor:'bg-yellow-100',
      textColor:'text-yellow-500',
      heading:'SMS Notifications',
      text:'Receive text messages for important updates.',
      value:onSmsNotification,
      setValue:setOnSmsNotification,
     },
     {
      Icon:FcAdvertising,
      bgColor:'bg-purple-100',
      textColor:'text-purple-500',
      heading:'Promotional Notifications',
      text:'Receive updates about offers and promotions.',
      value:onPromotionNotification,
      setValue:setOnPromotionNotification,
     },
     {
      Icon:AiTwotoneSound,
      bgColor:'bg-green-100',
      textColor:'text-green-500',
      heading:'Sound Alerts',
      text:'Play sound for new notifications.',
      value:onSoundNotification,
      setValue:setOnSoundNotification,
     }
    ]
  return (
    <div
        className="md:shadow-[0_5px_20px_rgba(0,0,0,0.06)]  bg-white
      md:border md:border-slate-200
      rounded-2xl mt-5"
      >
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-text">
            Notification Settings
          </h1>
          <p className="text-sm text-muted mt-1">
            Manage how you receive notifications.
          </p>
        </div>
        <div>

         { notifications.map((notification,idx)=>{
          const {Icon,bgColor,textColor,text,heading,value,setValue}= notification
          return ( <div key={idx} className="flex items-center justify-between gap-4">
            {/* Left Content */}
            <div className="flex gap-4 items-center flex-1">
              {/* Icon */}
              <div
                className={`
        min-w-14 h-14 rounded-xl
        flex items-center justify-center
        ${bgColor} ${textColor}
      `}
              >
                <Icon size={26} />
              </div>

              {/* Text */}
              <div>
                <h1 className="text-base sm:text-lg font-semibold text-slate-800">
                  {heading}
                </h1>

                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {text}
                </p>
              </div>
            </div>

            {/* Toggle */}
            <button
              onClick={() => setValue((prev) => !prev)}
              className={`
      relative w-14 h-8 rounded-full
      transition-colors duration-300
      flex items-center
      cursor-pointer shrink-0
      ${value ? "bg-green-500" : "bg-slate-300"}
    `}
            >
              <span
                className={`
        absolute left-1
        w-6 h-6 rounded-full bg-white
        transition-transform duration-300
        shadow-sm
        ${value ? "translate-x-6" : "translate-x-0"}
      `}
              />
            </button>
          </div>)
         })
          
         }
        </div>
      </div>
  )
}

export default NotificationSettings