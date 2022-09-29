import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const menusSlice = createSlice({
    name: menus,
    initialState: { menus: [], isLoaded: false, error: null },
    reducers: {},
    extraReducers:{

    }
});

export default menusSlice.reducer;
