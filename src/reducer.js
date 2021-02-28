const reducer = (state, action) => {
  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_BOOK_URL':
      return{
        ...state,
        bookURL: action.url
      }
    case 'BOOK_BUY':
      return{
        ...state,
        book: action.book,
        total: action.book.sellPrice
      }
    case 'BOOK_RENT':
      return{
        ...state,
        book: action.book,
        total: action.book.rentPrice
      }
    case 'SET_ADDRESS':
      return{
        ...state,
        address: action.address
      }
    case 'ORDERED':
      return{
        ...state,
        book: action.book,
        total: action.total
      }
    default:
      return state;
  }
  
}

export default reducer