import { SIGN_IN_USER, SIGN_OUT_USER } from '../actions/actionTypes';

const initialState = {
  authenticated: false,
  currentUser: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: payload.photoURL,
          uid: payload.uid,
          displayName: payload.displayName,
          providerId: payload.providerData[0].providerId,
        },
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
