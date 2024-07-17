import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { saveInventory, SavingItem } from "../exports";
import { ChangeEvent, useState, useEffect, useContext } from "react";
import { SavingsContext } from "../../../context/savings";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "./save.css";

interface SavingCartItem {
  name: string;
  type: string;
  amount: number;
}

const Save: React.FC = () => {

  const [currentCategorySelected, setCurrentCategorySelected] = useState("all");
  const [currentCategoryDisplay, setcurrentCategoryDisplay] = useState<Array<SavingItem>>([]);
  const [currentFilteredDisplay, setCurrentFilteredDisplay] = useState<Array<SavingItem>>([]);
  const [searchQueryIsPresent, setSearchQueryIsPresent] = useState(false);
  const [savingsListHasBeenUpdated, setSavingsListHasBeenUpdated] = useState(false);

  const { savingsList, setSavingsList } = useContext(SavingsContext);

  // Updates the currently displayed catalog based on dropdown selection
  useEffect(() => {
    if (currentCategorySelected === "all") {
      setcurrentCategoryDisplay(Object.values(saveInventory).flat());
    } else {
      for (const [key, value] of Object.entries(saveInventory)) {
        if (key === currentCategorySelected) {
          setcurrentCategoryDisplay(value);
        }
      }
    }
  }, [currentCategorySelected]);

  if (savingsListHasBeenUpdated) {
    sessionStorage.setItem("savings", JSON.stringify(savingsList));
    setSavingsListHasBeenUpdated(false);
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
    const filteredView = currentCategoryDisplay.filter(saving => saving.Item.includes(formattedSearch) || saving.Saving.includes(formattedSearch));

    if (formattedSearch.length === 0) {
      setSearchQueryIsPresent(false)
      return;
    } else {
      setSearchQueryIsPresent(true);
      setCurrentFilteredDisplay(filteredView);
    }
  }

  const addItemToCart = (name: string, type: string, amount: number) => {
    const iterateThroughGroceryList: Array<SavingCartItem> = Object.values(savingsList);
    const trueOrFalse = iterateThroughGroceryList.filter(item => item.name === name).length === 0 ? true : false;

    if (trueOrFalse) {
      const getHighestKeyFromSavingsList = String(Object.keys(savingsList).length + 1);
      const addNewItem = { name, type, amount }

      setSavingsList((previousSavings => ({
        ...previousSavings,
        [getHighestKeyFromSavingsList]: addNewItem,
      })))
      setSavingsListHasBeenUpdated(true);

    }
  }


  return (
    <main className="save-layout" aria-label="Save Page">
      <div className="top-area">
        <div className="search-bar" aria-label="Search Bar">
          <h1>General</h1>
          <form onSubmit={updateSearchQuery}>
            <input type="text" placeholder="Search Savings" name="search"></input>
            <button type="submit" name="search">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="categories" aria-label="View Food Categories">
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
      <div className="catalog" aria-label="Savings Catalog">

        {!searchQueryIsPresent ?
          currentCategoryDisplay.map((item, index) => (
            <div className="item" key={index}>
              <LazyLoadImage src={item.url} alt={item.Item} effect="blur" />
              <p><b>{item.Saving}</b></p>
              <p>Save: {item.Type === "Percentage" ? `${item.Amount * 100}%` : `$${item.Amount.toFixed(2)}`}</p>
              <button onClick={() => addItemToCart(item.Item, item.Type, item.Amount)}>Add To Cart</button>
            </div>
          ))
          :
          currentFilteredDisplay.map((item, index) => (
            <div className="item" key={index}>
              <LazyLoadImage src={item.url} alt={item.Item} effect="blur" />
              <p><b>{item.Saving}</b></p>
              <p>Save: {item.Type === "Percentage" ? `${item.Amount * 100}%` : `$${item.Amount.toFixed(2)}`}</p>
              <button onClick={() => addItemToCart(item.Item, item.Type, item.Amount)}>Add To Cart</button>
            </div>
          ))
        }

      </div>
    </main>
  )
}

export default Save;