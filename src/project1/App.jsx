import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom' 
import Footer from './Footer';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Kimi from './Kimi';
import About from './About';
import Service from './ServicePage';
import ContactUsPage from './ContactUsPage';
import ServicePage from './ServicePage';
import Cat from './Cat';

function App() {
    return (
        <div>
            <Header />
            <Cat />
            <br/>
      <Routes>
        <Route path='/Home' element={<Home/>}/> 
        <Route path='/kimi' element={<Kimi/>}/> 
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/ContactUsPage' element={<ContactUsPage/>}/>
        <Route path='/ServicePage' element={<ServicePage/>}/>
        
      </Routes>
      <br/>
            <Footer/>
        </div>
    );
}

export default App;
