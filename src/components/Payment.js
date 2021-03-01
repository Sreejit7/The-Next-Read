import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeContainer from './StripeContainer';
require('dotenv').config()

const stripePromise = loadStripe('pk_test_51HQXCJGyL70zgiPvqEql3YXbJbJG5LYCbHQxo08MRB7qjztSMk9J3GBh0ev5GIu8AghZ0Faun6QZ8MEe4cS9gvCm00Rw2vVC0O');
const Payment = ({address}) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeContainer address = {address}/>
    </Elements>
  )
}

export default Payment
