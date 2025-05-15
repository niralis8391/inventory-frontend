import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "ui-slice",
    initialState: {
        target: null,
        cart: false,
        navbar: false
    },
    reducers: {
        handleBuyNowref(state, action) {
            state.target = action.payload
        },
        resetScroll: (state) => {
            state.target = null;
        },
        showCart(state) {
            state.cart = !state.cart
        },
        navbarToggle(state) {
            state.navbar = false
        }
    }
});

export const uiSliceAction = uiSlice.actions;

export default uiSlice.reducer;