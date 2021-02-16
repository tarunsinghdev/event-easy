import {
  CLEAR_EVENTS,
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
  LISTEN_TO_EVENT_CHAT,
  LISTEN_TO_SELECTED_EVENT,
  SET_FILTER,
  SET_START_DATE,
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

export const fetchEvents = (filter, startDate, limit, lastDocSnapshot) => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    try {
      const snapshot = await fetchEventsFromFirestore(
        filter,
        startDate,
        limit,
        lastDocSnapshot
      ).get();
      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      const moreEvents = snapshot.docs.length >= limit;
      const events = snapshot.docs.map((doc) => dataFromSnapshot(doc));
      dispatch({
        type: FETCH_EVENTS,
        payload: { events, moreEvents, lastVisible },
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
};

export const setFilter = (value) => {
  return (dispatch) => {
    dispatch(clearEvents());
    dispatch({ type: SET_FILTER, payload: value });
  };
};

export const setStartDate = (date) => {
  return (dispatch) => {
    dispatch(clearEvents());
    dispatch({ type: SET_START_DATE, payload: date });
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
