import { toast } from 'react-toastify';
import firebase from '../../app/config/firebase';
import { setUserProfileData } from './firestoreService';

export const signInWithEmail = (creds) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
};

export const signOutFirebase = () => {
  return firebase.auth().signOut();
};

export const registerInFirebase = async (creds) => {
  const result = await firebase
    .auth()
    .createUserWithEmailAndPassword(creds.email, creds.password);
  await result.user.updateProfile({
    displayName: creds.displayName,
  });
  return await setUserProfileData(result.user);
};

export const socialLogin = async (selectedProvider) => {
  let provider;
  if (selectedProvider === 'facebook') {
    provider = new firebase.auth.FacebookAuthProvider();
  }
  if (selectedProvider === 'google') {
    provider = new firebase.auth.GoogleAuthProvider();
  }
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    if (result.additionalUserInfo.isNewUser) {
      await setUserProfileData(result.user);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateUserPassword = (creds) => {
  const user = firebase.auth().currentUser; //This is synchronous as this information is stored in our local storage
  return user.updatePassword(creds.newPassword1); //returns a promise
};
