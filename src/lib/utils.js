import { timeSlots } from "../data/data";

//we can use date-fns instead
export const formatDate = date => {
  // Array of weekday names and month names
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the weekday and month names
  const weekdayName = weekdays[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();

  // Format the date
  const formattedDate = `${weekdayName}, ${monthName} ${day}`;

  return formattedDate;
};

export const getDateAndTime = (date, time) => {
  const dateAndTime = `${time} - ${
    timeSlots[timeSlots.indexOf(time) + 1]
  }, ${formatDate(date)}, 2024`;

  return dateAndTime;
};
