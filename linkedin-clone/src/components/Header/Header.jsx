import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import linkeInLogo from "../../images/LI-In-Bug.png";
import HeaderOption from "../HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "redux/auth/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const onLogoutOfApp = () => {
		dispatch(logout());
		signOut(auth);
	};
	return (
		<div className="header">
			<div className="header__left">
				<img src={linkeInLogo} alt="logo" className="" />
				<div className="header__search">
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption
					avatar={true}
					title={user ? user.displayName : "User"}
					onClick={onLogoutOfApp}
				/>
			</div>
		</div>
	);
}

export default Header;
