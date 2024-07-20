import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShop,
  faMoneyBills,
  faShoppingCart,
  faUser,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GroceryListContext } from "../../../context/cart";

const Nav: React.FC = () => {
  const navigateToPage = useNavigate();

  const { groceryList: shoppingCart } = useContext(GroceryListContext);

  const getHighestKeyFromShoppingCart = Object.keys(shoppingCart).length;

  //States
  const [openPageNavigationMenu, setOpenPageNavigationMenu] = useState<boolean>(false);

  const navigationMenuHandler = () => {
    openPageNavigationMenu ? setOpenPageNavigationMenu(false) : setOpenPageNavigationMenu(true);
  }

  const navigateToPageHandler = (url: string) => {
    navigateToPage(url);

    if (openPageNavigationMenu) {
      setOpenPageNavigationMenu(false);
    }
  }

  return (
    <nav aria-label="Navigation Menu">
      <a aria-label="Store Icon Link To Home Page" onClick={() => navigateToPage("/")}>
        <img src="store-logo.svg" alt="Food Shop Logo"></img>
        <h1>Food Shop</h1>
      </a>
      <ul aria-label="Website Pages" className={openPageNavigationMenu ? "mobile-page-menu" : ""}>
        <li aria-label="Shop" onClick={() => navigateToPageHandler("/shop")}>
          <FontAwesomeIcon icon={faShop} />
          <p>Shop</p>
        </li>
        <li aria-label="Savings" onClick={() => navigateToPageHandler("/save")}>
          <FontAwesomeIcon icon={faMoneyBills} />
          <p>Save</p>
        </li>
        <li aria-label="Cart" onClick={() => navigateToPageHandler("/cart")}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <p>Cart</p>
          <p className="items-in-cart">{getHighestKeyFromShoppingCart}</p>
        </li>
        <li aria-label="Login" onClick={() => navigateToPageHandler("/login")}>
          <FontAwesomeIcon icon={faUser} />
          <p>Login</p>
        </li>
        {/*Potentially Removing this section from navbar and only making it accessible from login*/}
        <li aria-label="Join / Sign Up" onClick={() => navigateToPageHandler("/signup")}>
          <FontAwesomeIcon icon={faUserPlus} />
          <p>Join</p>
        </li>
      </ul>
      <div className={`dropdown ${openPageNavigationMenu ? "exit" : ""}`} onClick={navigationMenuHandler} >
        <div className={openPageNavigationMenu ? "bar1" : ""} aria-hidden="true"></div>
        <div className={openPageNavigationMenu ? "bar2" : ""} aria-hidden="true"></div>
        <div className={openPageNavigationMenu ? "bar3" : ""} aria-hidden="true"></div>
      </div>
    </nav>
  )

}

export default Nav;
