import "./checkout.css";

const Checkout: React.FC = () => {
  return (
    <main className="checkout-layout" aria-label="Checkout Page">
      <form className="checkout-form">
        <h1>Shipping Info</h1>
        <div className="personal-information" aria-label="Personal Information">
          <div className="email">
            <p>Email</p>
            <input type="text" name="email"></input>
          </div>
          <div className="row-1">
            <div className="firstname">
              <p>First Name</p>
              <input type="text" name="firstname"></input>
            </div>
            <div className="lastname">
              <p>Last Name</p>
              <input type="text" name="lastname"></input>
            </div>
          </div>
          <div className="row-2">
            <div className="address">
              <p>Address</p>
              <input type="text" name="address"></input>
            </div>
            <div className="apt">
              <p>Apt/Suite</p>
              <input type="text" name="apt"></input>
            </div>
          </div>
          <div className="row-3">
            <div className="city">
              <p>City</p>
              <input type="text" name="city"></input>
            </div>
            <div className="state">
              <p>State</p>
              <input type="text" name="state" placeholder="Ex. FL"></input>
            </div>
          </div>
          <div className="zip">
            <p>ZIP Code</p>
            <input type="text" name="zip"></input>
          </div>
        </div>
        <hr></hr>
        <h1>Billing Info</h1>
        <div className="banking-information" aria-label="Banking Information">
          <div className="holder-name">
            <p>Cardholder Name</p>
            <input type="text"></input>
          </div>
          <div className="row-1">
            <div className="card-number">
              <p>Card Number</p>
              <input type="text" name="cardnumber"></input>
            </div>
            <div className="expire">
              <p>Expiration</p>
              <input type="text" name="expire" placeholder="mm/yy"></input>
            </div>
          </div>
          <div className="cvv">
            <p>CVV</p>
            <input type="text" name="cvv"></input>
          </div>
        </div>
        <hr></hr>
        <h1>Order Summary</h1>
        <div className="order-summary" aria-label="Order Summary">
          <p><b>Sub Total:</b> $16.00</p>
          <p><b>Savings:</b> $4.00</p>
          <p><b>Total:</b> $12.00</p>
          <button type="submit">Purchase</button>
        </div>
      </form>
    </main>
  )
}

export default Checkout;