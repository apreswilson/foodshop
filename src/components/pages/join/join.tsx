import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faKey,
	faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

import "./join.css";
import { useState } from "react";

const Join: React.FC = () => {

	const [formStatus, setFormStatus] = useState("");

	const signUpHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const getFormInput = new FormData(event.currentTarget);
		const username = getFormInput.get("username") as string;
		const password = getFormInput.get("password") as string;
		const confirm = getFormInput.get("password-confirm") as string;


		const usernameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
		const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

		if (!usernameRegex.test(username)) {
			setFormStatus("Username must be first and last name")
			return;
		}

		if (password.length === 0) {
			setFormStatus("Enter a password")
			return;
		}

		if (confirm !== password) {
			setFormStatus("Password and Confirm Password Don't Match")
			return;
		}

		if (!passwordRegex.test(confirm)) {
			setFormStatus("Invalid Password Format. Requirements: 8 or more characters, 1 special character, 1 capital letter")
			return;
		}

		setFormStatus("Created Account Successfully")
		sessionStorage.setItem("credentials", JSON.stringify({ username, confirm }))

	}

	return (
		<main className="signup-layout" aria-label="Signup Page">
			<form className="signup-form" onSubmit={signUpHandler}>
				<div className="logo">
					<img src="/store-logo.svg" alt="Food Shop Logo"></img>
				</div>
				<h1>Sign Up</h1>
				<div className="username">
					<FontAwesomeIcon icon={faUser} />
					<input type="text" name="username" placeholder="Full Name"></input>
				</div>
				<div className="password">
					<FontAwesomeIcon icon={faKey} />
					<input type="password" name="password" placeholder="Password"></input>
				</div>
				<div className="password">
					<FontAwesomeIcon icon={faCheckCircle} />
					<input type="password" name="password-confirm" placeholder="Confirm Password"></input>
				</div>
				<button type="submit">Sign Up</button>
				<p className="status">{formStatus}</p>
			</form>
		</main>
	)
}

export default Join;
