import { ChangeEvent, useState } from "react";
import "./checkout.css";
import { useNavigate } from "react-router-dom";

interface OrderDetails {
  grandtotal: number;
  savings: number;
  subtotal: number;
}

interface RegexObjectType {
  email: RegExp;
  firstname: RegExp;
  lastname: RegExp;
  address: RegExp;
  city: RegExp;
  state: RegExp;
  zip: RegExp;
  cardholder: RegExp;
  cardnumber: RegExp;
  expire: RegExp;
  cvv: RegExp;
}

const Checkout: React.FC = () => {
  const orderDetails: OrderDetails = JSON.parse(sessionStorage.getItem("order-details") as string);
  const navigateToPage = useNavigate();
  const [formStatus, setFormStatus] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardholder: "",
    cardnumber: "",
    expire: "",
    cvv: ""
  });


  const [formErrors, setFormErrors] = useState({
    email: false,
    firstname: false,
    lastname: false,
    address: false,
    city: false,
    state: false,
    zip: false,
    cardholder: false,
    cardnumber: false,
    expire: false,
    cvv: false
  });

  const regexObject: RegexObjectType = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    firstname: /^[a-zA-Z]+$/,
    lastname: /^[a-zA-Z]+$/,
    address: /^[a-zA-Z0-9\s,'-]*$/,
    city: /^[a-zA-Z\s]+$/,
    state: /^[A-Z]{2}$/,
    zip: /^\d{5}(-\d{4})?$/,
    cardholder: /^[a-zA-Z\s]+$/,
    cardnumber: /^\d{16}$/,
    expire: /^(0[1-9]|1[0-2])\/\d{2}$/,
    cvv: /^\d{3}$/
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (regexObject[name as keyof RegexObjectType]) {
      setFormErrors(prevState => ({
        ...prevState,
        [name]: regexObject[name as keyof RegexObjectType].test(value)
      }));
    }
  };

  const handleCheckout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(formErrors).includes(false)) {
      setFormStatus("There was an error processing your checkout.");
    } else if (orderDetails.grandtotal === 0) {
      setFormStatus("Cannot complete a purchase of zero items.")
    } else {
      setFormStatus("Success");
      setFormData({
        email: "",
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardholder: "",
        cardnumber: "",
        expire: "",
        cvv: ""
      })
      navigateToPage("/");
    }
  };

  return (
    <main className="checkout-layout" aria-label="Checkout Page">
      <form className="checkout-form" onSubmit={handleCheckout}>
        <h1>Shipping Info</h1>
        <div className="personal-information" aria-label="Personal Information">
          <div className="email">
            <p>Email</p>
            <input type="text" name="email" onChange={handleFieldChange} value={formData.email}></input>
          </div>
          <div className="row-1">
            <div className="firstname">
              <p>First Name</p>
              <input type="text" name="firstname" onChange={handleFieldChange} value={formData.firstname}></input>
            </div>
            <div className="lastname">
              <p>Last Name</p>
              <input type="text" name="lastname" onChange={handleFieldChange} value={formData.lastname}></input>
            </div>
          </div>
          <div className="row-2">
            <div className="address">
              <p>Address (Include apt/suite)</p>
              <input type="text" name="address" onChange={handleFieldChange} value={formData.address}></input>
            </div>
          </div>
          <div className="row-3">
            <div className="city">
              <p>City</p>
              <input type="text" name="city" onChange={handleFieldChange} value={formData.city}></input>
            </div>
            <div className="state">
              <p>State</p>
              <input type="text" name="state" placeholder="Ex. FL" onChange={handleFieldChange} value={formData.state}></input>
            </div>
          </div>
          <div className="zip">
            <p>ZIP Code</p>
            <input type="text" name="zip" onChange={handleFieldChange} value={formData.zip}></input>
          </div>
        </div>
        <hr></hr>
        <h1>Billing Info</h1>
        <div className="banking-information" aria-label="Banking Information">
          <div className="holder-name">
            <p>Cardholder Name</p>
            <input type="text" name="cardholder" onChange={handleFieldChange} value={formData.cardholder}></input>
          </div>
          <div className="row-1">
            <div className="card-number">
              <p>Card Number (16 digits)</p>
              <input type="text" name="cardnumber" onChange={handleFieldChange} value={formData.cardnumber}></input>
            </div>
            <div className="expire">
              <p>Expiration</p>
              <input type="text" name="expire" placeholder="mm/yy" onChange={handleFieldChange} value={formData.expire}></input>
            </div>
          </div>
          <div className="cvv">
            <p>CVV</p>
            <input type="text" name="cvv" onChange={handleFieldChange} value={formData.cvv}></input>
          </div>
        </div>
        <hr></hr>
        <h1>Order Summary</h1>
        <div className="order-summary" aria-label="Order Summary">
          <p><b>Sub Total:</b> ${orderDetails.subtotal.toFixed(2)}</p>
          <p><b>Savings:</b> ${orderDetails.savings.toFixed(2)}</p>
          <p><b>Total:</b> ${orderDetails.grandtotal.toFixed(2)}</p>
          <button type="submit">Purchase</button>
        </div>
        <p className="form-status">{formStatus}</p>
        <p className="disclaimer">DISCLAIMER: YOU WILL NOT ACTUALLY BE CHARGED. NO DATA INPUT IS SAVED/STORED</p>
      </form>
    </main>
  );
}

export default Checkout;