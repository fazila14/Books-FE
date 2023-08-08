import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Defaultpage from './pages/defaultpage/defaultpage';
import Login from './pages/login/login';
import AllbooksPage from './pages/allBookspage/allBookspage';
import AddBook from './pages/addbook/addbooks';
import GetBookDetails from './pages/getbookDetails/getbookDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Defaultpage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/all' element={<AllbooksPage/>}/>
          <Route path='/addbook' element={<AddBook/>}/>
          <Route path ='/details/:id' element={<GetBookDetails/>}/>
          <Route path="*" element={<div>jams not found</div>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
