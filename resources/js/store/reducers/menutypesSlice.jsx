import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const menutypesSlice = createSlice({
    name: "menutypes",
    initialState: { menutypes: [], isLoaded: false, error: null },
    reducers: {}
});

export default menutypesSlice.reducer;
