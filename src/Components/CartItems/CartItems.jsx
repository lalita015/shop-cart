import React, { useContext } from 'react'
import './CartItem.css'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const{getTotalCartAmount,all_product,cartItmes,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">

            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       
       {all_product.map((e)=>{

        if(cartItmes[e.id]>0)
        { 
        return <div>
             <div className="cartitems-format">
        <img src={e.image} alt=""  className='carticon-product-icon'/>
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='cartitems-quantity'>{cartItmes[e.id]}</button>
        <p>${e.new_price*cartItmes[e.id]}</p>
        <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
         </div>
         <hr />
    </div>
        }  
        return null;
       })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" />
                <button>Submit</button>
            </div>
        </div>
       </div>
   
       
  </div>  
  )
}

export default CartItems