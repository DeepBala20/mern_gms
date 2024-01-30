import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Sign_out from './pages/Sign_out'
import Sign_in from './pages/Sign_in'
import About from './pages/About'
import Header from './components/Header'
import Register from './pages/Register'

export default function App() {
  const valid = 0;
  if(valid == 1){
    return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/sign-out' element={<Sign_out/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
      </BrowserRouter>
    )
  }
  else{
    return(
    <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/sign-in' element={<Sign_in/>} />
            <Route path='/sign-out' element={<Sign_out/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
      </BrowserRouter>
    )
  }
  
}
