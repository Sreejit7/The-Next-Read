import React, {useState, useContext, useReducer} from 'react';
import reducer from './reducer';

const initialState = {
  user: null,
  book: null,
  total: 0,
  bookURL: '',
  address: '',
}
const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const sidebarToggle = () => {
    setSidebar(!sidebar);
  }
  const setAddress = (address) => {
    dispatch({
      type: 'SET_ADDRESS' ,
      address: address
    })
  }
  const setUser = (user) => {
    dispatch({
      type: 'SET_USER',
      user: user
    })
  }
  const bookBuy = (book)=> {
    dispatch({
      type: 'BOOK_BUY',
      book: book
    })
  }
  const bookRent = (book)=> {
    dispatch({
      type: 'BOOK_RENT',
      book: book
    })
  }
  const ordered = () => {
    dispatch({
      type: 'ORDERED',
      book: null,
      total: 0
    })
  }
  const setBookURL = (url) => {
    dispatch({
      type: 'SET_BOOK_URL',
      url: url
    })
  }
  return  <AppContext.Provider
    value = {{
      sidebar,
      sidebarToggle,
      ...state,
      setUser,
      setBookURL,
      bookBuy,
      bookRent,
      ordered,
      setAddress
    }}
  >
    {children}
  </AppContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}