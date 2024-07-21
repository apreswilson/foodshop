import { useNavigate } from "react-router-dom";
import { GroceryListContext } from "../../../context/cart";
import { SavingsContext } from "../../../context/savings";
import { useContext, useEffect, useState, useMemo } from "react";
import { foodInventory } from "../exports";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "./cart.css";
import { AuthContext } from "../../../context/login";

interface GroceryCartItem {
  name: string;
  price: number;
  quantity: number;
}
interface SavingCartItem {
  name: string;
  type: string;
  amount: number;
}

const Cart: React.FC = () => {
  const navigateToPage = useNavigate();
  const fullFoodInventory = useMemo(() => Object.values(foodInventory).flat(), []);
  const { groceryList, setGroceryList } = useContext(GroceryListContext);
  const { savingsList } = useContext(SavingsContext);
  const { token } = useContext(AuthContext);

  const [currentGroceryList, setCurrentGroceryList] = useState<Array<GroceryCartItem>>([]);
  const [currentSavingList, setCurrentSavingList] = useState<Array<SavingCartItem>>([]);
  const [groceryListSubTotal, setGroceryListSubTotal] = useState(0);
  const [savingsTotal, setSavingsTotal] = useState(0);
  const [groceryListTotal, setGroceryListTotal] = useState(0);

  useMemo(() => {
    setCurrentGroceryList(Object.values(groceryList));
    setCurrentSavingList(Object.values(savingsList));
  }, [groceryList, savingsList]);

  useMemo(() => {
    setSavingsTotal(groceryListSubTotal - groceryListTotal)
  }, [groceryListTotal, groceryListSubTotal])

  useEffect(() => {
    const total = currentGroceryList.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let savingsApplied = currentSavingList.reduce((sum, item) => {
      const groceryItem = currentGroceryList.find(gItem => gItem.name === item.name) as GroceryCartItem;
      if (groceryItem && item.type === "Percentage") {
        return sum - ((groceryItem.price * item.amount) * groceryItem.quantity);
      } else {
        return sum - (item.amount * groceryItem?.quantity);
      }

    }, total);
    if (token) {
      savingsApplied = savingsApplied - (total * 0.10);
    }
    setGroceryListSubTotal(total);
    setGroceryListTotal(savingsApplied);

  }, [currentGroceryList, currentSavingList, token]);

  useEffect(() => {
    const pushToList: Array<SavingCartItem> = [];

    currentGroceryList.forEach(item => {
      const returnList = Object.values(savingsList).find(savingItem => savingItem.name === item.name);
      if (returnList) {
        pushToList.push(returnList);
      }
    });
    const hasChanged = JSON.stringify(pushToList) !== JSON.stringify(currentSavingList);
    if (hasChanged) {
      setCurrentSavingList(pushToList);
    }
  }, [currentGroceryList, savingsList, currentSavingList, setCurrentSavingList]);

  useEffect(() => {
    const objectToStore = {
      "subtotal": groceryListSubTotal,
      "savings": savingsTotal,
      "grandtotal": groceryListTotal
    }
    sessionStorage.setItem("order-details", JSON.stringify(objectToStore));
  }, [groceryListSubTotal, groceryListTotal, savingsTotal])


  const getMatchingImageURL = (name: string) => {
    const searchURL = fullFoodInventory.filter(item => item.Name === name);
    return searchURL[0].url || "/store-logo.svg"
  }

  const removeItemFromCart = (name: string) => {
    const listDoesNotIncludeName = currentGroceryList.filter(item => item.name !== name);
    setCurrentGroceryList(listDoesNotIncludeName);

    const updateList: { [key: string]: GroceryCartItem } = listDoesNotIncludeName.reduce((acc, item, index) => {
      acc[index + 1] = { name: item.name, price: item.price, quantity: item.quantity };
      return acc;
    }, {} as { [key: string]: GroceryCartItem });
    setGroceryList(updateList);
    sessionStorage.setItem("cart", JSON.stringify(updateList));
  }

  const updateQuantityOfItem = (name: string, quantity: string) => {
    const iterate: Array<GroceryCartItem> = Object.values(groceryList).map(item => {
      if (item.name === name) {
        item.quantity = Number(quantity);
      }
      return item;
    })

    const updateList: { [key: string]: GroceryCartItem } = iterate.reduce((acc, item, index) => {
      acc[index + 1] = { name: item.name, price: item.price, quantity: item.quantity };
      return acc;
    }, {} as { [key: string]: GroceryCartItem });
    setGroceryList(updateList);
    sessionStorage.setItem("cart", JSON.stringify(updateList));
  }

  const emptyCart = () => {
    setGroceryList({});
    sessionStorage.removeItem("cart");
  }

  return (
    <main className="cart-layout" aria-label="Cart Page">
      <div className="order-details" aria-label="Order Details">
        <div className="top-row">
          <h1>Details</h1>
          <button className="empty-cart" onClick={emptyCart}>Empty Cart</button>
        </div>
        {currentGroceryList.map((item, index) => (
          <div className="order-item" key={index}>
            <LazyLoadImage src={getMatchingImageURL(item.name)} alt={item.name} effect="blur" />
            <h2>{item.name}</h2>
            <div className="price">
              <p>Price</p>
              <p>${(((item.price * item.quantity) * 100) / 100).toFixed(2)}</p>
            </div>
            <div className="quantity">
              <p>Quantity</p>
              <input type="number" min={1} value={item.quantity} onChange={(e) => updateQuantityOfItem(item.name, e.currentTarget.value)}></input>
            </div>
            <button onClick={() => removeItemFromCart(item.name)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="order-summary" aria-label="Order Summary">
        <h1>Items</h1>
        <hr></hr>
        {currentGroceryList.map((item, index) => (
          <div className="summary-item" key={index}>
            <p>{item.name}</p>
            <p>${(((item.price * item.quantity) * 100) / 100).toFixed(2)}</p>
          </div>
        ))}

        <h1>Savings{token ? ": Member" : ""}</h1>
        <hr></hr>
        {currentSavingList.map((item, index) => (
          <div className="summary-item" key={index}>
            <p>{item.name}</p>
            <p>- {item.type === "Percentage" ? (item.amount * 100) + "%" : "$" + ((item.amount * 100) / 100).toFixed(2)}</p>
          </div>
        ))}
        {token ?
          <div className="summary-item">
            <p>Member</p>
            <p>-10%</p>
          </div>
          :
          <></>
        }

        {token ?
          <></>
          :
          <></>}
        <h1>Totals</h1>
        <hr></hr>
        <div className="summary-item">
          <p>Subtotal:</p>
          <p>${groceryListSubTotal.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <p>Savings:</p>
          <p>${savingsTotal.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <p>Grand Total:</p>
          <p>${groceryListTotal.toFixed(2)}</p>
        </div>
        <button onClick={() => navigateToPage("/checkout")}>Checkout</button>
      </div>
    </main>
  )
}


export default Cart;