import { configureStore } from "@reduxjs/toolkit";
import branchesSlice from "./reducers/branchesSlice";

export const store = configureStore({
    reducer: {
        branches: branchesSlice,
    },
});
