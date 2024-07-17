import Nav from "./nav/nav";
import Footer from "./footer/footer";
import { GroceryListContext } from "../../context/cart";
import { SavingsContext } from "../../context/savings";
import { useEffect, useState } from "react";

interface Layout {
  children: React.ReactElement
}

const PageLayout: React.FC<Layout> = ({ children }) => {
  const [groceryList, setGroceryList] = useState<object>({});
  const [savingsList, setSavingsList] = useState<object>({});

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

  return (
    <>
      <GroceryListContext.Provider value={{ groceryList, setGroceryList: setGroceryList }}>
        <SavingsContext.Provider value={{ savingsList, setSavingsList }}>
          <Nav />
          {children}
          <Footer />
        </SavingsContext.Provider>
      </GroceryListContext.Provider >
    </>
  )
}

export default PageLayout;