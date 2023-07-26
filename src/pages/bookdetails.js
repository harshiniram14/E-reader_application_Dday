import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from React Router
import NavBar from '../Navbar';
import "../assets/bookdetails.css"

const Bookdetails = () => {
  const { bookid } = useParams(); // Get the book id from the URL params
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/v1/user/getbook/${bookid}`) // Fetch the specific book using the id from the URL
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => console.error(error));
  }, [bookid]);

  

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <NavBar />
      <div className="body8">
      <div className="container" >
        <div className="book-details">
          <div className="book-image">
        <img src={book.image} alt="" />
        </div>
        <h3 className="header2">{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Description: {book.description}</p>
        <p>Genres:{book.genres}</p>
        <p>Chapter:{book.chapter}</p>
        
      </div>
    </div>
    </div>
    </div>
  );
};

export default Bookdetails;
