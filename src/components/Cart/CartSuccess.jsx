import React, { useContext } from "react";
import { Context } from "../../context";
import { useLocation } from "react-router-dom";
import "./cartsuccess.css";
const CartSuccess = ({ orderSummary }) => {
  const location = useLocation();
  const totalprice = location.state.orderSummary.finalPrice;
  // console.log(location.state)
  const orders = location.state.orderSummary.orderItem; // Correct spelling: orderSummary
  console.log(orders);

  const { setCartItem } = useContext(Context);

  // You can perform any necessary actions with the ordered items here
  // For example, you might want to display them in a list or do something else with the data

  // Make sure to clear the cart after displaying the ordered items
  //   setCartItem([]);

  return (
    <>
      <h2 className="order-success">Order Successful</h2>
      <div className="center-place">
        <h3>Ordered Summery:</h3>
        <div className="orderplaced">
          <ul>
            {orders.map((item) => (
                <li key={item.id}>
                    <div className="orderplaced-1">
                        <div className="img-placed">
                        <img src={item.image} alt="" width={60} />
                            <span className="order-quantity">{item.quantity}</span>
                            </div>
                <div> {item.name}</div>
                <div> &#8377;{item.price}</div>
             
                {/* Display other item details */}
                </div>
              </li>
            ))}
                  </ul>
                  
              </div>
              <div className="total-placed"> <span>Total :</span>
                 <span>&#8377;{totalprice}</span> </div>
      </div>
    </>
  );
};

export default CartSuccess;
