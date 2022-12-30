import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const setMenu = createAsyncThunk("menus/setMenu", async (params) => {
    const response = await fetch(`/api/menus/template/${params}`);
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
        newMenuLoaded :false
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
        }
    },
});
export const { updateMenu } = menusSlice.actions;
export default menusSlice.reducer;
