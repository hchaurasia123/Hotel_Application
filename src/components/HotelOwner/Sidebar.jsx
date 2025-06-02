import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {


    const sidebarlinks=[
        {name:"DashBoard",path:"/owner",icon:assets.dashboardIcon},
        {name:"Add room",path:"/owner/addroom",icon:assets.addIcon},
        {name:"List room",path:"/owner/listroom",icon:assets.listIcon},
    ]
  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
         {sidebarlinks.map((item,index)=>{
            <NavLink to={item.path}  key={index} end='/owner' className={({isActive})=>`flex items-center gap-4 py-3 md:px-8 gap-3 ${isActive ? "border-r-4 border-blue-500 text-blue-500":"hover:bg-grau-100/90 border-white text-gray-700"}`}>
                       <img src={item.icon} alt={item.name} className='min-h-6 min-w-6' />
                       <p className='md:block hidden text-center'>{item.name}</p>

                       
                       
            </NavLink>

         })}


    </div>
  )
}

export default Sidebar