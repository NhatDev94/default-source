import { fakeApi } from "@/fakeApi";
import { AuthState, SignInCredentials, SignInResponse } from "@/types/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  token: "",
};

export const signIn = createAsyncThunk<
  SignInResponse["data"],
  SignInCredentials,
  { rejectValue: string }
>("auth/signIn", async (credentials, { rejectWithValue }) => {
  try {
    const res = (await fakeApi.signIn(credentials)) as SignInResponse;
    return res.data;
  } catch (error) {
    return rejectWithValue("Login failed");
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { signIn } = userSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
