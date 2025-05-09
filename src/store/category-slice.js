import { createSlice } from '@reduxjs/toolkit';

const initialSlice = {
    category: "fashion"
}

const categorySlice = createSlice({
    name: "category",
    initialState: initialSlice,
    reducers: {
        getCategory(state, action) {
            state.category = action.payload
            console.log(state.category)
        }
    }
})

export default categorySlice.reducer;
export const categoryAction = categorySlice.actions;