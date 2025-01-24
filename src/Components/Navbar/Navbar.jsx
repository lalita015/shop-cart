import React, {useContext, useRef, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
import {ShopContext} from '../../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png'



const Navbar=() => {
    const[menu,setMenu] =useState("shop");
   const {getTotalCartItems} =useContext(ShopContext);
    const menuRef =useRef();


    const dropdown_toggle =(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>𝒮𝒽𝑜𝓅 𝒞𝒶𝓇𝓉</p>
        </div>
        <img onClick={dropdown_toggle} src={dropdown_icon} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to ='/'>Shop</Link>{menu ==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to ='/mens'>Men</Link>{menu ==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to = '/womens'>Women</Link>{menu ==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to ='/kids'>Kids</Link>{menu ==="kids"?<hr/>:<></>}</li>
            <Link to ='/About'>About Us</Link>
            <Link to ='/Contact'>Contact Us</Link>
                    </ul>
        <div className="nav-login-cart">
            <Link className="nav-login" to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            {/* <div className="nav-login-count">{getTotalCartItems(0)}</div>  */}
        </div>
        
    </div>

  )
}

export default Navbar;