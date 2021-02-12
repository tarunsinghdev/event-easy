import {
  LISTEN_TO_CURRENT_USER_PROFILE,
  LISTEN_TO_SELECTED_USER_PROFILE,
  LISTEN_TO_USER_EVENTS,
  LISTEN_TO_USER_PHOTOS,
} from './actionTypes';

export const listenToCurrentUserProfile = (profile) => {
  return {
    type: LISTEN_TO_CURRENT_USER_PROFILE,
    payload: profile,
  };
};

export const listenToSelectedUserProfile = (profile) => {
  return {
    type: LISTEN_TO_SELECTED_USER_PROFILE,
    payload: profile,
  };
};

export const listenToUserPhotos = (photos) => {
  return {
    type: LISTEN_TO_USER_PHOTOS,
    payload: photos,
  };
};

export const listenToUserEvents = (events) => {
  return {
    type: LISTEN_TO_USER_EVENTS,
    payload: events,
  };
};
