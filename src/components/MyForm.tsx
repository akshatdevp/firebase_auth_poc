import { useState } from 'react'
import {authenticate,logout,createAccount} from '../utils/auth';
import { getAuth } from 'firebase/auth';
import { firebase_auth} from '../firebase';
import '../App.css';
function MyForm() {
	const [ username, setUserName] = useState<string>('');
	const [ password, setPassword] = useState<string>('');
	const [ creds, setCreds] = useState<any>('');
	const signInUpOrOut = (e : any) => {
		e.preventDefault(); 
		// console.log(e)
		console.log(e.nativeEvent.submitter.name)
		switch(e.nativeEvent.submitter.name) {
			case "in" : authenticate(username,password)
					    .then( (user) => { setCreds(user); })
					    .catch((err) => { console.log(err) })
					    break;
			case "out" : logout()
					    .then( () => { setCreds(null); console.log(getAuth().currentUser, firebase_auth.currentUser)  } )
					    .catch((err) => {console.log(err) });
					    break;
			case "up" : createAccount(username,password)
					    .then( (user) => { setCreds(user); })
					    .catch((err) => { console.log(err) })
					    break;
		}
		console.log(getAuth().currentUser, firebase_auth)
		
	}
	return <form className = "loginForm" onSubmit = {signInUpOrOut}>

		<label> Username    
		<input value = {username} onChange ={e => setUserName(e.target.value)}/>	
		</label>
		<label> Password  
		<input type = "password" value = {password} onChange = {e => setPassword(e.target.value)}/>	
		</label>
		{ 
			creds?( 
					<div>
					<button type = "submit"  name = "out"> Sign out </button>
					</div>
			      ):
				(
				 <div>
				 <button type = "submit" name = "in"> Sign in </button>
				 <button type = "submit" name = "up"> Sign up </button>
				 </div>
				)	
		}
	</form>
}

export {MyForm}
