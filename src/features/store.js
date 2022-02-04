import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import feedbackListReducer from './feedback/feedbackListSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    feedbackList: feedbackListReducer
  }
});

export default store;
