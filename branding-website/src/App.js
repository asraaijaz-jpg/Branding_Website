import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter , Route , Link , Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      </BrowserRouter>
      <Header/>
    </div>
  );
}

export default App;
