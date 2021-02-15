import {
  CLEAR_EVENTS,
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
  LISTEN_TO_EVENT_CHAT,
  LISTEN_TO_SELECTED_EVENT,
  UPDATE_EVENT,
} from './actionTypes';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../reducers/asyncReducer';
// import { fetchSampleData } from '../../../app/api/mockApi';
import {
  dataFromSnapshot,
  fetchEventsFromFirestore,
} from '../../../app/firestore/firestoreService';

export const fetchEvents = (predicate, limit, lastDocSnapshot) => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    try {
      const snapshot = await fetchEventsFromFirestore(
        predicate,
        limit,
        lastDocSnapshot
      ).get();
      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      const moreEvents = snapshot.docs.length >= limit;
      const events = snapshot.docs.map((doc) => dataFromSnapshot(doc));
      dispatch({ type: FETCH_EVENTS, payload: { events, moreEvents } });
      dispatch(asyncActionFinish());
      return lastVisible;
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
};

export const listenToSelectedEvent = (event) => {
  return {
    type: LISTEN_TO_SELECTED_EVENT,
    payload: event,
  };
};

export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
};

export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};

export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
};

export const listenToEventChat = (comments) => {
  return {
    type: LISTEN_TO_EVENT_CHAT,
    payload: comments,
  };
};

export const clearEvents = () => {
  return {
    type: CLEAR_EVENTS,
  };
};
