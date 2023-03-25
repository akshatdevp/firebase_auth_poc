import { firebase_auth } from '../firebase';
import { getAuth, onAuthStateChanged}  from 'firebase/auth';
import { useState } from 'react';
export const Header = () => {
	const [userUid, setUid] = useState('')
	onAuthStateChanged(firebase_auth, (user) => {
		if(user && user.email) {
			setUid(user.email)	
		}
		else {
			setUid("signed out")
		}
	})	

	return <header> 
	<h1> {userUid} </h1>					
	</header> 
}


