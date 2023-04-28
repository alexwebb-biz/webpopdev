import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Homepage from './views/homepage.js';
import Layout from './views/layout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './views/contact.js';
import Packages from './views/packages';
import AdminLogin from './views/admin/AdminLogin.js';
import ContactForm from './views/youtube.js';
import FrontEnd from './views/frontEndDev.js';
import BackEnd from './views/backEndDev.js';
import SEO from './views/searchEngineOptimisation.js';
import SocialMedia from './views/socialMedia';
import Services from './views/services';

export default function App() {
  document.querySelector('body').scrollTo(0,0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Packages" element={<Packages/>}/>
          <Route path="/register" element={<AdminLogin/>}/>
          <Route path="/Front-End-Development" element={<FrontEnd/>}/>
          <Route path="/Back-End-Development" element={<BackEnd/>}/>
          <Route path="/Search-Engine-Optimisation" element={<SEO/>}/>
          <Route path="/Social-Media-Advertisement" element={<SocialMedia/>}/>
          <Route path="/services" element={<Services/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

