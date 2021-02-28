import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';
import '../styles/login.css';
import {auth} from '../firebase';
import {useGlobalContext} from '../context';
import SignUp from './SignUp';


const Login = () => {

  const {setUser} = useGlobalContext();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, setSignUp] = useState(false);

  const createAccount = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      if(auth){
        console.log('user created!');
        history.push('/home');
      }
    })
    .catch((error) => alert(error.message));
  }
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      if(auth){
        history.push('/home');
      }
    })
    .catch((error) => alert(error.message));
  }
  useEffect(()=> {
    setEmail('');
    setPassword('');
    const unsubscribe = auth.onAuthStateChanged( user => {
      setUser(user);
    });
    return unsubscribe;
  },[]);
  
  return (
    <>
    {!signUp && <div className="login-container">
      <h1 className='login-title'>Sign-in</h1>
          <form className = "login-form">
              <div className="form-item">
                <label>Email ID</label>
                <input className = "form-input" type='text'placeholder="Type your Email ID here" value={email} onChange={e=> setEmail(e.target.value)}/>
              </div>
              <div className="form-item">
                <label>Password</label>
                <input className = "form-input" type='password' placeholder="Type your password here" value={password} onChange={e=> setPassword(e.target.value)}/>
              </div>
              <button className="btn login-btn" type="submit" onClick = {signIn} >
                Sign-in
              </button>
          </form>
          <p className = "form-text">
              By signing-in, you agree to our
              Conditions of Use & Sale. Please check out our
              privacy policy, cookies & our Interent-Based Ads.
          </p>
          <p>Don't have an account?</p>
          <button className="btn create-account-btn" onClick = {() => setSignUp(true)} >Create Account</button>
    </div>}
    {signUp && <SignUp/>}
    </>
  )
}

export default Login
