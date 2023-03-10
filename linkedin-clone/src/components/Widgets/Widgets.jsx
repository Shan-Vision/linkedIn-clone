import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle("Shan is back", "Top news - 1000 readers")}
			{newsArticle("CoronaVirus: Sweden updates", "Top news - 886 readers")}
			{newsArticle("Bitcoin Breaks $22k", "Crypto - 8347 readers")}
			{newsArticle("Tesla hits a new highs", "Cars & auto - 634 readers")}
			{newsArticle("Is Redux too good?", "Code - 414 readers")}
		</div>
	);
}

export default Widgets;
