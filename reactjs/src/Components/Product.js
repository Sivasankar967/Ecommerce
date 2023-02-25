import React from 'react'
import { useParams } from 'react-router-dom';

export default function Products({ checkIsCart, AddtoCart, products, handleFavourite, isPending }) {
  const { id } = useParams();
  return (

    <div className="products">
      {isPending === true ? <h3 id="txtType"> Loading...</h3> : <h3 id="txtType">{id === undefined ? "All Products": id}</h3>}
      <div className="products-container">
        {products.filter(products => id === undefined ? products :  id === "Favourite" ? products.fav : products.category === id).map((e) => {
          return <div key={e.id} className="product">
            <div className="img-container">
              <img src={e.image} alt="{e.title}" className="product-img" />
            </div>
            <h3>{e.title}</h3>
            <h5><span>{e.category}</span> Rs.{e.price}</h5>
            <button className="btn-item" onClick={() => { AddtoCart(e) }} ><i className="fa fa-shopping-cart" ></i>
              {
                checkIsCart(e) !== undefined ? " In a cart" : " Add to cart"
              }
            </button>
            <p className='btn-fav' onClick={() => handleFavourite(e.id)}>
              {e.fav === true ? <i className="fa fa-heart" style={{ color: "red" }}></i> : <i className="fa fa-heart"></i>}</p>
          </div>
        })}
      </div>
      <br />
      <hr />

    </div>
  )
}