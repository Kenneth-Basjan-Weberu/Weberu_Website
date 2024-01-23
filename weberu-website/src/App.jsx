import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero } from './components';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return(
    <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <div>
      <Navbar/>
      <Hero/>
    </div>
    </BrowserRouter>
    
  );
}

export default App
