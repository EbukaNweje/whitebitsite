import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPages';
import Signup from './components/Auth/SignUp';
import Login from "./components/Auth/logindiv/Login"
import About from "./components/AboutPage/AboutPage"
import Dashboard from './components/dashboard/DashBoard/DashBoard';
import Confirmation from "./components/dashboard/DashBoard/ConfirmDeposit/Confirmation"
import ForgetpassWord from "./components/Auth/ForgetPassword/ForgetPassword"
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgotpassword' element={<ForgetpassWord/>}/>
      <Route path='/userDashboard/:id' element={<Dashboard/>}/>
      <Route path='/ConfirmDeposit/:paymentmathod' element={<Confirmation/>}/>

      </Routes>
      {/* <Footer/> */}
      {/* <LastFoter/> */}
    </BrowserRouter>
   
  )
}

export default App