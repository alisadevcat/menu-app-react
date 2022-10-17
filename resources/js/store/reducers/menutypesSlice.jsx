import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenutypesById = createAsyncThunk(
    "menutypes/fetchMenutypesById",
    async (branch) => {
        const response = await fetch(`/api/start/${branch}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
);

const menutypesSlice = createSlice({
    name: "menutypes",
    initialState: { menutypes: [], menutype: {}, isLoaded: false, error: null },
    reducers: {
        setMenuType: (state, action) => {
            state.menutype = action.payload;
        },
    },
    extraReducers: {
        [fetchMenutypesById.pending]: (state) => {
            state.isLoaded = false;
            state.error = null;
        },
        [fetchMenutypesById.fulfilled]: (state, action) => {
            state.isLoaded = true;
            state.menutypes = action.payload;
        },
        [fetchMenutypesById.rejected]: (state) => {
            state.isLoaded = true;
        },
    },
});

export const { setMenuType } = menutypesSlice.actions;
export default menutypesSlice.reducer;