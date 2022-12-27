import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/auth/authSlice";

function App() {
	const user = useSelector(selectUser);
	
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
				</div>
			)}

			{/* SideBar */}
			{/* Widgets */}
		</div>
	);
}

export default App;
