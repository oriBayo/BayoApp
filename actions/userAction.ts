import { db, auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import User from '@/types';

export const signUp = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: name,
    });

    await setDoc(doc(db, 'users', user.uid), {
      name: name,
      email: email,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error during sign-up:', (error as Error).message);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
  } catch (error) {
    console.error('Error during sign-in:', (error as Error).message);
    throw error;
  }
};

export const getCurrentUser = async () => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    try {
      const userCollection = collection(db, 'users');
      const userDocRef = doc(userCollection, currentUser.uid);
      const userSnapshot = await getDoc(userDocRef);
      const userData = userSnapshot.data();

      return {
        name: userData?.name,
        email: userData?.email,
        createdAt: userData?.createdAt,
      };
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  } else {
    return null;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error during sign-out:', error);
    throw error;
  }
};
