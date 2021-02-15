import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import EventListItem from './EventListItem';

const EventList = ({ events, getNextEvents, loading, moreEvents }) => {
  return (
    <>
      {events.length !== 0 && (
        <InfiniteScroll
          pageStart={0}
          loadMore={getNextEvents}
          hasMore={!loading && moreEvents}
          initialLoad={false}
        >
          {events.map((event) => (
            <EventListItem event={event} key={event.id} />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
};

export default EventList;
