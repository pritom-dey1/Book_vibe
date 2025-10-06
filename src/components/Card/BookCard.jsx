import React from 'react'
import Tag from '../Tags/Tag';
import { NavLink } from 'react-router';

const BookCard = ({book}) => {
    const{bookName ,bookId ,author , rating ,category ,tags ,image} = book

  return (
    <NavLink to={`/cardDetails/${bookId}`}>
        <div  className='w-[300px] bg-[#f3f3f33f] p-3 border-[#adadad] border rounded-[10px]'>
        <div className='h-52 overflow-hidden rounded-[5px]'>
            <img className='rounded-[5px]' src={image} alt="" />
        </div>
        <div className='flex  gap-1.5 mt-2'>
            {
                tags.map(tag => <Tag taag={tag}></Tag> )
            }
        </div>
        <h3 className='text-[22px] font-semibold'>{bookName}</h3>
        <p>By : {author}</p>
        <div className='flex justify-between border-t-1 mt-1.5 border-[#adadad]'>
            <span>{category}</span>
            <span>{rating}⭐</span>
        </div>

    </div>
    </NavLink>

  )
}

export default BookCard