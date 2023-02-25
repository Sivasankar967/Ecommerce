
import Slider from './Components/Slider'
import Navbar from './Components/Navbar'
import MenuItem from './Components/MenuItem'
import Products from './Components/Product'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CartPage from './Components/AddTocart'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false)


  useEffect(() => {
    response()
  }, []
  )
  const response = () => {
    setTimeout(() => {
      axios("http://localhost:3000/data")
        .then(res => {
          console.log(res.data,"res.data")
          setProducts(res.data);
          setIsPending(false);
        })
    });
  }

  const handleFavourite = (ID) => {
    const newFavourites = products.map(e => {
      return e.id === ID ? { ...e, fav: !e.fav } : e;
    });
    setProducts(newFavourites)
  }

  const checkIsCart = (Item) => {
    const inACart = cartItems.find((item) => item.id === Item.id)
    return inACart
  }

  const AddtoCart = (Item) => {
    const inACart = checkIsCart(Item)
    if (!inACart) {
      setCartItems((prev) => ([...prev, { ...Item, QTY: 1 }]))
    }
    else {
      alert("item is already in a cart")
    }
  }
  return (
    <div>
      <Navbar setIsCartOpen={setIsCartOpen} cartItems={cartItems} />
      <Slider/>
      <MenuItem />
      <Routes>
        <Route path="/" element={<Products setCartItems={setCartItems} AddtoCart={AddtoCart} checkIsCart={checkIsCart} cartItems={cartItems} products={products} handleFavourite={handleFavourite} isPending={isPending} />}></Route>
        <Route path="/:id" element={<Products setCartItems={setCartItems} AddtoCart={AddtoCart} checkIsCart={checkIsCart} cartItems={cartItems} products={products} handleFavourite={handleFavourite} isPending={isPending} />} />
      </Routes>
      {isCartOpen && <CartPage cartItems={cartItems} setCartItems={setCartItems} setIsCartOpen={setIsCartOpen} />}
    </div>
  )
}
