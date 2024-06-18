import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShop,
  faMoneyBills,
  faShoppingCart,
  faUser,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav: React.FC = () => {

  //States
  const [openPageNavigationMenu, setOpenPageNavigationMenu] = useState<boolean>(false);

  //Handler Functions
  const navigationMenuHandler = () => {
    openPageNavigationMenu ? setOpenPageNavigationMenu(false) : setOpenPageNavigationMenu(true);
  }



  return (
    <nav aria-label="Navigation Menu">
      <a aria-label="Store Icon Link To Home Page">
        <img src="public/store-logo.svg"></img>
      </a>
      <form aria-label="Search For Products And Savings">
        <input type="text" name="search-bar" className="search" placeholder="Search" autoComplete="off"></input>
        <button type="submit" aria-label="Select To Submit Search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <ul aria-label="Website Pages" className={openPageNavigationMenu ? "mobile-page-menu" : ""}>
        <li aria-label="Catalog">
          <FontAwesomeIcon icon={faShop} />
          <p>Shop</p>
        </li>
        <li aria-label="Savings">
          <FontAwesomeIcon icon={faMoneyBills} />
          <p>Save</p>
        </li>
        <li aria-label="Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <p>Cart</p>
        </li>
        <li aria-label="Login">
          <FontAwesomeIcon icon={faUser} />
          <p>Login</p>
        </li>
        {/*Potentially Removing this section from navbar and only making it accessible from login*/}
        <li aria-label="Register">
          <FontAwesomeIcon icon={faUserPlus} />
          <p>Register</p>
        </li>
      </ul>
      <div className={`dropdown ${openPageNavigationMenu ? "exit" : ""}`} aria-label="Toggle Dropdown Menu" onClick={navigationMenuHandler} >
        <div className={openPageNavigationMenu ? "bar1" : ""}></div>
        <div className={openPageNavigationMenu ? "bar2" : ""}></div>
        <div className={openPageNavigationMenu ? "bar3" : ""}></div>
      </div>
    </nav>
  )

}

export default Nav;