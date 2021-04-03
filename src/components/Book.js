import React,{useState} from 'react';
import '../styles/book.css';
import {useGlobalContext} from '../context';
import { useHistory } from 'react-router-dom';

const Book = ({book, checkout, order}) => {
  const {title, author, bookURL, publisher, contact, forRent, rentPrice, forSell, sellPrice, originalPrice, publishYear} = book;
  const {bookBuy, bookRent, user} = useGlobalContext();
  const history = useHistory();
  const buyHandler = (bookItem) => {
    bookBuy(bookItem);
    history.push('/checkout');
  }
  const rentHandler = (bookItem) => {
    bookRent(bookItem);
    history.push('/checkout');
  }
  return (
    <div className = {`book ${checkout && "book-checkout"} ${order && "book-order"}`} >
      <div className="book-detail">
        <h1 className = "book-title">{title}</h1>
        <h3>{author}</h3>
        {!order && <p>{publisher}</p>}
        {!order && <span className = "book-original-price">(Original Price: ₹{originalPrice})</span>}
        {!order && <p>Published: {publishYear}</p>}
      </div>
      <img
        src = {bookURL}
        alt = ""
        className = {`book-img ${checkout && "book-img-checkout"} ${order && "book-img-order"}`}
      />
      {!checkout && !order && user?.email !== contact &&
        <div className="book-price">
        {forSell && <button className = "btn buy-btn" onClick = {() => buyHandler(book)}>Buy for ₹{sellPrice}</button>}
        {forRent && <button className = "btn borrow-btn" onClick = {() => rentHandler(book)}>Borrow for ₹{rentPrice}</button>}
        </div>
      }
      {user?.email === contact && <p className = "btn self-list-btn">You listed this book!</p>}
    </div>
  )
}

export default Book
