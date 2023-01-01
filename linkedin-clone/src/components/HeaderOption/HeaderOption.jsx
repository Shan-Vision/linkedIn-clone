import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
	const user = useSelector(selectUser);
	return (
		<div className="headerOption" onClick={onClick}>
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && <Avatar className="headerOption__icon" src={user?.photoURL} />}
			<h3 className="headerOption__title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
