import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import backImage from "../../images/angular-vs-react-min.jpg";

function Sidebar() {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src={backImage} alt="backgroundImage" />
				<Avatar className="sidebar__avatar" />
				<h2>Shan Abdullaev</h2>
				<h4>perfekt.vision2019@gmail.com</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you </p>
					<p className="sidebar__statNumbers">2,543</p>
				</div>
				<div className="sidebar__stat">
					<p>Viewes on post</p>
					<p className="sidebar__statNumbers">2,448</p>
				</div>
			</div>

			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("sowtwareengineering")}
				{recentItem("design")}
				{recentItem("developer")}
				{recentItem("redux")}
			</div>
		</div>
	);
}

export default Sidebar;