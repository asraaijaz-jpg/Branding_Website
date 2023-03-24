import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Dynamic_Routing from './Components/Dynamic_Routing';
import Dummy from './Components/PracticeDummy';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">

    <BrowserRouter>

    <Header/>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dummy' element={<Dummy/>}/>
    </Routes>

   <Footer/>
    </BrowserRouter>








{/* ////////////////////////////////////  For Learning Purpose /////////////////////////////////// */}
      {/* <BrowserRouter>
      <Header/>      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product_through_Dynamic_Routing/:id' element={<Dynamic_Routing/>}/>
        <Route path='*' element={<div>This Page Is Not Found</div>}/>
      </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
