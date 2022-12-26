import { Avatar } from "@mui/material";
import React from "react";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src="" alt="" />
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
		</div>
	);
}

export default Sidebar;
