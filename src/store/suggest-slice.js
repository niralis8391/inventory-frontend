import { createSlice } from '@reduxjs/toolkit';


const suggessionSlice = createSlice({
    name: "suggession",
    initialState: {
        query: "",
        products: [],
    },
    reducers: {
        searchProduct(state, action) {
            state.products = action.payload
        },
        setQuery(state, action) {
            state.query = action.payload
        }
    }
})

export default suggessionSlice.reducer;

export const suggessionAction = suggessionSlice.actions;
