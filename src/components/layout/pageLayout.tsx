import Nav from "./nav/nav";
import Footer from "./footer/footer";
import axios from "axios";
import { GroceryListContext } from "../../context/cart";
import { SavingsContext } from "../../context/savings";
import { useEffect, useState, useMemo } from "react";
import { AuthContext } from "../../context/login";

interface Layout {
  children: React.ReactElement
}

const PageLayout: React.FC<Layout> = ({ children }) => {
  const [groceryList, setGroceryList] = useState<object>({});
  const [savingsList, setSavingsList] = useState<object>({});
  const [token, setToken_] = useState(sessionStorage.getItem("token"));

  //Get cart from sessionstorage
  useEffect(() => {
    const getGroceryListFromBrowser = sessionStorage.getItem("cart");
    const checkIfShoppingCartExists = getGroceryListFromBrowser ? JSON.parse(getGroceryListFromBrowser) : {};
    setGroceryList(checkIfShoppingCartExists);
  }, [])

  //Get savings from sessionstorage
  useEffect(() => {
    const getSavingsListFromBrowser = sessionStorage.getItem("savings");
    const checkIfSavingsExist = getSavingsListFromBrowser ? JSON.parse(getSavingsListFromBrowser) : {};
    setSavingsList(checkIfSavingsExist);
  }, [])

  //Authentication
  const setToken = (newToken: string) => {
    setToken_(newToken);
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      sessionStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      sessionStorage.removeItem('token')
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <GroceryListContext.Provider value={{ groceryList, setGroceryList: setGroceryList }}>
        <SavingsContext.Provider value={{ savingsList, setSavingsList }}>
          <Nav />
          {children}
          <Footer />
        </SavingsContext.Provider>
      </GroceryListContext.Provider >
    </AuthContext.Provider>
  )
}

export default PageLayout;