export const buildCalendar = (initialDate: any) => {
  const startDate = initialDate.clone().startOf("month").startOf("week");
  // create an end-of-the-month date for the Calendar month
  const endDate = initialDate.clone().endOf("month").endOf("week");
  // capture current date as initial Date - date objects are mutable so we need to clone the initial Date before acting on it
  // this lets us measure the calndar by using months-weeks

  // create an end-of-the-month date for the Calendar month
  const calendarStartDay = startDate.clone().subtract(1, "day");
  const calendar:any = [];

  while (calendarStartDay.isBefore(endDate, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          return calendarStartDay.add(1, "day").clone();
        })
    );
  }

  return calendar;
};
