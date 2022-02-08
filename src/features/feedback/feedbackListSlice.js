import { createSlice } from '@reduxjs/toolkit';

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
    loadFeedbackList: (state, { payload }) => {
      state.feedbackList = payload;
      state.filteredFeedbackList = payload;
      state.isLoading = false;
    },
    filterFeedbackList: (state, { payload }) => {
      state.activeCategory = payload;
      if (payload === 'All') {
        state.filteredFeedbackList = state.feedbackList;
      } else {
        const updatedList = state.feedbackList.filter((item) => item.category === payload);
        state.filteredFeedbackList = updatedList;
      }
    }
  }
});

export const { filterFeedbackList, loadFeedbackList } = feedbackListSlice.actions;

export default feedbackListSlice.reducer;
