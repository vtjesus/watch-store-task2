import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type BasketState = {
  items: Product[];
  totalQuantity: number;
  totalPrice: number;
};

const initialState: BasketState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
        toast.success(`Збільшено кількість товару: ${action.payload.name}`);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success(`Додано товар до кошика: ${action.payload.name}`);
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload);

      if (existingItemIndex >= 0) {
        const item = state.items[existingItemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(existingItemIndex, 1);

        toast.error(`Видалено товар з кошика: ${item.name}`);
      }
    },
  },
});

export const { addToCart, removeFromCart } = basketSlice.actions;
export default basketSlice.reducer;
