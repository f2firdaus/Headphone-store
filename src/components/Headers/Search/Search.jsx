import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import './search.css';
import data from '../../../data';
import { useNavigate, useParams } from 'react-router-dom';

const Search = ({ setShowSearch }) => {
  const { id } = useParams()
  const navigate =useNavigate()
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on the lowercase search input
  const filteredProducts = data.categories.flatMap(category =>
    category.items.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleProductClick = (productName) => {
    setSelectedProduct(productName);
  };

  return (
    <div className="search-input">
      <div className="input-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Product"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      {search !== '' && (
        <div className="search-result">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                navigate(`/product/${product.id}`);
                setShowSearch(false)
              }}
            >
              <div className="image-search">

              <img src={product.image} alt=""  width={40}/>
                <div className="search-desc">
                  <p className='product-name-1'>{product.name}</p>
          
</div>
                </div>
            </div>
          ))}
        </div>
      )}
      {selectedProduct && (
        <div className="selected-product">
          Selected Product: {selectedProduct}
        </div>
      )}
    </div>
  );
};

export default Search;
