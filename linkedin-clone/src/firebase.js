import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
	apiKey: "AIzaSyBz9Bm0W58dd0GFccl0yvOuXtxCoJCViB0",
	authDomain: "linkedin-clone-13998.firebaseapp.com",
	projectId: "linkedin-clone-13998",
	storageBucket: "linkedin-clone-13998.appspot.com",
	messagingSenderId: "893092554448",
	appId: "1:893092554448:web:f0da492a4e8aff237f60d5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
