import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Navbar';
import '../assets/Library.css';
import { Link } from 'react-router-dom';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8081/api/v1/user/getbook'); // Replace with the actual endpoint for fetching all books
      setBooks(response.data);
    } catch (error) {
      console.error('Error occurred while fetching books:', error);
      // Handle error, show an error message or something
    }
  };

  // Filter books based on search term
  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
    const addToWishlist = async (book) => {
      try {
        await axios.post('http://127.0.0.1:8081/api/v1/user/addtoWishlist', book);
        console.log(`Added book with ID ${book.bookid} to wishlist.`);
      } catch (error) {
        console.error('Error occurred while adding to wishlist:', error);
      }

    
  };

  return (
    <div>
      <NavBar />
      <h2 className="head-view1">Library</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="book-gallery">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-container1">
            <Link to={`/bookdetails/${book.bookid}`}>
            <img src={book.image} alt={`Cover of ${book.title}`} className="book-cover1" />
            </Link>
            <div className="book-details1">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <button onClick={() => addToWishlist(book)} className="wishlist-button">
      Add to wishlist
    </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
