import React from 'react'
import { useGlobalContext } from '../context'
import Book from './Book';
import {Link, useHistory} from 'react-router-dom';
import '../styles/checkout.css';
import '../styles/order.css';
const Order = () => {
  const {address, book, ordered} = useGlobalContext();
  const {houseNo, city, pin} = address;
  const history = useHistory();
  const goBack = () => {
    ordered();
    history.replace('/home');
  }
  return (
    <>
    {book?
      <div className = 'order'>
        <h2>Thank you for your order!</h2>
        <h3>Enjoy your new read!</h3>
        <Book book = {book} order = {true}/>
        <section className = "deliver-to">
          <h3>Your book will be delivered to:</h3>
          <span>{houseNo}, {city}, {pin}</span>
        </section>
        <button className = "btn order-complete-btn" onClick = {goBack}>Back to Library</button>
      </div>
      :
      <Link className = "homepage-link" to = "/home">
      <h1>Pick a book from our exclusive library first!</h1>
    </Link>}
    </>
  )
}

export default Order
