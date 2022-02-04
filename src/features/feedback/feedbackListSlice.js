import { createSlice } from '@reduxjs/toolkit';

import { fetchFeedbackList } from './feedbackListThunk';

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
    }
  }
});

export default feedbackListSlice.reducer;
