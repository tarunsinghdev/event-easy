import { SIGN_IN_USER, SIGN_OUT_USER } from './actionTypes';
import { APP_LOADED } from '../reducers/asyncReducer';
import firebase from '../../../app/config/firebase';
import {
  dataFromSnapshot,
  getUserProfile,
} from '../../../app/firestore/firestoreService';
import { listenToCurrentUserProfile } from '../../store/actions/profileActions';

export const signInUser = (user) => {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
};

export const verifyAuth = () => {
  return (dispatch) => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
        const profileRef = getUserProfile(user.uid);
        profileRef.onSnapshot((snapshot) => {
          dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)));
          dispatch({ type: APP_LOADED });
        });
      } else {
        dispatch(signOutUser());
        dispatch({ type: APP_LOADED });
      }
    });
  };
};

export const signOutUser = () => {
  return {
    type: SIGN_OUT_USER,
  };
};
