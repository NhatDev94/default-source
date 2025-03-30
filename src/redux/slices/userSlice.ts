import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  id: 0,
  userName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    signOut: (state) => {
      return {
        id: 0,
        userName: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut } = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;
