import React, { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [items, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [priceFilter, setPriceFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    let filtered = items;

    if (priceFilter !== "all") {
      filtered = filtered.filter((item) => {
        if (priceFilter === "$0.00 - $20.00") return item.price <= 20;
        if (priceFilter === "$20.00 - $30.00") return item.price > 20 && item.price <= 30;
        if (priceFilter === "$30.00 - $40.00") return item.price > 30 && item.price <= 40;
        if (priceFilter === "$40.00 - $50.00") return item.price > 40 && item.price <= 50;
        if (priceFilter === "$50.00 - $60.00") return item.price > 50 && item.price <= 60;
        return true;
      });
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter((item) => item.type === typeFilter);
    }

    setFilteredItems(filtered);
  }, [items, priceFilter, typeFilter]);

  return (
    <main>
      <div className="filter-container">
        <select onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="all">Filter by Price:</option>
          <option value="$0.00 - $20.00">$0.00 - $20.00</option>
          <option value="$20.00 - $30.00">$20.00 - $30.00</option>
          <option value="$30.00 - $40.00">$30.00 - $40.00</option>
          <option value="$40.00 - $50.00">$40.00 - $50.00</option>
          <option value="$50.00 - $60.00">$50.00 - $60.00</option>
        </select>
        <select onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="all">Filter by Type:</option>
          <option value="Dress">Dress</option>
          <option value="Jeans">Jeans</option>
          <option value="Shorts">Shorts</option>
          <option value="Skirts">Skirts</option>
          <option value="Shirt">Shirt</option>
        </select>
      </div>

      <div className="ropa">
        {filteredItems.map((item, i) => (
          <div key={i} className="clothing">
            <img className="images" src={item.img} alt="products" />
            <h3>{item.name}</h3>
            <p className="desc">{item.description}</p>
            <p className="pricing">${item.price}</p>
            <p className="type">{item.type}</p>
            <button className="addtocart">Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;