import React from 'react';
import EventListItem from './EventListItem';

const EventList = (props) => {
  return (
    <>
      {props.events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
};

export default EventList;
