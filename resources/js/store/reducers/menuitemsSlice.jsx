import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
    "menuitems/fetchItems",
    async (ids) => {
        const response = await fetch(`/api/menu-items/all/${ids}`);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
);

const menuitemsSlice = createSlice({
    name: "menuitems",
    initialState: { menuitems: [], error: null, isLoaded: false, menuitem: {} },
    reducers: {
        updateMenuItems: (state, action) => {
            const index = state.menuitems.findIndex(
                (e) => e.id === action.payload.id
            );
            state.menuitems[index] = action.payload;
            console.log(state.menuitems);
        },
    },
    extraReducers: {
        [fetchItems.pending]: (state) => {
            state.isLoaded = true;
        },
        [fetchItems.fulfilled]: (state, action) => {
            state.isLoaded = true;
            state.menuitems = action.payload;
        },
        [fetchItems.rejected]: (state) => {
            state.isLoaded = true;
        },
    },
});

export const { updateMenuItems } = menuitemsSlice.actions;
export default menuitemsSlice.reducer;
