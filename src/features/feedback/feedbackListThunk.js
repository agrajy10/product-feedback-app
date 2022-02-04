import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs } from 'firebase/firestore';

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

export const fetchFeedbackList = createAsyncThunk('feedbackList/fetchFeedbackList', async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'feedback'));
    const feedbackListData = querySnapshot.docs.map((doc) => {
      return { id: doc.id, data: doc.data() };
    });
    return feedbackListData;
  } catch (error) {
    throw error.message;
  }
});
