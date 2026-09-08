import React from "react";

import TimeSlotItem from "./TimeSlotItem";
import { useProviderSlots } from "../../../hooks/useProvider";

const TimeSlotList = () => {
  
  const {data} = useProviderSlots()
  const slots = data?.slots
  return (
    <div className="flex-1 flex flex-col gap-3">
      {slots?.map((slot) => (
        <TimeSlotItem
          key={slot._id}
          slot={slot}
        />
      ))}
    </div>
  );
};

export default TimeSlotList;