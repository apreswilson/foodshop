import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faKey,
	faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

import "./join.css";

const Join: React.FC = () => {
	return (
		<main className="signup-layout" aria-label="Signup Page">
			<form className="signup-form">
				<div className="logo">
					<img src="/store-logo.svg" alt="Food Shop Logo"></img>
				</div>
				<h1>Sign Up</h1>
				<div className="username">
					<FontAwesomeIcon icon={faUser} />
					<input type="text" name="username" placeholder="Username"></input>
				</div>
				<div className="password">
					<FontAwesomeIcon icon={faKey} />
					<input type="password" name="password" placeholder="Password"></input>
				</div>
				<div className="password">
					<FontAwesomeIcon icon={faCheckCircle} />
					<input type="password" name="password" placeholder="Confirm Password"></input>
				</div>
				<button type="submit">Sign Up</button>

			</form>
		</main>
	)
}

export default Join;
