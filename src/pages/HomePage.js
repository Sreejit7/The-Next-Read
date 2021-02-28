import React from 'react'
import Book from '../components/Book';
import '../styles/homepage.css'
import {Link} from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';
import homebg from '../images/book-rack.webp';

const HomePage = () => {

  const {docs} = useFirestore('books');
  return (
    <>
    <img
      className = "homepage-bg"
      alt = "The Next Page - home"
      src = {homebg}
    />
    <div className="homepage-banner">
      <h1>Explore our amazing library!</h1>
      <h3 className = "buy">It's finally time to take home the books you always wanted to.</h3>
      <h3 className = "sell">Or, put up your old books for sell/rent on our library.</h3>
      <Link className = "link upload-link" to = "/upload">
      <div>Upload a book</div>
      </Link>
    </div>
    <div className = "homepage">
      {docs.map((doc,index) => (
        <Book book = {doc} key = {index}/>
      ))}
    </div>
    </>
  )
}

export default HomePage
