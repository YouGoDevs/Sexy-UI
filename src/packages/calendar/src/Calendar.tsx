import React from "react";
import moment from "moment";

export const Calendar = () => {
  // capture current date as initial Date - date objects are mutable so we need to clone the initial Date before acting on it
  // this lets us measure the calndar by using months-weeks
  const initialDate = moment();
  // create a start-of-the-month date for the Calendar reference
  const startDate = initialDate.clone().startOf("month").startOf("week");
  // create an end-of-the-month date for the Calendar month
  const endDate = initialDate.clone().endOf("month").endOf("week");
  const calendarStartDay = startDate.clone().subtract(1, "day");

  console.log("start date", startDate.format("DD/MM/YY"));
  console.log("calendar day", calendarStartDay.format("DD/MM/YY"));
  console.log("end date", endDate.format("DD/MM/YY"));

  /*
        We need a datastructure to implement the calendar system based on months containing weeks and weeks containing days
        Arrays work perfectly...so we're looking at a matrix - arrays of arrays

    */
  const calendar = [];

  while (calendarStartDay.isBefore(endDate, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          return calendarStartDay.add(1, "day").clone();
        })
    );
  }

  return (
    <div>
      {calendar.map((week: any) => {
        <div>
          {week.map((day: any) => {
            <div>{day.format("D")} </div>;
            console.log(day.format("D"));
          })}
        </div>;
      })}
    </div>
  );
};
