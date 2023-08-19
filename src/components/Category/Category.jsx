import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data'
import './category.css'

const Category = ({refer}) => {
    const { id } = useParams()
    const navigate= useNavigate()
    console.log(id)
    const filtered = data.categories.filter((item) => item.id === parseInt(id))
    console.log(filtered)
  return (
      <>
          <div className='category' ref={refer}>
              {filtered.map((item) => (
                  <>
                      <div className="category-main">
                      <p className='item-name'>{item.name}</p>
                      <div className='category1'>
                          {item.items.map((item) => (
                              <>
                                  <div onClick={()=>navigate(`/product/${item.id}`)} className="card-category">
                                      <img src={item.image} alt="" width={200} />
                                      <div className="category-details">
                                          <p>{item.name}</p>
                                          <span>{ item.price}</span>
                                          </div>
                                      </div>
                              </>
                          ))}
                          </div>
                          </div>
                  </>
              ))}
        </div>  
    </>
  )
}

export default Category