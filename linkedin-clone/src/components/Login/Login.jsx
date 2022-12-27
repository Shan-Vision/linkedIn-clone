import React from "react";
import "./Login.css";
import linkedInLogo from "../../images/LI-Logo.png";

function Login() {
	const register = () => {};
	const loginToApp = () => {};
	return (
		<div className="login">
			<img src={linkedInLogo} alt="" />
			<form>
				<input placeholder="Full name (required if registring)" type="text" />
				<input placeholder="Profile pic URL(optional)" type="text" />
				<input placeholder="Email" type="email" />
				<input placeholder="Password" type="password" />
				<button type="submit" onClick={loginToApp}>
					Sign in
				</button>
				<p className="login__subinfo">
					Not a member?{"  "}
					<span className="login__register" onClick={register}>
						Register Now
					</span>
				</p>
			</form>
		</div>
	);
}

export default Login;
