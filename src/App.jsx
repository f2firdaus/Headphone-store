
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from './components/Headers/Headers'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Footer from './components/Footer/Footer'
import SingleProduct from './components/Products/SingleProduct/SingleProduct'
import AppContext from './context'
import { useRef } from 'react'
import CartSuccess from './components/Cart/CartSuccess'
function App() {

  const categoryy = useRef();
  const category = () => {
    category.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <>
      <BrowserRouter>
        <AppContext>
      <Headers category={category} />
        <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Category refer={categoryy} />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/success' element={<CartSuccess/>}/>
        </Routes>
          <Footer />
          </AppContext>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
