import { app } from '../firebaseConfig';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(app);

export const createUser = async (user: any) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return docRef;
  } catch (error) {
    console.error('Error saving item to DB:', (error as Error).message);
    throw error;
  }
};
