import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Body() {
  return (
    <>

    <div className='body'>
        <div className='ft'>
          <div> 
            <Sidebar/>
          </div> 
          <div>
           <Footer/>
          </div>
        </div>
        <div >
            <Outlet/>
        </div>
     
    </div>
    </>
  )
}
