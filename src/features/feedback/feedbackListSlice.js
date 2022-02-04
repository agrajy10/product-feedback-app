import { createSlice } from '@reduxjs/toolkit';

import { fetchFeedbackList, updateFeedback, deleteFeedback } from './feedbackListThunk';

const initialState = {
  isLoading: false,
  feedbackList: []
};

const feedbackListSlice = createSlice({
  name: 'feedbackList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFeedbackList.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchFeedbackList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.feedbackList = payload;
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
