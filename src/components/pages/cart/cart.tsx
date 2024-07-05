import { useNavigate } from "react-router-dom";

import "./cart.css";

const Cart: React.FC = () => {

  const navigateToPage = useNavigate();

  return (
    <main className="cart-layout" aria-label="Cart Page">
      <div className="order-details" aria-label="Order Details">
        <h1>Details</h1>
        <div className="order-item">
          <img src="/store-logo.svg" alt="Item" />
          <h2>Item Name</h2>
          <div className="price">
            <p>Price</p>
            <p>$4.00</p>
          </div>
          <div className="quantity">
            <p>Quantity</p>
            <input type="number" placeholder="1"></input>
          </div>
          <button>Remove</button>
        </div>
        <div className="order-item">
          <img src="/store-logo.svg" alt="Item" />
          <h2>Item Name</h2>
          <div className="price">
            <p>Price</p>
            <p>$4.00</p>
          </div>
          <div className="quantity">
            <p>Quantity</p>
            <input type="number" placeholder="1"></input>
          </div>
          <button>Remove</button>
        </div>
        <div className="order-item">
          <img src="/store-logo.svg" alt="Item" />
          <h2>Item Name</h2>
          <div className="price">
            <p>Price</p>
            <p>$4.00</p>
          </div>
          <div className="quantity">
            <p>Quantity</p>
            <input type="number" placeholder="1"></input>
          </div>
          <button>Remove</button>
        </div>
        <div className="order-item">
          <img src="/store-logo.svg" alt="Item" />
          <h2>Item Name</h2>
          <div className="price">
            <p>Price</p>
            <p>$4.00</p>
          </div>
          <div className="quantity">
            <p>Quantity</p>
            <input type="number" placeholder="1"></input>
          </div>
          <button>Remove</button>
        </div>
        <div className="order-item">
          <img src="/store-logo.svg" alt="Item" />
          <h2>Item Name</h2>
          <div className="price">
            <p>Price</p>
            <p>$4.00</p>
          </div>
          <div className="quantity">
            <p>Quantity</p>
            <input type="number" placeholder="1"></input>
          </div>
          <button>Remove</button>
        </div>
      </div>

      <div className="order-summary" aria-label="Order Summary">
        <h1>Summary</h1>
        <hr></hr>
        <div className="summary-item">
          <p>Item Name</p>
          <p>$4.00</p>
        </div>
        <div className="summary-item">
          <p>Item Name</p>
          <p>$4.00</p>
        </div>
        <div className="summary-item">
          <p>Item Name</p>
          <p>$4.00</p>
        </div>
        <div className="summary-item">
          <p>Item Name</p>
          <p>$4.00</p>
        </div>
        <div className="summary-item">
          <p>Item Name</p>
          <p>$4.00</p>
        </div>
        <hr></hr>
        <div className="summary-item total">
          <p>Total:</p>
          <p>$16.00</p>
        </div>
        <button onClick={() => navigateToPage("/checkout")}>Checkout</button>
      </div>
    </main>
  )
}


export default Cart;