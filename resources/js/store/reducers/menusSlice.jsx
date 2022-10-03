import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addMenu = createAsyncThunk(
    "menus/addMenu",
    async (menu_object) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(menu_object),
        };

        const response = await fetch("/api/menus", options);

        if (response.ok) {
            const data = await response.json();
            console.log(data, 'data');
            return data;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
);

const menusSlice = createSlice({
    name: "menus",
    initialState: {
        menus: [],
        isLoaded: false,
        error: null,
        message: null,
        menu: null,
    },
    reducers: {},
    extraReducers: {
        [addMenu.pending]: (state) => {
            state.isLoaded = false;
            state.error = null;
        },
        [addMenu.fulfilled]: (state, action) => {
            state.isLoaded = true;
            state.message = action.payload;
            console.log(action.payload);
            // state.menu = action.payload.menu
        },
        [addMenu.rejected]: (state) => {
            state.isLoaded = true;
        },
    },
});

export default menusSlice.reducer;
