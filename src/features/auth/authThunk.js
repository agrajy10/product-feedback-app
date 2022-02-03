import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

import { auth, db } from '../../firebase-config';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ fullname, email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: fullname
      });
      await setDoc(doc(db, 'users', auth.currentUser.uid), { fullname, email });
      return auth.currentUser.toJSON();
    } catch (error) {
      throw error.message;
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return auth.currentUser.toJSON();
  } catch (error) {
    throw error.message;
  }
});

export const sendPasswordResetLink = createAsyncThunk(
  'auth/sendPasswordResetLink',
  async ({ email }) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return 'Password reset link sent successfully';
    } catch (error) {
      throw error.message;
    }
  }
);
