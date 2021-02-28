import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/upload.css';
const BookUploaded = ({uploaded}) => {
  return (
    <div className = "book-uploaded">
      <h1>Book successfully uploaded to our library!</h1>
      <div className="redirect-links">
      <Link to = "/upload" onClick = {uploaded} className = "redirect-link">Add another book</Link>
      <Link to = "/home" className = "redirect-link">Go to home</Link>
      </div>
      
    </div>
  )
}

export default BookUploaded
