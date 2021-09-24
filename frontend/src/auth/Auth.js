import React,{useEffect, useState} from 'react'
import fire from './fire'
import Login from './Login'
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


import HomePage from './HomePage'

function Auth() {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [hasAccount, setHasAccount] = useState(false)

    const clearInputs=()=>{
        setEmail('')
        setPassword('')
    }

    const clearErr=()=>{
        setEmailErr('')
        setPasswordErr('')
    }

    const handleLogin=()=>{
        clearErr()
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user=userCredential.user
        })
            .catch(err=>{
                switch(err.code){
                    case 'auth/invalid-email':
                    case 'auth/user-disabled': 
                    case 'auth/user-not-found': 
                        setEmailErr(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordErr(err.message);
                        break;
                }
            })
    }

    const handleSignUp=()=>{
        clearErr()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
            .catch(err=>{
                switch(err.code){
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':  
                        setEmailErr(err.message);
                        break;
                    case 'auth/weak-password':
                        setPasswordErr(err.message);
                        break;
                }
            })

    }

    const handleLogout=()=>{
        const auth=getAuth()
        signOut(auth)
    }

    const authListner=()=>{
        const auth=getAuth()
        onAuthStateChanged(auth,(user)=>{
            if(user){
                clearInputs()
                setUser(user)
            }else{
                setUser('')
            }
        })
    }

    useEffect(()=>{
        authListner()
    },[])

    return (
        <div>
        {user?(
            <HomePage handleLogout={handleLogout}/>
        ):(
            <Login
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailErr={emailErr}
                passwordErr={passwordErr}
                />
        )}
            
            
        </div>
    )
}

export default Auth
