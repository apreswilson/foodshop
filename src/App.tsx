import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {
  foodInventory,
  saveInventory,
  GroceryItem,
  SavingItem
} from './components/pages/exports';
import './App.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const App: React.FC = () => {

  const navigateToPage = useNavigate();

  //Get first 4 items of dry category from each inventory and display it
  const groceryPreviewDisplay = foodInventory["dry"].slice(0, 4).map((item: GroceryItem, index: number) => (
    <div className='item' key={index} onClick={() => navigateToPage("/shop")}>
      <LazyLoadImage src={item.url} alt={item.Name} effect="blur" />
      <p>{item.Name}</p>
      <p>${(Math.round(item.Cost * 100) / 100).toFixed(2)}</p>
    </div>
  ))

  const savePreviewDisplay = saveInventory["dry"].slice(0, 4).map((item: SavingItem, index: number) => (
    <div className='item' key={index} onClick={() => navigateToPage("/save")}>
      <LazyLoadImage src={item.url} alt={item.Item} effect="blur" />
      <p><b>{item.Saving}</b></p>
      <p>Save: {item.Type === "Percentage" ? `${item.Amount}%` : `$${(Math.round(item.Amount * 100) / 100).toFixed(2)}`}</p>
    </div>
  ))

  return (
    <main className='home-layout' aria-label="Home Page">

      <section className='introduction' aria-label="Introduction Section">
        <h1>Welcome to</h1>
        <img src="/store-logo.svg" alt="Food Shop Logo"></img>
        <h1>Food Shop</h1>
        <p>
          Food shop allows you the ability to purchase groceries directly online.
          We deliver all groceries directly to your home.
        </p>
      </section>

      <h1 className='section-title'>Explore Our Diverse Catalog</h1>
      <section className='catalog-preview' aria-label="Catalog Preview Section">

        {groceryPreviewDisplay}

        <div className='item link' onClick={() => navigateToPage("/shop")}>
          <p>View More</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </section>

      <hr></hr>

      <h1 className='section-title'>Enjoy Our Coupon Deals</h1>
      <section className='savings-preview' aria-label="Savings Preview Section">

        {savePreviewDisplay}

        <div className='item link' onClick={() => navigateToPage("/save")}>
          <p>View More</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </section>

      <hr></hr>

      <h1 className='section-title'>Sign Up To Recieve Exclusive Benefits</h1>
      <section className='signup' aria-label="Sign Up Promotion Section">
        <p>Members recieve benefits such as:</p>
        <ul>
          <li>Weekly emailed ads</li>
          <li>Additional promotional emails</li>
          <li>View upcoming products</li>
          <li>Member dicount off each transaction</li>
        </ul>
        <div className='signup-link' onClick={() => navigateToPage("/signup")}>
          <p>Sign Up</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </section>

    </main>
  )
}

export default App;
