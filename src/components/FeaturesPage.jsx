import React, { useState } from 'react';
import '../styles.css';


const FeaturesPage = () => {
  const [cart, setCart] = useState([]);

  const items = [
    { id: 1, name: 'Tractor', type: 'farming', price: '$500/day' },
    { id: 2, name: 'Plow', type: 'farming', price: '$50/day' },
    { id: 3, name: 'Irrigation System', type: 'farming', price: '$200/day' },
    { id: 4, name: 'Electric Drill', type: 'electric', price: '$30/day' },
    { id: 5, name: 'Chainsaw', type: 'electric', price: '$40/day' },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="features-page">
      <h2>Here your items</h2>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>Type: {item.type}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.type} - {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FeaturesPage;
