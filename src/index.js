import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AppProvider } from './context';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import Upload from './components/Upload';
import CheckoutPage from './pages/CheckoutPage';
import Payment from './components/Payment';
import OrderPage from './pages/OrderPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        
        <Sidebar/>
        <Switch>
          <Route exact path = "/about">
            <AboutPage/>
          </Route>
          <Route exact path = "/order">
            <Navbar/>
            <OrderPage/>
          </Route>
          <Route exact path = "/payment">
           <Navbar/>
            <Payment/>
          </Route>
          <Route exact path = "/checkout">
          <Navbar/>
            <CheckoutPage/>
          </Route>
          <Route exact path = "/upload">
          <Navbar/>
            <Upload/>
          </Route>
          <Route path = "/login">
            <LoginPage/>
          </Route>
          <Route path = "/home">
          <Navbar/>
            <HomePage/>
          </Route>
          <Route exact path = "/">
            <App />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
