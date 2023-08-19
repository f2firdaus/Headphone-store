import React, { useState } from "react";
import "./cart.css";
// import { BsCartX } from "react-icons/bs";
import headphone from "../../assets/products/headphone-prod-1.webp";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../context";
import { BsCartX } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
const Cart = ({ setShowCart }) => {
  const navigate=useNavigate()
// import data from "../../data";
  const { cartItem, handleRemoveCart, totalPrice, handleQuntityCount } = useContext(Context);
  // const [myCart, setMyCart] = useState(false);
  return (
    <>
      <div className="shopping-cart">
        <div className="cart-details">
          <div className="cart-shopping">
            <span>Shopping Cart</span>
            <span className="close-cart" onClick={() => setShowCart(false)}>
      
              <MdClose /> close
            </span>
          </div>
          {!cartItem.length && <div className="cart-empty">
                    <BsCartX className="cart-svg" />
            <span>NO PRODUCT IN THE CART</span>
            <button className="button-1" onClick={() => {
              navigate('/');
              setShowCart(false)
            }}>RETURN TO SHOP</button>
                </div>
          }
          
        {!!cartItem.length >0 && <div className="cart-menu">
            {cartItem.map((item) => (
              <>
                <div className="cart-all">
            <div className="cart-img">
             
             <img src={item.image} alt="" width={60} />
           </div>
           <div className="cart-name">
             <div className="cart-name-1">
                    <span>{ item.name}</span>
               <span onClick={()=>handleRemoveCart(item)} >
                 <MdClose />
               </span>
             </div>
             <div className="cart-count-1">
               <span onClick={()=>handleQuntityCount("dec",item)}>-</span>
                      <span>{ item.quantity}</span>
               <span onClick={()=>handleQuntityCount("inc",item)}>+</span>
             </div>
             <div className="cart-price-1">
                    <span>{ item.quantity}</span>
               <span>x</span>
                    <span>&#8377;{ item.price}</span>
             </div>
                  </div>
                  </div>
                </>
                ))}
            
          </div>}
          {!!cartItem.length &&
          <div className="checkout">
            <div className="total">
              <span className="total-span">SUBTOTAL:</span>
              <span className="tprice">&#8377;{ totalPrice}</span>
            </div>
            <div className="chechout-btn">
              <button className="check-btn">CHECKOUT</button>
            </div>
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default Cart;
