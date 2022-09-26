import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenutypesById = createAsyncThunk(
    "menutypes/fetchMenutypesById",
    async (branch) => {
        const response = await fetch(`/api/start/${branch}`);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
);

const menutypesSlice = createSlice({
    name: "menutypes",
    initialState: { menutypes: [], isLoaded: false, error: null },
    reducers: {
       
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

export default menutypesSlice.reducer;
// export const { getShortName } = menutypesSlice.actions;
