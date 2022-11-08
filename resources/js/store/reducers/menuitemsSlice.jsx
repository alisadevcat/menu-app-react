import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
    "menuitems/fetchItems",
    async(id) => {
        const response = await fetch(`/api/menuitems/all/${id}`);
        // console.log(response, 'response');
        if (response.ok) {
            const data = await response.json();
             console.log(data, 'data');
            return data;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
);

const menuitemsSlice = createSlice({
    name: "menuitems",
    initialState: { menuitems: [], error: null, isLoaded: false, menuitem: {} },
    reducers: {},
    extraReducers: {
        [fetchItems.pending]: (state)=>{
            state.isLoaded = true;
        },
        [fetchItems.fulfilled]: (state, action)=>{
            state.isLoaded = true;
            console.log(action.payload);
            state.menuitems = action.payload
        },
        [fetchItems.rejected]: (state)=>{
            state.isLoaded = true;
        }
    },
});

export default menuitemsSlice.reducer;
