import React from "react";
import { useBook } from "../../context/BookContext";

const WishList = () => {
  const { wishlist } = useBook();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No books in wishlist 😢</p>
      ) : (
        <ul className="grid grid-cols-3 gap-4">
          {wishlist.map((book) => (
            <li key={book.bookId} className="border p-4 rounded">
              <img src={book.image} alt={book.bookName} className="w-full h-60 object-cover rounded" />
              <h3 className="font-semibold mt-2">{book.bookName}</h3>
              <p>By {book.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishList;
