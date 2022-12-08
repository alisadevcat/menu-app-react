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

const menuitemsSlice = createSlice({
    name: "menuitems",
    initialState: { menuitems: [], error: null, isLoaded: false, menuitem: {} },
    reducers: {
        updateMenuItems: (state, action) => {
            //find index of section /the first array
            const arr_index = state.menuitems.findIndex(
                (e, i) => i + 1 === action.payload.section_id
            );

            const index = state.menuitems[arr_index].findIndex(
                (e) => e.id === action.payload.id
            );
            
            state.menuitems[arr_index][index] = action.payload;
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
    },
});

export const { updateMenuItems } = menuitemsSlice.actions;
export default menuitemsSlice.reducer;


// arra1 = arra1.map(item => {
//     const item2 = state.menuitems[].find(i2 => i2.transid === item.transid);
//     return item2 ? { ...item, ...item2 } : item;
//   });