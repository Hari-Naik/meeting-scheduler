import React from "react";

import Calendar from "react-calendar";
import TimeSlots from "../TimeSlots/TimeSlots";
import { formatDate } from "../../lib/utils";

import "react-calendar/dist/Calendar.css";

const MeetingCalender = ({ date, setDate, time, setTime, handleNext }) => {
  return (
    <div className="relative p-4 flex-1 h-full">
      <h2 className="text-lg text-[#242938] font-semibold mb-4">
        Select a Date & Time
      </h2>
      {/* calender */}

      <div className="flex gap-4">
        <div className="h-full flex-1">
          <Calendar
            onChange={setDate}
            value={date}
            minDate={new Date()}
            next2Label={null}
            prev2Label={null}
            tileClassName="text-xs sm:text-sm"
            className="border-none"
          />
        </div>

        {/* time slots */}
        {date && (
          <div className="w-[25%] h-full">
            <h2 className="text-sm mb-4">{formatDate(date)}</h2>
            <TimeSlots time={time} setTime={setTime} />
          </div>
        )}
      </div>
      {time && <Buttons time={time} handleNext={handleNext} />}
    </div>
  );
};

const Buttons = ({ time, handleNext }) => {
  return (
    <div className="absolute bottom-2 z-50 flex justify-end gap-2 w-[calc(100%-32px)] bg-white py-2">
      <button className="bg-[#666666] text-xs text-white px-6 py-2 rounded">
        {time}
      </button>
      <button
        onClick={handleNext}
        className="bg-[#006bfc] text-xs text-white px-6 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default MeetingCalender;
