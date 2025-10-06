import React from "react";
import { NavLink, Outlet } from "react-router";

const ListedBook = () => {
  return (
    <div>
      <div className="pt-20 max-w-[1250px] mx-auto">
        <div className="bg-[#dadada] py-5 rounded-[10px]">
          <h2 className="text-center text-3xl ">Listed Books</h2>
        </div>
        <div className="bg-[#dadada17] border-1 py-5 px-5 mt-2.5  rounded-[10px]">
          <div className="flex gap-3.5 tabs ">
            <NavLink className='transition-all ease-[0.3s]'to="Read-books">Read Books</NavLink>
            <NavLink  className="transition-all ease-[0.3s]"  to="Wishlist">Wishlist Books</NavLink>
          </div>
        </div>
        <main className="py-11">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default ListedBook;
