import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { auth, GoogleauthProvider } from '../config/firbaseconfig'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = async(e) => {
        
        try {
            const res = await signInWithPopup(auth,GoogleauthProvider)
            navigate('/add')
        } catch (error) {
            console.log(error);
        }
    }
    const handleLogout = async() => {
        try {
         await signOut(auth)
         navigate('/')
         alert("Succesfully Logout")
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column mt-5'>
      <h2 className='mb-5'>Sign In With Google In React</h2>
      <button onClick={(e) => handleLogin()} className='btn btn-primary'>Sign In With Google</button>
      <button onClick={(e) => handleLogout()} className='btn btn-primary mt-2'>LogOut</button>
    </div>
  )
}

export default Login
