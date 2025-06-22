// redux/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { createSelector } from 'reselect';
interface SimpleRoom {
  roomId: string;
  name?: string;
  image: string;
  price?: number;
  checkInDate: string;   // YYYY-MM-DD string
  checkOutDate: string;  // YYYY-MM-DD string
}

interface CartItem {
  userId: string;
  room: SimpleRoom;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

addCartItem: (state, action: PayloadAction<CartItem>) => {
  // ✅ Ensure cartItems is always an array
  if (!Array.isArray(state.cartItems)) {
    state.cartItems = [];
  }

  const { userId,  room } = action.payload;

  const exists = state.cartItems.some(
    (item) =>
      item.userId === userId &&
      item.room.roomId === room.roomId
  );

  if (!exists) {
    state.cartItems.push(action.payload);
    console.log("✅ Cart item added");
  } else {
    console.log("⚠️ Duplicate item not added");
  }
},

    removeCartItem: (state, action: PayloadAction<string>) => {
      // Remove by roomId (adjust if want by cart item id)
      state.cartItems = state.cartItems.filter(
        (item) => item.room.roomId !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const makeSelectCartItemsByUser = (userId: string) =>
  createSelector(
    [selectCartItems],
    (cartItems) => cartItems.filter((item) => item.userId === userId)
  );