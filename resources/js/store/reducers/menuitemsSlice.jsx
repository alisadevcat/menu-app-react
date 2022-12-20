import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

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
export const addMenuItems = createAsyncThunk(
    "menusections/addMenuItems",
    async (menuItems) => {
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(menuItems),
        };

        const response = await fetch("/api/menu-items", options);

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
            // console.log(current(state.menuitems), "cs");

            state.menuitems.forEach((item, i) => {
                const index = item.findIndex((e) => e.id === action.payload.id);
                if (index >= 0) {
                    state.menuitems[i][index] = action.payload;
                }
            });
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
        [addMenuItems.pending]: (state) => {
            state.isLoaded = false;
            state.error = null;
        },
        [addMenuItems.fulfilled]: (state) => {
            state.isLoaded = true;
        },
        [addMenuItems.rejected]: (state) => {
            state.isLoaded = true;
            state.error = null;
        },
    },
});

export const { updateMenuItems } = menuitemsSlice.actions;
export default menuitemsSlice.reducer;
