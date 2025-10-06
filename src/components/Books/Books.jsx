import React from 'react'
import BookCard from '../Card/BookCard';

const Books = ({bookData}) => {
  return (

    <div >
        <h2 className='text-center text-3xl mt-9'>Books</h2>
        <div className='flex justify-center items-center flex-wrap max-w-[1290px] mx-auto gap-5 py-9'>
        {
             bookData.map(book => <BookCard  book={book}></BookCard>)
        }
        </div>
    </div>
  )
}

export default Books