import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feedbackList: []
};

const feedbackListSlice = createSlice({
  name: 'feedbackList',
  initialState,
  reducers: {}
});

export default feedbackListSlice.reducer;
