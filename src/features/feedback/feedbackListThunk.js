import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc } from 'firebase/firestore';

import { db, auth } from '../../firebase-config';

export const createFeedback = createAsyncThunk(
  'feedbackList/createFeedback',
  async ({ title, category, status, details, upvotes }) => {
    try {
      await addDoc(collection(db, 'feedback'), {
        title,
        category,
        status,
        details,
        upvotes,
        createdBy: auth.currentUser.uid
      });
    } catch (error) {
      throw error.message;
    }
  }
);
