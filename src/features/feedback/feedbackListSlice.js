import { createSlice } from '@reduxjs/toolkit';

import {
  createFeedback,
  fetchFeedbackList,
  updateFeedback,
  deleteFeedback,
  upvoteFeedback,
  downvoteFeedback
} from './feedbackListThunk';

const initialState = {
  isLoading: true,
  feedbackList: [],
  filteredFeedbackList: [],
  activeCategory: 'All'
};

const feedbackListSlice = createSlice({
  name: 'feedbackList',
  initialState,
  reducers: {
    filterFeedbackList: (state, { payload }) => {
      state.activeCategory = payload;
      if (payload === 'All') {
        state.filteredFeedbackList = state.feedbackList;
      } else {
        const updatedList = state.feedbackList.filter((item) => item.category === payload);
        state.filteredFeedbackList = updatedList;
      }
    }
  },
  extraReducers: {
    [createFeedback.fulfilled]: (state, { payload }) => {
      state.feedbackList.unshift(payload);
      state.filteredFeedbackList.unshift(payload);
    },
    [fetchFeedbackList.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchFeedbackList.fulfilled]: (state, { payload }) => {
      state.feedbackList = payload;
      state.filteredFeedbackList = payload;
      state.isLoading = false;
    },
    [fetchFeedbackList.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateFeedback.fulfilled]: (state, { payload }) => {
      const updatedList = state.feedbackList.map((item) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });
      state.feedbackList = updatedList;
      state.filteredFeedbackList = updatedList;
    },
    [deleteFeedback.fulfilled]: (state, { payload }) => {
      const updatedList = state.feedbackList.filter((item) => item.id !== payload);
      state.feedbackList = updatedList;
      state.filteredFeedbackList = updatedList;
    },
    [upvoteFeedback.fulfilled]: (state, { payload }) => {
      const updatedList = state.feedbackList.map((item) => {
        if (item.id === payload.feedbackID) {
          return { ...item, upvotes: [...item.upvotes, payload.userID] };
        }
        return item;
      });
      state.feedbackList = updatedList;
      state.filteredFeedbackList = updatedList;
    },
    [downvoteFeedback.fulfilled]: (state, { payload }) => {
      const updatedList = state.feedbackList.map((item) => {
        if (item.id === payload.feedbackID) {
          const upvotes = item.upvotes.filter((item) => item !== payload.userID);
          return { ...item, upvotes };
        }
        return item;
      });
      state.feedbackList = updatedList;
      state.filteredFeedbackList = updatedList;
    }
  }
});

export const { filterFeedbackList } = feedbackListSlice.actions;

export default feedbackListSlice.reducer;
