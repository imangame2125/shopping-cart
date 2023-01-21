import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import data from './components/back/Data/Data'
import Header from './components/fonts/Header/Header'
import RoutesMap from './components/fonts/Header/Routers/RoutesMap'

const App = () => {

  const { productItems } = data
  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...productExist, quantity: productExist.quantity + 1 } : item)
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    };

  }

  const handleRemoveProduct = (product) => {
    
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      )
    }
  }

  const handleCartClearance = () => {
    setCartItems([])
  }
  return (
    <div>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <RoutesMap productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
