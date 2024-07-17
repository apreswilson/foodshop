import { createContext, Dispatch, SetStateAction } from "react";

interface CartContextType {
  groceryList: object;
  setGroceryList: Dispatch<SetStateAction<object>>;
}

const defaultCartValue: CartContextType = {
  groceryList: {},
  setGroceryList: () => { },
};

export const GroceryListContext = createContext<CartContextType>(defaultCartValue);

