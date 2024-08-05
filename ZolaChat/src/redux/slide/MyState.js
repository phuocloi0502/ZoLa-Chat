import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const MyState = createSlice({
  name: "MyState",
  initialState: {
    showSignUpForm: false,
    isLogin: false,
  },
  reducers: {
    setShowSignUpForm: (state, action) => {
      state.showSignUpForm = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});
export const { setShowSignUpForm, setIsLogin } = MyState.actions;
export default MyState.reducer;
