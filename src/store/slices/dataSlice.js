import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "../../api/fetcher";

export const getEmloyees = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await fetcher("employess");
    return response;
  } catch (error) {
    throw error;
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmloyees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmloyees.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getEmloyees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
