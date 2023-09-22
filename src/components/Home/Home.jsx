import './Home.css'
import banner from '../../assets/banner-img.png'
import Products from '../Products/Products'
import Categories from './Categories/Categories'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="sales">
            <h1>SALE</h1>
            <p className='sales-p'>Lorem ipsum dolor, sit amet consectetur adipisicing  <br />elit. Sunt repellendus, eos </p>
            <div className="button">
              <button className='btn1'>READ MORE</button>
              <button className='btn2'>SHOP MORE</button>
              
            </div>
          </div>
          <div className="image">
            <img src={banner} alt="" width={480} />


          </div>
        </div>
      </div>
      <Categories/>
      <Products />
    
      </>
  )
}

export default Home