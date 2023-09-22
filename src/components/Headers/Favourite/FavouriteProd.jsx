import React, { useContext } from 'react'
import './favproduct.css'
import { Context } from '../../../context'
import { useNavigate } from 'react-router-dom';
const FavouriteProd = () => {
    const { favItems } = useContext(Context);
    const navigate= useNavigate()
    return (
      <>
            <div className='details'>Favourite Products  </div>
            <div className='products'>
                {
                    favItems.map((item) => (
                <>
                            <div className='product-map' key={item.id}>
                                <div className="img" >
                                
                                    <img  onClick={() => navigate(`/product/${item.id}`)} src={item.image} alt="" width={200} />
                                                                       
                                </div>
                                <div className="details">
                                <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    </div>
                        </div>
                </>
            ))}</div>
            
            </>
  )
}

export default FavouriteProd;