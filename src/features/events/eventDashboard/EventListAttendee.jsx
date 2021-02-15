import React from 'react';
import { Link } from 'react-router-dom';
import { Image, List } from 'semantic-ui-react';

const EventListAttendee = ({ attendee }) => {
  return (
    <List.Item as={Link} to={`/profile/${attendee.id}`}>
      <Image
        size="mini"
        circular
        src={attendee.photoURL || '/assets/user.png'}
      />
    </List.Item>
  );
};

export default EventListAttendee;
