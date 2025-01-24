import React, {useContext, useRef, useState }  from 'react'
import './Foooter.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import fb_icon from '../Assets/fb_icon.png'
import { Link } from "react-router-dom";
import {ShopContext} from '../../Context/ShopContext';

const Footer = () => {
    const[menu,setMenu] =useState("shop");
   // const {getTotalCartItems} =useContext(ShopContext);
    const menuRef =useRef();
    const dropdown_toggle =(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>𝒮𝒽𝑜𝓅 𝒞𝒶𝓇𝓉</p>
        </div>
        <ul className="footer-links">
            
            <Link to='/'><p>Home</p></Link> 
            <Link to='/'><p>Product</p></Link> 
            <Link to='/'><p>Offices</p></Link> 
            <Link to='/cart'><p>Cart</p></Link>
            <Link to='/Contact'><p>Contact Us</p></Link>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
            <Link to='https://www.instagram.com/accounts/login/'><img src={instagram_icon} alt="" /></Link> 
            </div>
            <div className="footer-icons-container-fb">
              {/* <Link to='https://www.facebook.com/'>
                <img src={fb_icon} alt="" /></Link> */}
            </div> 
            <div className="footer-icons-container">
              <Link to='https://in.pinterest.com/pin/805722189579486590/'>
                <img src={pintester_icon} alt="" /></Link>  
            </div> 
            <div className="footer-icons-container">
            <Link to='https://www.instagram.com/accounts/login/'><img src={whatsapp_icon} alt="" /></Link>
            </div>
        </div>
    
    <div className="footer-copyright">
        <hr />
<p>Copyright @ All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer