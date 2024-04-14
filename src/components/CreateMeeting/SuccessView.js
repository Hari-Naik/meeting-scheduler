import {
  faCalendar,
  faCircleCheck,
  faEarth,
  faUser,
  faVideo,
  faG,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Item } from "./MeetingPreview";
import { timeSlots } from "../../data/data";
import { formatDate, getDateAndTime } from "../../lib/utils";
import SocialButton from "../SocialButton";

const SuccessView = ({ date, time }) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-2">
        <img
          src="/images/profile.png"
          alt="profile"
          className="h-12 w-12 rounded-full"
        />
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircleCheck} className="text-[#128063]" />
          <span className="text-2xl font-semibold">You are scheduled</span>
        </div>
        <small className=" font-light">
          A calender invitation has been sent to your email address.
        </small>

        <div className="w-full max-w-md flex flex-col gap-2 p-4 border border-gray-300 rounded-md">
          <h2 className="text-base font-semibold">Fibery Demo</h2>
          <Item text="Harinaik Meravath" icon={faUser} />
          <Item text={getDateAndTime(date, time)} icon={faCalendar} />
          <Item text="UK, Ireland, Lisbon Time" icon={faEarth} />
          <Item text="Web conferencing details to follow." icon={faVideo} />
        </div>
        <hr className="w-full max-w-md mt-2" />

        <div className="flex flex-col w-full max-w-md">
          <strong className="text-sm">
            Schedule your own meetings with Calendly for free.
          </strong>
          <small>Eliminate the back-nad-forth emails for finding time.</small>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <SocialButton icon={faG} text="Sign up with Google" />
            <SocialButton icon={""} text="Sign up with Microsoft" />
          </div>
          <button className="text-xs text-[#006bfc] mt-2">
            Sign up with work email
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
