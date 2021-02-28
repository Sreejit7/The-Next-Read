import React,{useState, useEffect} from 'react'
import {useGlobalContext} from '../context';
import {useHistory} from 'react-router-dom'
import {auth} from '../firebase';
import Login from './Login';

const SignUp = () => {
  const {setUser} = useGlobalContext();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const createAccount = async(e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      setConfirmPassword('');
      return alert('Passwords do not match!');
    }
    setLoading(true);
    await auth.createUserWithEmailAndPassword(email, password)
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
    setConfirmPassword('');
    const unsubscribe = auth.onAuthStateChanged( user => {
      setUser(user);
    });
    return unsubscribe;
  },[]);
  return (
    <>
    {!signIn && <div className="login-container">
      <h1 className='login-title'>Join the Party!</h1>
          <form className = "login-form">
              <div className="form-item">
                <label>Email ID</label>
                <input className = "form-input" type='text'placeholder="Type your Email ID here" value={email} onChange={e=> setEmail(e.target.value)}/>
              </div>
              <div className="form-item">
                <label>Password</label>
                <input className = "form-input" type='password' placeholder="Type your password here" value={password} onChange={e=> setPassword(e.target.value)}/>
              </div>
              <div className="form-item">
                <label>Confirm Password</label>
                <input className = "form-input" type='password' placeholder="Retype your password" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}/>
              </div>
          </form>
          <p className = "form-text">
              By signing-up, you agree to our
              Conditions of Use & Sale. Please check out our
              privacy policy, cookies & our Interent-Based Ads.
          </p>
          <button className="btn create-account-btn" onClick = {createAccount} >Create Account</button>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick = {() => setSignIn(true)} >Sign In</button>
    </div>}
    {signIn && <Login/>}
    </>
  )
}

export default SignUp
