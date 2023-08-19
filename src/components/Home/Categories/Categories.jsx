import { useNavigate } from 'react-router-dom'
import data from '../../../data'
import './Categories.css'
import React from 'react'

const Categories = () => {

    const navigate = useNavigate()
    // const {id} =useParams()
  return (
      <>
          <div className="categories">
              <div className="container">
                  {data.categories.map((item) => (
                      <>
                          <div key={item.id} className="image">
                          <img onClick={()=>navigate(`/category/${item.id}`)} src={item.image} alt="" width={250}/>
                          </div>
                          </>
                  ))}
              </div>
          </div>
    </>
  )
}

export default Categories