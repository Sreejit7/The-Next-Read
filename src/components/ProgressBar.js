import React,{useEffect} from 'react'
import useStorage from '../hooks/useStorage';
import '../styles/progressbar.css';
const ProgressBar = ({file, setFile, uploading}) => {

  const {url, progress} = useStorage(file);
  useEffect(() => {
    if(url){
      setFile(null);
      uploading(false);
    }
    else{
      uploading(true);
    }
  }, [url, setFile, uploading]);
  return (
    <div className = "progress-bar" style = {{width: `${progress}%`}}>
    </div>
  )
}

export default ProgressBar
