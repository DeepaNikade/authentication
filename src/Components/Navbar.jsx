import React from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    const navigate = useNavigate();  
  return (
    <div style={{display: 'flex', height: '10vh', padding: '0px 40px',backgroundColor: "black", color: "white", justifyContent: 'space-between', alignItems: 'center'}}>
    <div><NavLink to={"/"}><span style={{color: "white"}}>Redux App</span></NavLink></div>
    <div style={{display: 'flex', gap: 10}} className='navbar'>
        <button onClick={()=>{navigate('/signin')}}>SIGNIN</button>
        <button onClick={()=>{navigate('/signup')}}>SIGNUP</button>
    </div>
</div>
  )
}

export default Navbar