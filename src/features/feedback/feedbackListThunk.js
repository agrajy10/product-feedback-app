import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';

import { db, auth } from '../../firebase-config';

export const createFeedback = createAsyncThunk(
  'feedbackList/createFeedback',
  async ({ title, category, status, details, upvotes }, { rejectWithValue }) => {
    const feedback = {
      title,
      category,
      status,
      details,
      upvotes,
      createdBy: auth.currentUser.uid,
      comments: []
    };
    try {
      const feedbackDocRef = await addDoc(collection(db, 'feedback'), feedback);
      return {
        id: feedbackDocRef.id,
        ...feedback
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFeedbackList = createAsyncThunk(
  'feedbackList/fetchFeedbackList',
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'feedback'));
      const feedbackListData = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      return feedbackListData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateFeedback = createAsyncThunk(
  'feedbackList/updateFeedback',
  async ({ values, feedbackID }, { rejectWithValue }) => {
    try {
      await updateDoc(doc(db, 'feedback', feedbackID), values);
      return { id: feedbackID, ...values };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFeedback = createAsyncThunk(
  'feedbackList/deleteFeedback',
  async (feedbackID, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, 'feedback', feedbackID));
      return feedbackID;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const upvoteFeedback = createAsyncThunk(
  'feedbackList/upvoteFeedback',
  async ({ feedbackID, userID }, { rejectWithValue }) => {
    try {
      await updateDoc(doc(db, 'feedback', feedbackID), {
        upvotes: arrayUnion(userID)
      });
      return { feedbackID, userID };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const downvoteFeedback = createAsyncThunk(
  'feedbackList/downvoteFeedback',
  async ({ feedbackID, userID }, { rejectWithValue }) => {
    try {
      await updateDoc(doc(db, 'feedback', feedbackID), {
        upvotes: arrayRemove(userID)
      });
      return { feedbackID, userID };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addComment = createAsyncThunk(
  'feedbackList/addComment',
  async ({ name, email, comment, feedbackID }, { rejectWithValue }) => {
    const data = {
      name,
      email,
      comment
    };
    try {
      await updateDoc(doc(db, 'feedback', feedbackID), {
        comments: arrayUnion(data)
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
