import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeContainer from './StripeContainer';
require('dotenv').config()

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
const Payment = ({address}) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeContainer address = {address}/>
    </Elements>
  )
}

export default Payment
