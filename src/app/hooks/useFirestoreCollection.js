import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../features/store/reducers/asyncReducer';
import { dataFromSnapshot } from '../firestore/firestoreService';

const useFirestoreCollection = ({ query, data, deps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        const docs = snapshot.docs.map((docs) => dataFromSnapshot(docs));
        data(docs);
        dispatch(asyncActionFinish());
      },
      (error) => dispatch(asyncActionError(error))
    );
    return () => {
      unsubscribe();
    };
  }, deps); //eslint-disable-line react-hooks/exhaustive-deps
};

export default useFirestoreCollection;
