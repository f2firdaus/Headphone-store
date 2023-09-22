import React, { useContext } from 'react'
import './favproduct.css'
import { Context } from '../../../context'
const FavouriteProd = () => {
    const {favItems} =useContext(Context)
    return (
      <>
            <div>FavouriteProd  </div>
            <div>{favItems.map((item) => (
                <>
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <img src={item.image} alt="" />
                        </div>
                </>
            ))}</div>
            </>
  )
}

export default FavouriteProd;