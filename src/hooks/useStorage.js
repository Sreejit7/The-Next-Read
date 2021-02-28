import {useState, useEffect } from 'react';
import {storage, firestore} from '../firebase';
import {useGlobalContext} from '../context';
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const {setBookURL} = useGlobalContext();

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const collectionRef = firestore.collection('images');
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred /snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async() => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        setBookURL(url);
        collectionRef.add({
          imgUrl: url
        })
    })
  },[file]);

  return {progress, url, error};

}

export default useStorage;