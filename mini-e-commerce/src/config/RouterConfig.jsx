import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';
function RouterConfig() {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
      </Routes>
    </div>
  )
}

export default RouterConfig
