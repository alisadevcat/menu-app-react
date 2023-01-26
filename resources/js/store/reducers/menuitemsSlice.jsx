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
            // console.log(current(state.menuitems), "cs");
            state.menuitems.forEach((item, i) => {
                const index = item.findIndex((e) => e.id === action.payload.id);
                if (index >= 0) {
                    state.menuitems[i][index] = action.payload;
                }
            });
        },
        addMenuItems:(state, action)=>{
            state.menuitems = action.payload;
        }, 
        removeMenuItems: (state, action) => {
            console.log('menuitems');
            // state.menuitems = state.menuitems.filter((item) => {
            //     item.id !== action.id;
            // });
            // console.log(state.menuitems);
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

export const { updateMenuItems, addMenuItems, removeMenuItems } = menuitemsSlice.actions;
export default menuitemsSlice.reducer;
