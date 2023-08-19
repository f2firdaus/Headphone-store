import { useNavigate } from "react-router-dom"
import data from "../../data"

import './products.css'

const Products = () => {

  const navigate=useNavigate()
    return (
      <>
         <h1 className="popular" >Popular Products</h1>  
        <div className="main">
       
          <div className="products">
            
            {data.categories.map((item) => (
              <>{item.items.map((item) => (
                <>
                  
                  <div className="product-map">
                    <div onClick={()=>navigate(`/product/${item.id}`)}  className="img">
                      <img src={item.image} alt="" width={200} />
                    </div>
                    <div className="details">
                    <span>{item.name}</span>
                      <span>{item.price}</span>
                      </div>
                    </div>
                </>
              ))}</>
                 ))}   
              </div>  
               
           </div>
            </>
  )
}

export default Products