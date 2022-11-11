import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
    "menuitems/fetchItems",
    async(id) => {
        const response = await fetch(`/api/menu-items/all/${id}`);

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
    initialState: {  menuitems: [], error: null, isLoaded: false, menuitem: {} },
    reducers: {
    },
    extraReducers: {
        [fetchItems.pending]: (state)=>{
            state.isLoaded = true;
        },
        [fetchItems.fulfilled]: (state, action)=>{
            state.isLoaded = true;
            state.menuitems = action.payload
        },
        [fetchItems.rejected]: (state)=>{
            state.isLoaded = true;
        }
    },
});
// export const { findById } = menuitemsSlice.actions;
export default menuitemsSlice.reducer;
