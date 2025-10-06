import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Tag from "../../components/Tags/Tag";
import Button_secondary from "../../components/Buttons/Button_secondary";
import { useBook } from "../../context/BookContext";

const CardDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const { addToRead, addToWishlist } = useBook(); // 🟢 context function

  const SingleBook = data.find(
    (book) => String(book.bookId) === String(bookId)
  );

  if (!SingleBook) return <p>Book not found 😢</p>;

  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = SingleBook;

  return (
    <div className="p-8">
      <div className="py-16 max-w-[1200px] mx-auto flex justify-between gap-6">
        <div className="w-[35%]">
          <img
            className="w-full h-[550px] object-cover rounded-[10px]"
            src={image}
            alt=""
          />
        </div>
        <div className="w-[65%] flex flex-col justify-center">
          <h2 className="font-semibold text-3xl">{bookName}</h2>
          <h3>By : {author}</h3>
          <hr />
          <p className="my-2.5">{category}</p>
          <hr />
          <p className="mt-3">
            <span className="font-semibold">Review:</span> {review}
          </p>
          <div className="flex gap-3 mb-3">
            <span className="font-semibold">Tag:</span>
            {tags.map((tag) => (
              <Tag key={tag} taag={tag}></Tag>
            ))}
          </div>
          <hr />
          <p>
            <span className="font-semibold">Number of Pages : </span>
            {totalPages}
          </p>
          <p>
            <span className="font-semibold">Publisher : </span>
            {publisher}
          </p>
          <p>
            <span className="font-semibold">Year of Publishing : </span>
            {yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating : </span>
            {rating}
          </p>

          {/* 🟢 Buttons */}
          <div className="flex gap-2.5 mt-2.5">
            <button
              onClick={() => addToRead(SingleBook)}
              className="w-fit text-black py-2 px-5 rounded-[5px] font-semibold border"
            >
              Read
            </button>

            <button
              className="w-fit bg-[#59c6d2] py-2 px-5 rounded-[5px] text-white font-semibold "
              onClick={() => addToWishlist(SingleBook)}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
