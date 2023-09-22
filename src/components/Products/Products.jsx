import { useNavigate } from "react-router-dom";
import data from "../../data";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./products.css";
import { useContext, useState } from "react";
import { Context } from "../../context";

const Products = () => {
  const navigate = useNavigate();
  const { favItems, handleFavItems } = useContext(Context);

  const toggleFavourite = (item) => {
    handleFavItems(item);

    console.log(item);
  };
  return (
    <>
      <h1 className="popular">Popular Products</h1>
      <div className="main">
        <div className="products">
          {data.categories.map((items) => (
            <>
              {items.items.map((item) => (
                <>
                  <div key={item.id} className="product-map">
                    <div className="img">
                      <img
                        onClick={() => navigate(`/product/${item.id}`)}
                        src={item.image}
                        alt=""
                        width={200}
                      />
                      <div onClick={() => toggleFavourite(item)}>
                        {favItems.includes(item) ? (
                          <span className="red-heart">
                            <AiFillHeart />
                          </span>
                        ) : (
                          <span className="favourite-heart">
                            <AiOutlineHeart />
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="details">
                      <span>{item.name}</span>
                      <span>&#8377;{item.price}</span>
                    </div>
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
