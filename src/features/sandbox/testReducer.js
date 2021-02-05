import { delay } from '../../app/common/util/util';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../store/reducers/asyncReducer';
import { toast } from 'react-toastify';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const initialState = {
  data: 42,
};

export const increment = (amount) => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      dispatch({ type: INCREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFinish());
    } catch (err) {
      dispatch(asyncActionError(err));
    }
  };
};

export const decrement = (amount) => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      dispatch({ type: DECREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFinish());
    } catch (err) {
      dispatch(asyncActionError(err));
      toast.error(err);
    }
  };
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
