import React from 'react'
import { useParams } from 'react-router-dom'



const UserProfile = () => {
    const {useName}=useParams()
  return (
    <div>UserProfile for {useName}</div>
  )
}

export default UserProfile