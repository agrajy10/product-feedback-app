import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

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

export const updateFeedback = createAsyncThunk(
  'feedbackList/updateFeedback',
  async ({ values, feedbackID }) => {
    try {
      await updateDoc(doc(db, 'feedback', feedbackID), values);
      return { id: feedbackID, data: values };
    } catch (error) {
      throw error.message;
    }
  }
);

export const deleteFeedback = createAsyncThunk(
  'feedbackList/deleteFeedback',
  async (feedbackID) => {
    try {
      await deleteDoc(doc(db, 'feedback', feedbackID));
      return feedbackID;
    } catch (error) {
      throw error.message;
    }
  }
);
