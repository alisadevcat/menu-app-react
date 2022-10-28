import { configureStore } from "@reduxjs/toolkit";
import branchesSlice from "./reducers/branchesSlice";
import menutypesSlice from "./reducers/menutypesSlice";
import menusSlice from "./reducers/menusSlice";
import menusectionsSlice from "./reducers/menusectionsSlice";

export const store = configureStore({
    reducer: {
        branches: branchesSlice,
        menutypes: menutypesSlice,
        menus: menusSlice,
        menusections: menusectionsSlice
    },
});
