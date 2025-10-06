import React from 'react'
import { NavLink } from 'react-router'
import Button_primary from '../Buttons/Button_primary'
import Button_secondary from '../Buttons/Button_secondary'

const Header = () => {
  const singIn = "Sing in"
  const singUp = "Sign up"
  return (
    <>
    <div className='bg-[#06111f] fixed w-full '>
    <nav className=' flex max-w-[1300px] justify-between mx-auto items-center py-[15px] px-3 w-[95%] '>
        <div className="logo w-[20%]">
            <h1 className='text-2xl font-semibold text-white'>Book Vibe</h1>
        </div>
        <div className="links flex gap-6 w-[60%] justify-center text-white">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/listed_book'>Listed Books</NavLink>
            <NavLink to='/Pread'>Pages to Read</NavLink>
         
        </div>
        <div className="buttons flex gap-2.5 w-[20%] justify-end">
            <Button_primary buttonText={singIn}></Button_primary>
            <Button_secondary buttonText={singUp}></Button_secondary>
        </div>
    </nav>
    </div>

    </>
  )
}

export default Header