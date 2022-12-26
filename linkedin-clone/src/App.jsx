import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
	return (
		<div className="app">
			<Header />
			{/* AppBody */}
			<div className="app__body">
				<Sidebar />
			</div>
			{/* SideBar */}
			{/* Feed */}
			{/* Widgets */}
		</div>
	);
}

export default App;
