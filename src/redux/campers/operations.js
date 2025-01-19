import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page, perPage }, thunkAPI) => {
    try {
      const res = await axios.get(`campers/?page=${page}&limit=${perPage}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "campers/fetchCamper",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`campers/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
