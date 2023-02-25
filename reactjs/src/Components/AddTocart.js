import emptyCart from "./empty-cart2.gif"
function CartPage({ cartItems, setCartItems, setIsCartOpen }) {

  const handleIncrement = (item, variant) => {
    let newCart
    if (variant === "increment") {
      newCart = cartItems.map((ite) => {
        return ite.id === item.id ? { ...ite, QTY: ite.QTY += 1 } : ite
      })
    }
    else {
      newCart = cartItems.map((ite) => {
        return ite.id === item.id && ite.QTY !== 0 ? { ...ite, QTY: ite.QTY -= 1 } : ite
      })
    }
    newCart = newCart.filter(ite => ite.QTY !== 0)
    setCartItems(newCart);
  }

  const handleRemove = (item) => {
    const newCart = cartItems.filter((ite) => ite.id !== item.id)
    setCartItems(newCart)
  }
  const totalAmoutDisplay = () => {
    return cartItems.reduce((acc, curr) => acc + (parseFloat(curr.price) * parseInt(curr.QTY)), 0)
  }

  return (
    <div className='cart-overlay'>
      <div className='cart'>
        <i className='fa fa-times cart-close-icon' onClick={() => setIsCartOpen(false)}></i>
        {cartItems.map((item, index) => {
          return <div className='cart-item' key={index}>
            <img src={item.image} alt={"item image"} />
            <div>
              <h4>{item.title}</h4>
              <h5>Item Price: Rs {item.price}</h5>
              <h5>Total Price for This Item: Rs {(parseFloat(item.price) * parseInt(item.QTY))}</h5>
              <span className="remove-item" onClick={() => handleRemove(item)} >remove</span>
            </div>
            <div>
              <i className="fa fa-plus" onClick={() => handleIncrement(item, "increment")}></i>
              <p className="item-amount">
                {item.QTY}
              </p>
              <i className="fa fa-minus" onClick={() => handleIncrement(item, "decrement")}></i>
            </div>
          </div>
        })}
        <div className="cart-center">
          {totalAmoutDisplay() !== 0 && <h4>Total Amount : Rs.{totalAmoutDisplay()}</h4>}
          {cartItems.length >= 1 && <button className="btn btn-clear-cart" onClick={() => setCartItems([])}>clear Cart</button>}
        </div>
        {totalAmoutDisplay() === 0 && <img className="empty-cart" src={emptyCart} alt="cart is empty" />}
      </div>
    </div>
  )
}

export default CartPage