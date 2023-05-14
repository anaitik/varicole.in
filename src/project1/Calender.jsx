import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const events = [
    {
      title: 'Meeting with John',
      start: new Date(2023, 3, 3, 10, 30, 0),
      end: new Date(2023, 3, 3, 11, 0, 0),
    },
    {
      title: 'Lunch with Jane',
      start: new Date(2023, 3, 4, 12, 0, 0),
      end: new Date(2023, 3, 4, 13, 0, 0),
    },
  ];

  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar;
