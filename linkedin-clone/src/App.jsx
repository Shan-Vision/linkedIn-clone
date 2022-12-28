import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Widgets from "./components/Widgets";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./redux/auth/authSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		onAuthStateChanged(auth, (userAuth) => {
			if (userAuth) {
				// user is logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoURL: userAuth.photoURL,
					})
				);
			} else {
				// user is logged out
				dispatch(logout());
			}
		});
	}, [dispatch]);
	return (
		<div className="app">
			<Header />
			{/* AppBody */}

			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}

			{/* Widgets */}
		</div>
	);
}

export default App;
