import { configureStore } from "@reduxjs/toolkit";
import branchesSlice from "./reducers/branchesSlice";
import { menutypeSlice } from "./reducers/menutypesSlice";

export const store = configureStore({
    reducer: {
        branches: branchesSlice,
        menutypes: menutypeSlice
    },
});
