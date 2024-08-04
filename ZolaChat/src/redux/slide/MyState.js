import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const MyState = createSlice({
  name: "MyState",
  initialState: {
    showSignUpForm: false,
  },
  reducers: {
    setShowSignUpForm: (state, action) => {
      state.showSignUpForm = action.payload;
      console.log(state.showSignUpForm);
    },
  },
});
export const { setShowSignUpForm } = MyState.actions;
export default MyState.reducer;
