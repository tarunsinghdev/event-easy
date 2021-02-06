import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD_0ds8RSfuE1Pv65j2mzCoj5sFJVpx3JE',
  authDomain: 'events-easy.firebaseapp.com',
  projectId: 'events-easy',
  storageBucket: 'events-easy.appspot.com',
  messagingSenderId: '1014412122028',
  appId: '1:1014412122028:web:ae754c55faa1505d188c09',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
