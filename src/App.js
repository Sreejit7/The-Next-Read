import React,{useEffect} from 'react';
import Home from './components/Home';
import {useGlobalContext} from './context';
import {useHistory} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
function App() {
  const history = useHistory();
  const {user} = useGlobalContext();

  useEffect(() => {
    if(user){
      history.push('/home');
    }
    console.log(user);
  },[user]);
  
  return (
    <>
    <Home/>
    <AboutPage/>
    </>
  );
}

export default App;
