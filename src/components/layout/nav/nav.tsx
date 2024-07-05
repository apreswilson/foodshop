import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShop,
  faMoneyBills,
  faShoppingCart,
  faUser,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav: React.FC = () => {

  const navigateToPage = useNavigate();
  //States
  const [openPageNavigationMenu, setOpenPageNavigationMenu] = useState<boolean>(false);

  //Handler Functions
  const navigationMenuHandler = () => {
    openPageNavigationMenu ? setOpenPageNavigationMenu(false) : setOpenPageNavigationMenu(true);
  }

  return (
    <nav aria-label="Navigation Menu">
      <a aria-label="Store Icon Link To Home Page" onClick={() => navigateToPage("/")}>
        <img src="/store-logo.svg" alt="Food Shop Logo"></img>
        <h1>Food Shop</h1>
      </a>
      <ul aria-label="Website Pages" className={openPageNavigationMenu ? "mobile-page-menu" : ""}>
        <li aria-label="Shop" onClick={() => navigateToPage("/shop")}>
          <FontAwesomeIcon icon={faShop} />
          <p>Shop</p>
        </li>
        <li aria-label="Savings" onClick={() => navigateToPage("/save")}>
          <FontAwesomeIcon icon={faMoneyBills} />
          <p>Save</p>
        </li>
        <li aria-label="Cart" onClick={() => navigateToPage("/cart")}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <p>Cart</p>
          <p className="items-in-cart">0</p>
        </li>
        <li aria-label="Login" onClick={() => navigateToPage("/login")}>
          <FontAwesomeIcon icon={faUser} />
          <p>Login</p>
        </li>
        {/*Potentially Removing this section from navbar and only making it accessible from login*/}
        <li aria-label="Join / Sign Up" onClick={() => navigateToPage("/signup")}>
          <FontAwesomeIcon icon={faUserPlus} />
          <p>Join</p>
        </li>
      </ul>
      <div className={`dropdown ${openPageNavigationMenu ? "exit" : ""}`} aria-label="View Dropdown Menu" onClick={navigationMenuHandler} >
        <div className={openPageNavigationMenu ? "bar1" : ""} aria-hidden="true"></div>
        <div className={openPageNavigationMenu ? "bar2" : ""} aria-hidden="true"></div>
        <div className={openPageNavigationMenu ? "bar3" : ""} aria-hidden="true"></div>
      </div>
    </nav>
  )

}

export default Nav;
