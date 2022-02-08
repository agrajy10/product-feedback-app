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
    },

    sortFeedbackList: (state, { payload }) => {
      let sortedList;
      if (payload === 'most-upvotes') {
        sortedList = state.filteredFeedbackList.sort((a, b) => b.upvotes.length - a.upvotes.length);
      } else if (payload === 'least-upvotes') {
        sortedList = state.filteredFeedbackList.sort((a, b) => a.upvotes.length - b.upvotes.length);
      } else if (payload === 'most-comments') {
        sortedList = state.filteredFeedbackList.sort(
          (a, b) => b.comments.length - a.comments.length
        );
      } else {
        sortedList = state.filteredFeedbackList.sort(
          (a, b) => a.comments.length - b.comments.length
        );
      }
      state.filteredFeedbackList = sortedList;
    }
  }
});

export const { filterFeedbackList, loadFeedbackList, sortFeedbackList } = feedbackListSlice.actions;

export default feedbackListSlice.reducer;
