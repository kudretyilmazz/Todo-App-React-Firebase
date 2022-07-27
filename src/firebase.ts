// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { message } from "antd";
import store from "./store/store";
import { Login, Logout } from "./store/authSlice/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyClFiWfIRd3Qx809rjHu9RRNTf8aNfMY10",
	authDomain: "todolist-2456f.firebaseapp.com",
	projectId: "todolist-2456f",
	storageBucket: "todolist-2456f.appspot.com",
	messagingSenderId: "17078227610",
	appId: "1:17078227610:web:cf380ad2d5d48cb00ac523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const registerUser = async (email, password) => {
	const auth = getAuth();
	const user = await createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			// Signed in
			const userInfo = userCredential.user;
			message.success("You have successfully registered!");
			return userInfo;
		})
		.catch(error => {
			message.error(error.code);
		});
	return user;
};

export const loginUser = async (email, password) => {
	const auth = getAuth();
	const user = await signInWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			// Signed in
			const user = userCredential.user;
			message.success("You have successfully logged in");
			return user;
			// ...
		})
		.catch(error => {
			message.error(error.code);
		});
	store.dispatch(Login(user));
};

export const logoutUser = () => {
	const auth = getAuth();
	signOut(auth)
		.then(() => {
			store.dispatch(Logout());
		})
		.catch(error => {
			message.error(error.code);
		});
};
