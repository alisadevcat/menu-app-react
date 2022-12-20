import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setMenu = createAsyncThunk("menus/setMenu", async (params) => {
    const response = await fetch(`/api/menus/template/${params}`);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
});

export const addMenu = createAsyncThunk("menus/addMenu", async (menuObject) => {
    const options = {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(menuObject),
    };

console.log( JSON.stringify(menuObject));

    const response = await fetch("/api/menus", options);

    console.log(response, 'response');
    
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
});

const menusSlice = createSlice({
    name: "menus",
    initialState: {
        menus: [],
        isLoaded: false,
        error: null,
        menu: null,
        baseTemplateId: null,
    },
    reducers: {
        updateMenu: (state, action) => {
            state.menu = action.payload;
        },
    },
    extraReducers: {
        [setMenu.pending]: (state) => {
            state.isLoaded = false;
            state.error = null;
        },
        [setMenu.fulfilled]: (state, action) => {
            state.isLoaded = true;
            state.menu = action.payload.menu;
            state.baseTemplateId = action.payload.base_template_id;
        },
        [setMenu.rejected]: (state) => {
            state.isLoaded = true;
        },
        [addMenu.pending]: (state) => {
            state.isLoaded = false;
            
            state.error = null;
        },
        [addMenu.fulfilled]: (state, action) => {
            state.isLoaded = true;
            console.log(action.payload.menu);
            state.menu = action.payload.menu;
        },
        [addMenu.rejected]: (state) => {
            state.isLoaded = true;
        },
    },
});
export const { updateMenu } = menusSlice.actions;
export default menusSlice.reducer;
