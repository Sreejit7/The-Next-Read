import React,{useState} from 'react'
import {firestore, timestamp} from '../firebase';
import { useGlobalContext } from '../context';
import {useHistory} from 'react-router-dom'
import '../styles/login.css';
import '../styles/upload.css';
import ProgressBar from './ProgressBar';
import BookUploaded from './BookUploaded';

const Upload = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [rentPrice, setRentPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [forRent, setForRent] = useState(false);
  const [forSell, setForSell] = useState(false);
  const [bookImg, setBookImg] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [bookUploaded, setBookUploaded] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const {user, bookURL} = useGlobalContext();
  const collectionRef = firestore.collection('books');
  const types = ['image/png', 'image/jpeg'];
  const bookUpload = (e) => {
    let book = e.target.files[0];
    if(book && types.includes(book.type)){
      setBookImg(book);
      setError('');
    }else{
      setBookImg(null);
      setError('Please select an image of type: png / jpeg');
      return alert(error);
    }
  }
  const upload = async() => {
    const createdAt = timestamp();
    await collectionRef.add({
      title,
      author,
      publisher,
      originalPrice,
      publishYear,
      forRent,
      forSell,
      bookURL,
      createdAt,
      sellPrice,
      rentPrice,
      contact: user.email
    }).then(
      history.replace('/home')
    ).catch(err =>
      console.log(err)
    );
  }
  // useEffect(() => {
  //   if(user){
  //     setLoginError(false);
  //   }else{
  //     setLoginError(true);
  //   }
  // },[user]);
  return (
    <div className="upload-page">
    {user && !bookUploaded && <form className = "upload-component">
      <div className="form-item">
        <label>Book Title</label>
        <input className = "form-input" type='text'placeholder="E.g. The Alchemist" value={title} onChange={e=> setTitle(e.target.value)} required/>
      </div>
      <div className="form-item">
        <label>Author</label>
        <input className = "form-input" type='text' placeholder="E.g. Paulo Coelho" value={author} onChange={e=> setAuthor(e.target.value)} required/>
      </div>
      <div className = "form-item">
        <label>Publisher</label>
        <input className = "form-input" type = "text" placeholder = "E.g. HarperCollins" value = {publisher} onChange = {e => setPublisher(e.target.value)} required/>
      </div>
      <div className = "form-item">
        <label>Original Price (in ₹)</label>
        <input className = "form-input" type = "number" placeholder = "Price at which you bought the book" value = {originalPrice} onChange = {e => setOriginalPrice(e.target.value)} required/>
      </div>
      <div className = "form-item">
        <label>Publishing Year</label>
        <input className = "form-input" type = "number" placeholder = "Publishing year of the book" value = {publishYear} onChange = {e => setPublishYear(e.target.value)} required/>
      </div>
      <div className = "form-checkbox">
        <label>Giving book for: Sell</label>
        <input className = "form-check-input" type = "checkbox" value = {forSell} checked = {forSell} onChange = {() => setForSell(!forSell)}/>
        <label>Rent</label>
        <input className = "form-check-input" type = "checkbox" value = {forRent} checked = {forRent} onChange = {() => setForRent(!forRent)}/>
      </div>
      <div className = "form-item">
        <label>Desired Selling Price (in ₹)</label>
        <input className = "form-input" type = "number" disabled = {!forSell} placeholder = "Price you want to sell it for" value = {sellPrice} onChange = {e => setSellPrice(e.target.value)}/>
      </div>
      <div className = "form-item">
        <label>Desired Renting Price (in ₹)</label>
        <input className = "form-input" type = "number" disabled = {!forRent} placeholder = "Price you want to rent it for" value = {rentPrice} onChange = {e => setRentPrice(e.target.value)}/>
      </div>
      <div className = "form-file-upload">
        <label className = "file-input-label" required>Upload Book Image</label>
        <input className = "file-input" type = "file" onChange = {bookUpload}/>
      </div>
      {bookImg && <ProgressBar file = {bookImg} setFile = {setBookImg} uploading = {setUploading}/>}
      <button className = "btn book-upload-btn" disabled = {uploading} onClick = {upload}>Upload Your Book</button>
    </form>}
    {bookUploaded && <BookUploaded uploaded = {() => setBookUploaded(false)}/>}
    {!user && <h1 className = "error">You must sign in to upload a book!</h1>}
    </div>
  )
}

export default Upload
