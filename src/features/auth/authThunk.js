import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

import { auth, db } from '../../firebase-config';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ fullname, email, password }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: fullname,
        photoURL: `https://avatars.dicebear.com/api/initials/${fullname}.svg`
      });
      await setDoc(doc(db, 'users', auth.currentUser.uid), { fullname, email });
      return auth.currentUser.toJSON();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return auth.currentUser.toJSON();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const sendPasswordResetLink = createAsyncThunk(
  'auth/sendPasswordResetLink',
  async ({ email }, { rejectWithValue }) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return 'Password reset link sent successfully';
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
