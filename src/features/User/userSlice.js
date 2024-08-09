import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  fetchLoggedInUserOrders } from "./userAPI";


const initialState = {
  UserOrders: [],
  status: "idle",
};

export const fetchLoggedInUserOrderAsync = createAsyncThunk(
  "user/fetchLoggedInUser",
  async (id) => {
    const response = await fetchLoggedInUserOrders(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.UserOrders= action.payload;
      });
  },
});

export const selectUserOrders = (state) => state.user.UserOrders;

export const { increment } = userSlice.actions;



export default userSlice.reducer;
