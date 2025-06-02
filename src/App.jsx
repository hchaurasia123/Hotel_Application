import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Allrooms from './pages/Allrooms'
import Roomdetails from './pages/Roomdetails'
import Mybooking from './pages/Mybooking'
import HotelReg from './components/HotelReg'
import Layout  from './pages/hotelowner/Layout'
import DashBoard from './pages/hotelowner/DashBoard'
import Addroom from './pages/hotelowner/Addroom'

const App = () => {

  const isOwnerPath=useLocation().pathname.includes("owner")

  return (
    <div>
           {!isOwnerPath && <Navbar/>}
          { false && <HotelReg/>}
           <div className='min-h-[70vh]'>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/rooms' element={<Allrooms/>}/>
            <Route path='/rooms/:id' element={<Roomdetails/>}/>
            <Route path='/my-booking' element={<Mybooking/>}/>
           <Route path='/owner' element={<Layout/>}>
           <Route index element={<DashBoard/>}/>
           <Route path='add-room' element={<Addroom/>}/>
           {/* <Route path="list-room" element={} */}

           </Route>


           </Routes>
            
           </div>
           <Footer/>

    </div>
  )
}

export default App