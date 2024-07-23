import React from 'react'
import { useEffect, useState } from "react";
import "./Products.css"

function Products() {

  const [items, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ropa">
        {items.map((item, i) => (
          <div key={i} className="clothing">
            <img className="images" src={item.img} alt="products" />
            <h3>{item.name}</h3>
            <p class="desc">{item.description}</p>
            <p className="pricing">{item.price}</p>
            <p className="type">{item.type}</p>
            <button className="addtocart">Add to Cart</button>
          </div>
        ))}
      </div>
  )
}

export default Products
