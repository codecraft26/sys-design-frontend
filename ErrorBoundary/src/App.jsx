import React from 'react'
import {Router,Route,Routes} from 'react'
import UserProfile from "./UserProfile"
import Home from './Home'
const App = () => {
  return (
 
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </Router>
   
   


  )
}

export default App