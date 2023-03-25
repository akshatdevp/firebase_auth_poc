import {firebase_auth} from '../firebase';
import { signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut} from 'firebase/auth';
const authenticate = async (username : string, password : string)   => { 		
	let userCreds = await signInWithEmailAndPassword(firebase_auth, username, password);
	try { 
		const user = userCreds.user;
		return user;
	}
	catch(error) {
		return error;
	}

}

const createAccount = async ( username : string, password : string) => {
	let userCreds = await createUserWithEmailAndPassword(firebase_auth, username, password);
	try { 
		const user = userCreds.user;
		return user;
	}
	catch(error) {
		return error;
	}
}

const logout = async () => {
	
	try { 
		await signOut(firebase_auth)
	}
	catch(error) {
		return error;
	}
}

export { authenticate, createAccount , logout } 
