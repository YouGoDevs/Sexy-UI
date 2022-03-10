import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import { buildCalendar } from "../utils/build";

const Day = styled.div`
  display: flex;
  flex-direction: row;
  color: blue;
  justify-content: center;
  border: 1px solid red;

  div {
    margin-right: 10px;
  }
`;

export const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [initialDate, setInitialDate] = useState(moment());

  /*
        We need a datastructure to implement the calendar system based on months containing weeks and weeks containing days
        Arrays work perfectly...so we're looking at a matrix - arrays of arrays

  */

  useEffect(() => {
    setCalendar(buildCalendar(initialDate));
  }, [initialDate]);

  return (
    <div className="New Div">
      {calendar.map((week: any) => {
        return (
          <Day>
            {week.map((day: any) => {
              return (
                <div
                  onClick={() => {
                    setInitialDate(day);
                    
                  }}
                >
                  {day.format("D")}{" "}
                </div>
              );
            })}
          </Day>
        );
      })}
    </div>
  );
};
