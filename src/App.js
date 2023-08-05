import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Defaultpage from './pages/defaultpage/defaultpage';
import Login from './pages/login/login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Defaultpage/>}/>
    <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<div>jams not found</div>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
