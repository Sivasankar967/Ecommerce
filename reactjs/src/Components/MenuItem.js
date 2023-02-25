import { Link } from 'react-router-dom'
export default function MenuItem() {

  const Clothes = ["women's clothing", "electronics", "jewelery", "men's clothing", "Favourite"];

  return (
    <div className="menu-item">
      <ul>
        <li><Link to={`/`}>All Products</Link></li>
        {Clothes.map((items) => <li key={items}><Link to={`/${items}`}>{items}</Link></li>)}
      </ul>
    </div>
  )
}