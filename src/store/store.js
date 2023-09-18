import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import voteReducer from "./slices/voteSlice";
import employeeReducer from "./slices/employeeSlice";
import { loadState, saveState } from "./storage";
import userInteractionLogger from "./middleware";

const initialState = loadState();

export const store = configureStore({
  reducer: {
    data: dataReducer,
    vote: voteReducer,
    employee: employeeReducer,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userInteractionLogger),
});

store.subscribe(() => {
  saveState(store.getState());
});
