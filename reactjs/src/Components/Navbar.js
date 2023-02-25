export default function Navbar({ setIsCartOpen, cartItems }) {
    const cartValues = () => {
      return cartItems.reduce((acc, curr) => acc + parseInt(curr.QTY), 0)
    }
    return (
      <div className="navbar">
        <div className="navbar-banner">
          AmazeCart
        </div>
  
        <div className="nav-cart" onClick={() => setIsCartOpen(true)}>
          <i className="fa fa-shopping-cart"></i>
          <div className="cart-items">{cartValues()}</div>
        </div>
      </div>
    )
  }