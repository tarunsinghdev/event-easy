import {
  LISTEN_TO_CURRENT_USER_PROFILE,
  LISTEN_TO_FOLLOWERS,
  LISTEN_TO_FOLLOWINGS,
  LISTEN_TO_SELECTED_USER_PROFILE,
  LISTEN_TO_USER_EVENTS,
  LISTEN_TO_USER_PHOTOS,
  SET_FOLLOW_USER,
  SET_UNFOLLOW_USER,
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

export const listenToFollowers = (followers) => {
  return {
    type: LISTEN_TO_FOLLOWERS,
    payload: followers,
  };
};

export const listenToFollowings = (followings) => {
  return {
    type: LISTEN_TO_FOLLOWINGS,
    payload: followings,
  };
};

export const setFollowUser = () => {
  return {
    type: SET_FOLLOW_USER,
  };
};

export const setUnfollowUser = () => {
  return {
    type: SET_UNFOLLOW_USER,
  };
};
