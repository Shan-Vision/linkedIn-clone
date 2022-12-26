import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import linkeInLogo from "./images/LI-In-Bug.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import imageMine from "./images/Shan.jpg";

function Header() {
	return (
		<div className="header">
			{/* <h1>this is header</h1> */}
			<div className="header__left">
				<img src={linkeInLogo} alt="logo" className="" />
				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption avatar={imageMine} title="Me" />
			</div>
		</div>
	);
}

export default Header;
