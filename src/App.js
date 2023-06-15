import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store';

function App() {
  return (
    <Router>
      <Routes>
    <div className="App">
    
      <Route path='*' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/store' element={<Store />} />
    </div>
    </Routes>
    </Router>
  );
}

export default App;
