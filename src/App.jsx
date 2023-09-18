import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPages';
import Signup from './components/Auth/SignUp';
import Login from "./components/Auth/logindiv/Login"
import Footer from "./components/Footer/FooterSection"
import LastFoter from './components/Footer/LastFoter';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      <LastFoter/>
    </BrowserRouter>
   
  )
}

export default App