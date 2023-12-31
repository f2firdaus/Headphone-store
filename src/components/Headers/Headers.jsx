import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import "./header.css";
import { CgShoppingCart } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { Context } from "../../context";

const Headers = ({ category }) => {
  const navigate = useNavigate();
  const { cartCount } = useContext(Context);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  const handleScroll = () => {
    const offset = window.scrollY;
    //    const data= Math.round(offset)
    // console.log(offset);
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const renderCount = () => {
    if (cartCount > 0) {
      return <span className="cart-count1">{ cartCount}</span>
    } else {
      return null
    }
  }
  return (
    <>
      <header className={`header ${scrolled ? "stickey-header" : ""}`}>
        <div className="header-main">
          <nav className="nav-left">
            <ul>
              <li onClick={() => navigate("/")}>Home</li>
              <li>About</li>
              <li onClick={category}>Category</li>
            </ul>
          </nav>
          <h1>MUSIC WAVES</h1>
          <nav className="nav-right">
            <ul>
              <li onClick={() => setShowSearch(true)}>
                <TbSearch />
              </li>
              <li onClick={()=>navigate('/favourite')}>
                <AiOutlineHeart />
              </li>
              <li onClick={() => setShowCart(true)}>
                {" "}
                <CgShoppingCart /> <span>{ renderCount()}</span>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {showSearch && <Search setShowSearch={setShowSearch} />}
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Headers;
