import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addMenu = createAsyncThunk(
    "menus/addMenu",
    async (menu_object) => {
        // const options = {
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json, text/plain, */*",
        //         "Content-Type": "application/json",
        //     },
        //     mode: 'cors',
        //     body: JSON.stringify(menu_object),
        // };

        // const response = await fetch("/api/menus", options);

        axios
            .post("/api/menus", menu_object)
            .then(function (response) {
                console.log(response.data);
                return response.data;
              })
              .catch(function (error) {
                console.log(error);
              });

        // console.log(options);

        // if (response.ok) {
        //     const data = await response.json();
        //     console.log(data, "data");
        //     return data;
        // } else {
        //     console.log("Ошибка HTTP: " + response.status);
        // }
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
            // state.message = action.payload;
            console.log(action.payload, "payload");
            // state.menu = action.payload.menu
        },
        [addMenu.rejected]: (state) => {
            state.isLoaded = true;
        },
    },
});

export default menusSlice.reducer;
