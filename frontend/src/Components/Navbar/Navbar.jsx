import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {

   const [menu,SetMenu] =useState("shop") 
    
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{SetMenu("shop")}}> <Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("mens")}}> <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("womens")}}> <Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("kids")}}> <Link style={{textDecoration: 'none'}} to='kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
         <Link to='/login'><button>login</button></Link> 
         <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar