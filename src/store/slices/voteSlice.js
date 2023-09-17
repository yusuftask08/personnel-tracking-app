import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "../../api/fetcher";
import { getEmloyees } from "../../store/slices/dataSlice";

export const voteForEmployee = createAsyncThunk(
  "vote/voteForEmployee",
  async (employee, { dispatch }) => {
    const { id, newVoteCount } = employee;
    try {
      await fetcher(`employess/${id}`, "PUT", "", {
        vote: newVoteCount,
      });
      dispatch(getEmloyees());
    } catch (error) {
      throw error;
    }
  }
);

const voteSlice = createSlice({
  name: "vote",
  initialState: {
    data: [],
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(voteForEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(voteForEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(voteForEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default voteSlice.reducer;
