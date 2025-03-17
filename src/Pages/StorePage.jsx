import React from "react";
import "../Store.css"; // Using your provided CSS file


import tshirt from "../../Components/images/tshirt.png";
import speaker from "../../Components/images/speaker.png";
import notebook from "../../Components/images/notebook.png";
import hoodie from "../../Components/images/hoodie.png";
import bottle from "../../Components/images/bottle.png";
import backpack from "../../Components/images/backpack.png";

const products = [
  { name: "Eclyra T-Shirt", price: 500, image: tshirt },
  { name: "Eco-Friendly Notebook", price: 600, image: notebook },
  { name: "Eclyra Hoodie", price: 700, image: hoodie },
  { name: "Wooden Speaker", price: 1000, image: speaker },
  { name: "Reusable Water Bottle", price: 800, image: bottle },
  { name: "Eco-Friendly Backpack", price: 1200, image: backpack },
];

const Store = () => {
    return (
      <div className="store-container">
        <div className="store-header">
          <h2 className="rewards-title">REWARDS AND PRIZES</h2>
          <p className="coins-info">Your Coins: 800</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="store-card" key={index}>
              <img className="product-image" src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>🟡 {product.price} coins</p>
              <button className="redeem-btn">Redeem</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Store;