import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data';
import './singleproduct.css'
import { Context } from '../../../context';
const SingleProduct = () => {
    const { cartItem, handleAddItem } = useContext(Context);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const product = data.categories
        .map((category) => category.items)
        .flat()
        .find((item) => item.id === parseInt(id));

    // console.log(product);

    if (!product) {
        return <div>Product not found</div>;

    }
    
    const increment = () => {
        setQuantity(quantity + 1);
    }
    // console.log(cartItem)
    const decrement = () => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1)
    }

    return (
        <>
            <div className="sproducts">
                <div className="product-img">
                    <img src={product.image} alt={product.name} width={500} />
                </div>
                <div className="product-details">
                    
                    <h2 className='product-name'>{product.name}</h2>
                    <p className='product-price' >Price: &#8377; {product.price}</p>
                    <p className='product-desc'>{product.description}</p>
                    <div className="cart">
                        <div className="cart-count">
                            <span onClick={decrement}>-</span>
                            <span>{ quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <div className="button1">
                            <button onClick={()=>handleAddItem(product,quantity)}>ADD TO CART</button>
                        </div>
                   </div>
                    {/* Other product details */}


                </div>
            </div>
        </>
    );
}

export default SingleProduct;
