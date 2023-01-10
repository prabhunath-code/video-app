import React from 'react'

import {  BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './compoents/Header'
import Home from './compoents/Home'
import Footer from './compoents/Footer'
import Videos from './compoents/Videos'
import Upload from './compoents/Upload'
import Login from './compoents/Login'
import Signup from './compoents/Signup'

const App = () => {
  return <Router>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/videos' element={<Videos/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>
    <Footer/>
  </Router>
   
  
}

export default App
