import {
  faArrowLeft,
  faCalendar,
  faClock,
  faEarth,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { timeSlots } from "../../data/data";
import { formatDate, getDateAndTime } from "../../lib/utils";

const MeetingPreview = ({
  date = new Date(),
  time,
  showMeetingDetails,
  setShowMeetingDetails,
}) => {
  const handleClickLeftArrow = () => {
    setShowMeetingDetails(false);
  };

  return (
    <div
      className={`relative w-full h-max md:h-full ${
        date ? "md:w-[30%]" : "md:w-1/2"
      } flex md:flex-col border-b md:border-b-0 md:border-r border-gray-300`}>
      <div className="w-full flex justify-center items-center md:border-b border-gray-300 py-2">
        <img src="/images/logo.svg" alt="fibery" className="h-20 w-20" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-2xl text-[#242938] font-semibold">Fibery Demo</h2>
        <Item text={"45 min"} icon={faClock} />
        {showMeetingDetails && (
          <>
            <Item text={getDateAndTime(date, time)} icon={faCalendar} />
            <Item text={"UK, Ireland, Lisbon time"} icon={faEarth} />
          </>
        )}

        <p className="text-sm text-[#242938]">
          Book a meeting with our Fibery team. Talk to a real person about how
          to get your processes set up with us 🦄 or not 💩{" "}
        </p>
      </div>
      {showMeetingDetails && (
        <div
          onClick={handleClickLeftArrow}
          className="absolute top-2 left-2 h-8 w-8 rounded-full bg-white shadow flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon icon={faArrowLeft} className="text-[#006bfc]" />
        </div>
      )}

      <span className="absolute bottom-4 left-4 text-xs text-[#006bfc]">
        Cookie Settings
      </span>
    </div>
  );
};

export const Item = ({ text, icon }) => {
  return (
    <div className="text-sm text-gray-500">
      <FontAwesomeIcon icon={icon} />
      <span className="ml-2">{text}</span>
    </div>
  );
};

export default MeetingPreview;
