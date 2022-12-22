import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSectionByMenuId = createAsyncThunk(
    "menusections/fetchSectionByMenuId",
    async (menu_id) => {
        const response = await fetch(`/api/menu-sections/all/${menu_id}`);

        if (response.ok) {
            const data = await response.json();
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
    reducers: {
        updateSections: (state, action) => {
            const index = state.sections.findIndex(
                (e) => e.id === action.payload.id
            );
            state.sections[index] = action.payload;
        },
        addMenuSections: (state, action)=>{
            state.sections = action.payload;
        }
    },
    extraReducers: {
        [fetchSectionByMenuId.pending]: (state) => {
            state.isLoaded = false;
            state.error = null;
        },
        [fetchSectionByMenuId.fulfilled]: (state, action) => {
            state.sections = action.payload;
            state.isLoaded = true;
        },
        [fetchSectionByMenuId.rejected]: (state) => {
            state.isLoaded = true;
        }
    },
});
export const { updateSections, addMenuSections } = menusectionsSlice.actions;
export default menusectionsSlice.reducer;
