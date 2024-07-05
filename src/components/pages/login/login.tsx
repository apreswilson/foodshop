import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBreadSlice,
  faEgg,
  faFish,
  faKey,
  faPizzaSlice,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./login.css"


const Login: React.FC = () => {

  const navigateToPage = useNavigate();

  return (
    <main className="login-layout" aria-label="Login Page">
      <section className="left-side">
        <div className="logo">
          <img src="/store-logo.svg" alt="Food Shop Logo"></img>
        </div>
        <form className="login-form" aria-label="Login Form">
          <h1>Login</h1>
          <div className="username">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" name="username" placeholder="Username"></input>
          </div>
          <div className="password">
            <FontAwesomeIcon icon={faKey} />
            <input type="password" name="password" placeholder="Password"></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
      <section className="right-side" aria-label="Sign Up">
        <div className="icons">
          <FontAwesomeIcon icon={faEgg} />
          <FontAwesomeIcon icon={faFish} />
          <FontAwesomeIcon icon={faPizzaSlice} />
          <FontAwesomeIcon icon={faBreadSlice} />
        </div>
        <div className="text">
          <h1>Food Shop</h1>
          <p>The home of purchasing your food online</p>
          <p>Become a member to recieve exclusive benefits</p>
        </div>
        <button className="sign-up" onClick={() => navigateToPage("/signup")}>
          <p>Sign Up</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </section>
    </main>
  )
}

export default Login;