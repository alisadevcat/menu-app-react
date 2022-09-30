import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addMenu = createAsyncThunk(
    "menus/addMenu",
    async (menu_object) => {
        const response = await fetch("/api/menus", {
            method: "POST",
            body: JSON.stringify(menu_object),
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
);

const menusSlice = createSlice({
    name: "menus",
    initialState: { menus: [], isLoaded: false, error: null, status: null },
    reducers: {},
    extraReducers: {
        [addMenu.pending]: (state) => {
            state.isLoaded = false;
            state.error = null;
        },
        [addMenu.fulfilled]: (state, action) => {
            state.isLoaded = true;
            state.status = action.payload;
        },
        [addMenu.rejected]: (state) => {
            state.isLoaded = true;
        },
    },
});

export default menusSlice.reducer;
