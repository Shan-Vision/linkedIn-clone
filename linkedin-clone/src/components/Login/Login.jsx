import React, { useState } from "react";
import "./Login.css";
import linkedInLogo from "../../images/LI-Logo.png";
import { auth } from "../../firebase";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authSlice";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profileUrl: userAuth.user.photoURL,
					})
				);
			})
			.catch((error) => alert(error));
	};
	const register = () => {
		if (!name) {
			return alert("Please enter a full name!");
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((userAuth) => {
				updateProfile(userAuth.user, {
					displayName: name,
					photoURL: profilePic,
				}).then(() => {
					dispatch(
						login({
							email: userAuth.user.email,
							uid: userAuth.user.uid,
							displayName: name,
							photoURL: profilePic,
						})
					);
				});
			})
			.catch((error) => alert(error.message));
	};
	const handleInputChange = (e) => {
		const { value, placeholder } = e.target;
		switch (placeholder) {
			case "Full name (required if registring)":
				setName(value);
				break;
			case "Profile pic URL(optional)":
				setProfilePic(value);
				break;
			case "Email":
				setEmail(value);
				break;
			case "Password":
				setPassword(value);
				break;
			default:
				break;
		}
	};
	return (
		<div className="login">
			<img src={linkedInLogo} alt="" />
			<form>
				<input
					value={name}
					placeholder="Full name (required if registring)"
					type="text"
					onChange={handleInputChange}
				/>
				<input
					value={profilePic}
					placeholder="Profile pic URL(optional)"
					type="text"
					onChange={handleInputChange}
				/>
				<input
					value={email}
					placeholder="Email"
					type="email"
					onChange={handleInputChange}
				/>
				<input
					autoComplete="auto"
					value={password}
					placeholder="Password"
					type="password"
					onChange={handleInputChange}
				/>
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
