import inventory from "../../db/food-db.json";
import saving from "../../db/save-db.json";

export interface GroceryItem {
  Name: string;
  Cost: number;
  Stock: number;
  url: string;
}

export interface SavingItem {
  Saving: string;
  Item: string;
  Type: string;
  Amount: number;
  url: string;
}

export const foodInventory = {
  "dry": inventory["Dry-Grocery"],
  "produce": inventory.Produce,
  "meat": inventory.Meat,
  "seafood": inventory.Seafood,
  "drinks": inventory.Drinks,
  "pharmacy": inventory.Pharmacy,
  "bakery": inventory.Bakery,
  "deli": inventory.Deli
}

export const saveInventory = {
  "dry": saving["Dry-Grocery"],
  "produce": saving.Produce,
  "meat": saving.Meat,
  "seafood": saving.Seafood,
  "drinks": saving.Drinks,
  "pharmacy": saving.Pharmacy,
  "bakery": saving.Bakery,
  "deli": saving.Deli
}