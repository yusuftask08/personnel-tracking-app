import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "../../api/fetcher";

export const getEmloyeeDetailData = createAsyncThunk(
  "employee/fetchData",
  async (id) => {
    try {
      const response = await fetcher(`employess/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    loading: false,
    error: null,
    employeeData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmloyeeDetailData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmloyeeDetailData.fulfilled, (state, action) => {
        state.employeeData = action.payload;
      })
      .addCase(getEmloyeeDetailData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
