import React, { useState } from 'react';
import Library from './Library';
import Wishlist from './Wishlist';
import NavBar from '../Navbar';

const ParentComponent = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (book) => {
    setWishlist([...wishlist, book]);
  };

  return (
    <div>
      <NavBar />
      <h2 className="head-view1">Library</h2>
      <Library wishlist={wishlist} onAddToWishlist={handleAddToWishlist} />
      <Wishlist wishlist={wishlist} />
    </div>
  );
};

export default ParentComponent;
