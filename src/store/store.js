import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import voteReducer from "./slices/voteSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    vote: voteReducer,
  },
});
