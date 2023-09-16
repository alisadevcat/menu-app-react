import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//fetchBranches -"thunk action creator"
//createAsyncThunk generates three Redux action creators using
//createAction: pending, fulfilled, and rejected.

export const fetchBranches = createAsyncThunk(
    "branches/fetchBranches", // generate additional Redux action type constants
    async () => {
        const response = await fetch("/api/choose");
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
);

const branchesSlice = createSlice({
    name: "branches",
    initialState: { branches: [], branch: {}, isLoaded: false, error: null },
    reducers: {
        setBranch: (state, action) => {
            state.branch = action.payload;
        },
    },
    extraReducers: {
        [fetchBranches.pending]: (state) => {
            state.isLoaded = false;
            state.error = null;
        },
        [fetchBranches.fulfilled]: (state, action) => {
            state.isLoaded = true;
            state.branches = action.payload;
        },
        [fetchBranches.rejected]: (state) => {
            state.isLoaded = true;
        },
    },
});

export const { setBranch } = branchesSlice.actions;
export default branchesSlice.reducer;
