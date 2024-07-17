import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { foodInventory, GroceryItem } from '../exports';
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GroceryListContext } from "../../../context/cart";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "./shop.css"

interface GroceryCartItem {
  name: string;
  price: number;
  quantity: number;
}

// TODO: Optimize search in the future?
const Shop: React.FC = () => {

  const [currentCategorySelected, setCurrentCategorySelected] = useState("all");
  const [currentCategoryDisplay, setcurrentCategoryDisplay] = useState<Array<GroceryItem>>([]);
  const [currentFilteredDisplay, setCurrentFilteredDisplay] = useState<Array<GroceryItem>>([]);
  const [searchQueryIsPresent, setSearchQueryIsPresent] = useState(false);
  const [shoppingCastHasBeenUpdated, setShoppingCastHasBeenUpdated] = useState(false);

  const { groceryList, setGroceryList } = useContext(GroceryListContext);

  //Updates the currently displayed catalog based on dropdown selection
  useEffect(() => {
    if (currentCategorySelected === "all") {
      setcurrentCategoryDisplay(Object.values(foodInventory).flat())
    } else {
      for (const [key, value] of Object.entries(foodInventory)) {
        if (key === currentCategorySelected) {
          setcurrentCategoryDisplay(value);
        }
      }
    }
  }, [currentCategorySelected])


  if (shoppingCastHasBeenUpdated) {
    sessionStorage.setItem("cart", JSON.stringify(groceryList));
    setShoppingCastHasBeenUpdated(false);
  }

  const updateCurrentCategorySelected = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategorySelected(event.currentTarget.value)
  }

  const updateSearchQuery = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const unformattedSearch = formData.get("search") as string;
    const formattedSearch = unformattedSearch.charAt(0).toUpperCase() + unformattedSearch.slice(1);

    //Temporary probably, may make a better search later, possibly use regex matching?
    const filteredView = currentCategoryDisplay.filter(item => item.Name.includes(formattedSearch) || String(item.Cost).includes(formattedSearch));

    if (formattedSearch.length === 0) {
      setSearchQueryIsPresent(false)
      return;
    } else {
      setSearchQueryIsPresent(true);
      setCurrentFilteredDisplay(filteredView);
    }
  }

  const addItemToCart = (name: string, price: number, quantity: number) => {
    const iterateThroughGroceryList: Array<GroceryCartItem> = Object.values(groceryList);
    const trueOrFalse = iterateThroughGroceryList.filter(item => item.name === name).length === 0 ? true : false;

    if (trueOrFalse) {
      const getHighestKeyFromShoppingCart = String(Object.keys(groceryList).length + 1);
      const addNewItem = { name, price, quantity }

      setGroceryList((previousCart => ({
        ...previousCart,
        [getHighestKeyFromShoppingCart]: addNewItem,
      })))
      setShoppingCastHasBeenUpdated(true);
    }
  }


  return (

    <main className="shop-layout" aria-label="Shop Page">
      <div className="top-area">
        <div className="search-bar" aria-label="Search Bar">
          <h1>General</h1>
          {/*Unsure whether onchange or onsubmit is better*/}
          <form onSubmit={updateSearchQuery}>
            <input type="text" placeholder="Search Catalog" name="search"></input>
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="categories" aria-label="View Different Food Categories">
          <h1>Categories</h1>
          <select onChange={updateCurrentCategorySelected}>
            <option value="all">All</option>
            <option value="dry">Dry Grocery</option>
            <option value="produce">Produce</option>
            <option value="meat">Meat</option>
            <option value="seafood">Seafood</option>
            <option value="drinks">Drinks</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="bakery">Bakery</option>
            <option value="deli">Deli</option>
          </select>
        </div>
      </div>
      <div className="catalog" aria-label="Food Shop Item Catalog">

        {!searchQueryIsPresent ?
          currentCategoryDisplay.map((item, index) => (
            <div className="item" key={index}>
              <LazyLoadImage src={item.url} alt={item.Name} effect="blur" />
              <p><b>{item.Name}</b></p>
              <p>Price: ${(Math.round(item.Cost * 100) / 100).toFixed(2)}</p>
              <p>Stock: {item.Stock}</p>
              <button onClick={() => addItemToCart(item.Name, item.Cost, 1)}>Add To Cart</button>
            </div>
          ))
          :
          currentFilteredDisplay.map((item, index) => (
            <div className="item" key={index}>
              <LazyLoadImage src={item.url} alt={item.Name} effect="blur" />
              <p><b>{item.Name}</b></p>
              <p>Price: ${(Math.round(item.Cost * 100) / 100).toFixed(2)}</p>
              <p>Stock: {item.Stock}</p>
              <button onClick={() => addItemToCart(item.Name, item.Cost, 1)}>Add To Cart</button>
            </div>
          ))
        }

      </div>
    </main>
  )
}

export default Shop;
