import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {

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
        <div className='item'>
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <p>Item Name</p>
          <p>$4.50</p>
        </div>
        <div className='item'>
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <p>Item Name</p>
          <p>$4.50</p>
        </div>
        <div className='item'>
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <p>Item Name</p>
          <p>$4.50</p>
        </div>
        <div className='item'>
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <p>Item Name</p>
          <p>$4.50</p>
        </div>
        <div className='item link'>
          <p>View More</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </section>
      <hr></hr>
      <h1 className='section-title'>Enjoy Our Coupon Deals</h1>
      <section className='savings-preview' aria-label="Savings Preview Section">
        <div className='item'>
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <p>Saving</p>
          <p><b>Save $3.00</b></p>
        </div>
        <div className='item'>
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <p>Saving</p>
          <p><b>Save $3.00</b></p>
        </div>
        <div className='item'>
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <p>Saving</p>
          <p><b>Save $3.00</b></p>
        </div>
        <div className='item'>
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
          <p>Saving</p>
          <p><b>Save $3.00</b></p>
        </div>
        <div className='item link'>
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
        <div className='signup-link'>
          <p>Sign Up</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </section>
    </main>
  )
}

export default App;
