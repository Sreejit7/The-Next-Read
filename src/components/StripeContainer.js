import React,{useEffect, useState} from 'react'
import { CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import '../styles/payment.css';
import { useGlobalContext } from '../context';
import axios from '../axios';
import {useHistory} from 'react-router-dom';
const StripeContainer = ({address}) => {
  const history = useHistory();
  const {book, setAddress, total} = useGlobalContext();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [ clientSecret, setClientSecret] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  const stripe = useStripe(); 
  const elements = useElements();
 
  useEffect(() => {
    const getClientSecret = async() => {
      const response = await axios({
        method: 'POST',
        url: `/payments/create?total=${total * 100}`
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  },[book]);

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  const makePayment = async(e) => {
    setProcessing(true);
    e.preventDefault();
    if(!stripe || !elements){
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement
      }
    }).then(({paymentIntent}) => {
      setAddress(address);
      setSucceeded(true);
      setProcessing(false);
      setError(null);
      setPaymentError(paymentIntent.last_payment_error);
      history.replace('/order');
    }).catch((error) => {
      console.log(error.message);
    }) 
  }; 
  
  return (
    <>
    {!error && <form className = "payment-form" onSubmit = {makePayment}>
      <CardElement onChange = {handleChange} className = "card-element"/>
      <button type="submit" disabled={!stripe && processing} className = "btn pay-btn">
        {processing? 'Processing...': 'Pay'}
      </button>
    </form>}
    {error && <div>{error}</div>}
    </>
  )
}

export default StripeContainer
