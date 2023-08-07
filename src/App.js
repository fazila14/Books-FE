import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Defaultpage from './pages/defaultpage/defaultpage';
import Login from './pages/login/login';
import AllbooksPage from './pages/allBookspage/allBookspage';
import BooksFormSubmit from './components/booksFormSubmit/booksFormSubmit';
import GetBookDetails from './pages/getbookDetails/getbookDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Defaultpage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/allbooks' element={<AllbooksPage/>}/>
          <Route path='/addnew-book' element={<BooksFormSubmit/>}/>
          <Route path ='/getbookDetails' element={<GetBookDetails/>}/>
          <Route path="*" element={<div>jams not found</div>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
