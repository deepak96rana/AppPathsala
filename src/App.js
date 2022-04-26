
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';
import Footer from "./Footer";

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route  path='/'  element={<Home/>}/>
        <Route  path='/contact'  element={<Contact/>}/>
        <Route  path='/about'  element={<About/>}/>
        <Route  path='/service'  element={<Service/>}/>
       
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
