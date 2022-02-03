import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './authThunk';

const initialState = {
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
    }
  }
});

export default authSlice.reducer;
