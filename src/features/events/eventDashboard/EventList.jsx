import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ events, selectEvent, deleteEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
};

export default EventList;
