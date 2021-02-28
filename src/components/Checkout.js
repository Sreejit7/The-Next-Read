import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context'
import Book from './Book'
import '../styles/checkout.css'
import Payment from './Payment';
const Checkout = () => {
  const {book, total, user} = useGlobalContext();
  const [houseNo, setHouseNo] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const [contactNo, setContactNo] = useState('');
  const address = {
    houseNo,
    city,
    pin,
    contactNo
  }
  return (
    <>
    {user && book && 
    <div className = "checkout-component">
      <Book book = {book} checkout = {true}/>
      <h2>Amount payable: ₹ {total}</h2>
      <section className = "delivery-address">
        <div className="address-inputs">
          <input className = "address-input" placeholder = "House No." type = "text" value = {houseNo} onChange = {(e) => setHouseNo(e.target.value)}/>
          <input className = "address-input" placeholder = "City" type = "text" value = {city} onChange = {(e) => setCity(e.target.value)}/>
          <input className = "address-input" placeholder = "Pin" type = "number"value = {pin} onChange = {(e) => setPin(e.target.value)} />
        </div>
        <div className="address-inputs">
          <input className = "address-input" placeholder = "Contact No" type = "number" value = {contactNo} onChange = {(e) => setContactNo(e.target.value)}/>
        </div>
      </section>
      <Payment address = {address}/>
      <section className = "checkout-links">
        <a className = "checkout-link link" href = {`mailto:${book?.contact}`}>Contact seller</a>
        <a className = "checkout-link link" href = '/home'>Pick something else</a>
      </section>
    </div>}
    {user && !book && <Link className = "homepage-link" to = "/home">
    <h1>Pick a book from our exclusive library first!</h1>
    </Link>}
    {!user && <h1 className = "error">Sign in to take your favourite book home!</h1>}
    </>
  )
}

export default Checkout
