import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./operations.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    data: {
      items: [],
      total: 0,
    },
    camper: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamper.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
