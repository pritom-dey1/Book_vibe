import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToRead = (book) => {
    const exists = readBooks.find((b) => b.bookId === book.bookId);
    if (exists) {
      toast.warning("📖 Already in Read List!");
      return;
    }

    // যদি Wishlist এ থাকে, সেখান থেকেও সরানো যায় চাইলে (optional)
    setWishlist((prev) => prev.filter((b) => b.bookId !== book.bookId));

    setReadBooks((prev) => [...prev, book]);
    toast.success("✅ Added to Read List!");
  };

  const addToWishlist = (book) => {
    const existsInWishlist = wishlist.find((b) => b.bookId === book.bookId);
    const existsInRead = readBooks.find((b) => b.bookId === book.bookId);

    if (existsInRead) {
      toast.info("📚 Already read this book!");
      return;
    }

    if (existsInWishlist) {
      toast.warning("💙 Already in Wishlist!");
      return;
    }

    setWishlist((prev) => [...prev, book]);
    toast.success("💖 Added to Wishlist!");
  };

  return (
    <BookContext.Provider
      value={{ readBooks, wishlist, addToRead, addToWishlist }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
