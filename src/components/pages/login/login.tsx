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
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/login";

import "./login.css"

interface Login {
  username?: string;
  confirm?: string;
}

const Login: React.FC = () => {

  const storedCredentials = sessionStorage.getItem("credentials");
  let credentials: Login = {};
  if (storedCredentials) {
    credentials = JSON.parse(storedCredentials);
  }

  const [enableButton, setEnableButton] = useState({
    username: false,
    password: false
  });

  const [formStatus, setFormStatus] = useState("");
  const { token, setToken } = useContext(AuthContext)

  const placeHolderPassword = credentials.confirm?.replace(/./g, "*");

  const navigateToPage = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const getFormInput = new FormData(event.currentTarget);
    const username = getFormInput.get("username") as string | null;
    const password = getFormInput.get("password") as string | null;

    const usernameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    if (username && password) {
      if (password.length === 0 || username.length === 0) {
        setFormStatus("Make Sure All Fields Are Filled Out");
        return;
      }

      if (username != credentials.username || !usernameRegex.test(username)) {
        setFormStatus("Username Not Found");
        return;
      }

      if (password != credentials.confirm || !passwordRegex.test(password)) {
        setFormStatus("Password Invalid");
        return;
      }

      setFormStatus("Successful Login");
      setToken("Login Confirmed");
    }

  }

  const updateInformation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const getFormInput = new FormData(event.currentTarget);
    const username = getFormInput.get("username") as string;
    const password = getFormInput.get("password") as string;

    const usernameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    const testUsername = usernameRegex.test(username);
    const testPassword = passwordRegex.test(password);

    const currentUsername = credentials.username;
    const currentPassword = credentials.confirm;

    if (testUsername && !password) {
      sessionStorage.setItem("credentials", JSON.stringify({ username, confirm: currentPassword }))
    } else if (!username && testPassword) {
      sessionStorage.setItem("credentials", JSON.stringify({ username: currentUsername, confirm: password }))
    } else if (testUsername && testPassword) {
      sessionStorage.setItem("credentials", JSON.stringify({ username, confirm: password }))
    }

    event.currentTarget.reset();
  }

  const updateButtonEnable = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = event.currentTarget.value;

    if (value === "username") {
      setEnableButton({ username: true, password: false })
    }

    if (value === "password") {
      setEnableButton({ username: false, password: true })
    }
  }

  const logout = () => {
    sessionStorage.removeItem("token");
    setToken("");
  }

  return (
    <>
      {!token ?
        <main className="login-layout" aria-label="Login Page">
          <section className="left-side">
            <div className="logo">
              <img src="/store-logo.svg" alt="Food Shop Logo"></img>
            </div>
            <form className="login-form" aria-label="Login Form" onSubmit={handleLogin}>
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
              <p className="status">{formStatus}</p>
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
        :
        <main className="logged-in-layout">
          <form className="user-details" onSubmit={updateInformation}>
            <div className="logo">
              <img src="/store-logo.svg" alt="Food Shop Logo"></img>
            </div>
            <h1>User Information</h1>
            <div className="username-row">
              <div className="username">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" name="username" disabled={!enableButton.username} placeholder={credentials.username as string}></input>
              </div>
              <button onClick={updateButtonEnable} value={"username"}>Edit</button>
            </div>
            <div className="password-row">
              <div className="password">
                <FontAwesomeIcon icon={faKey} />
                <input type="password" name="password" disabled={!enableButton.password} placeholder={placeHolderPassword}></input>
              </div>
              <button onClick={updateButtonEnable} value={"password"}>Edit</button>
            </div>
            <button type="submit">Confirm</button>
          </form>
          <button className="logout" onClick={logout}>Logout</button>
        </main>
      }
    </>
  )
}

export default Login;