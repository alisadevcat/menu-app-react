import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSectionByMenuId = createAsyncThunk(
    "menusections/fetchSectionByMenuId",
    async (menu_id) => {
        const response = await fetch(`/api/menu-sections/all/${menu_id}`);
        if (response.ok) {
            const data = response.json;
            return data;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
);

const menusectionsSlice = createSlice({
    name: "menusections",
    initialState: {
        sections: [],
        section: {},
        isLoaded: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchSectionByMenuId.pending]:(state)=>{
            state.isLoaded = false;
            state.error = null;
        } ,
        [fetchSectionByMenuId.fulfilled]: (state, actions)=>{
            state.sections = actions.payload;
            state.isLoaded = true;
        },
        [fetchSectionByMenuId.rejected]: (state)=>{
            state.isLoaded = true;
        }
    },
});

export default menusectionsSlice.reducer;
