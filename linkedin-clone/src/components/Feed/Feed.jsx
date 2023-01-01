import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../Post";
import { db } from "../../firebase";
import {
	collection,
	addDoc,
	onSnapshot,
	serverTimestamp,
	orderBy,
	query,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSlice";
import FlipMove from "react-flip-move";

function Feed() {
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);
	const user = useSelector(selectUser);

	useEffect(() => {
		// Adding changes between snapshots
		const postRef = collection(db, "posts");
		const q = query(postRef, orderBy("timestamp", "desc"));
		onSnapshot(q, (snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	const inputChange = (e) => {
		setInput(e.target.value);
	};

	const sendPost = async (e) => {
		e.preventDefault();

		// add collection "posts" into Cloud Firestore
		await addDoc(collection(db, "posts"), {
			name: user.displayName,
			email: user.email,
			message: input,
			photoUrl: user.photoURL,
			timestamp: serverTimestamp(),
		});
		setInput("");
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input value={input} onChange={inputChange} type="text" />
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
					<InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
					<InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
					<InputOption
						Icon={CalendarViewDayIcon}
						title="Write article"
						color="#7FC15E"
					/>
				</div>
			</div>
			<FlipMove>
				{posts.map(({ id, data: { name, email, message, photoUrl } }) => (
					<Post
						key={id}
						name={name}
						email={email}
						message={message}
						photoUrl={photoUrl}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
