import React from "react";
import { timeSlots } from "../../data/data";

const TimeSlots = ({ time, setTime }) => {
  return (
    <div className="flex flex-col h-[55vh] overflow-hidden overflow-y-auto gap-4 pb-14">
      {timeSlots.map(slot => (
        <button
          key={slot}
          onClick={() => setTime(slot)}
          className={`w-full py-2 rounded text-sm ${
            time === slot
              ? "bg-[#006bfc] text-white"
              : "bg-transparent border border-blue-500 text-[#006bfc]"
          }`}>
          {slot}
        </button>
      ))}
    </div>
  );
};

export default TimeSlots;
