import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
        <Header></Header>
        <main className='min-h-[calc(100vh-270px)]'>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default Root