import React from 'react'
import Header from './components/Header/Header'
import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPages';
import Signup from './components/Auth/SignUp';
import Login from "./components/Auth/logindiv/Login"
import About from "./components/AboutPage/AboutPage"
import Dashboard from './components/dashboard/DashBoard/DashBoard';
import Confirmation from "./components/dashboard/DashBoard/ConfirmDeposit/Confirmation"
import ForgetpassWord from "./components/Auth/ForgetPassword/ForgetPassword"
import NewPassword from "./components/Auth/NewPassword/NewPassword"
import ScrollToTop from '../ScrollToTop';
import Faq from "./components/FAQ/Faq"
import Privacy from './components/FAQ/Privacy';
import Referral from './components/FAQ/Referral';
import Sendrequest from "./components/FAQ/Sendrequest"
import Adim from "./components/Updateuser/Oldfile/Updateuser"
const App = () => {
  return (
    <HashRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgotpassword' element={<ForgetpassWord/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/referral' element={<Referral/>}/>
      <Route path='/sendrequest' element={<Sendrequest/>}/>
      <Route path='/admin' element={<Adim/>}/>
      <Route path='/resetpassword' element={<NewPassword/>}/>
      <Route path='/userDashboard/:id' element={<Dashboard/>}/>
      <Route path='/ConfirmDeposit/:id/:paymentmathod' element={<Confirmation/>}/>

      </Routes>
      {/* <Footer/> */}
      {/* <LastFoter/> */}
    </HashRouter>
   
  )
}

export default App