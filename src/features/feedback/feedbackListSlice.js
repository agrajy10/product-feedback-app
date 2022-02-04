import { createSlice } from '@reduxjs/toolkit';

import {
  createFeedback,
  fetchFeedbackList,
  updateFeedback,
  deleteFeedback
} from './feedbackListThunk';

const initialState = {
  isLoading: true,
  feedbackList: []
};

const feedbackListSlice = createSlice({
  name: 'feedbackList',
  initialState,
  reducers: {},
  extraReducers: {
    [createFeedback.fulfilled]: (state, { payload }) => {
      state.feedbackList.unshift(payload);
    },
    [fetchFeedbackList.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchFeedbackList.fulfilled]: (state, { payload }) => {
      state.feedbackList = payload;
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
    },
    [deleteFeedback.fulfilled]: (state, { payload }) => {
      const updatedList = state.feedbackList.filter((item) => item.id !== payload);
      state.feedbackList = updatedList;
    }
  }
});

export default feedbackListSlice.reducer;
