import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { BiCategoryAlt } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { BsArrowLeftCircle } from "react-icons/bs";
// import { BiArrowFromTop } from "react-icons/bi";

import { IoIosArrowDropdownCircle } from "react-icons/io";







function App() {
 
const [open, setOpen] = useState(true);
const [subMenuOpen, setSubMenuOpen] = useState(false);



const Menus = [
    {title: "Dashboard"},
    {title: "Products and Services", spacing:true},
    {
      title: "Sales",
      submenu:true,
      submenuItems: [
        {title: "Customer"},
        {title: "Customer"},
        {title: "Invoices"},
        {title: "Recurring Invocies"},
      ]
    },
    {
      title: "Purchase",  spacing:true,
      submenu:true,
      submenuItems: [
        {title: "Purchase-1"},
        {title: "Purchase-3"},
        {title: "Purchase-1"},
        {title: "Purchase-33"},
      ]
    
    },
    {title: "Report",  spacing:true},
    {
      title: "Settings",
      submenu:true,
      submenuItems: [
        {title: "General"},
        {title: "User rules"},
        {title: "Price and Picking"},
        {title: "Banking Details"},
      ]
    
    }
  
]


  return (
        <div className='flex'>
             <div  className={`bg-dark-purple h-screen p-5 pt-8 relative duration-300 ${open ? "w-72" : "w-20"}`}>
        
              <BsArrowLeftCircle  className={`bg-white text-dark-purple font-semibold text-3xl absolute -right-4 top-9 border-6 border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}></BsArrowLeftCircle >


              <div className='inline-flex'>
                         <BiCategoryAlt className='bg-white rounded cursor-pointer block float-left mr-2  text-4xl '></BiCategoryAlt>
                         <h1 className={`text-white  duration-300 origin-left text-3xl font-medium ${!open && "scale-0"}`}>Accountantly</h1>
              </div>
             
                 <ul className='pt-2'>
                    { Menus.map((menu, index) => (
                      <>
                      <li key={index} 
                      className={`text-gray-300 text-sm flex items-center 
                      gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2
                      ${menu.spacing ? "mt-9" : "mt-2"}`}>
                      
                   
                           <span className='text-2xl block float-left'>
                                   <BiSolidDashboard></BiSolidDashboard>
                           </span>
                          <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>

                          {/* const [subMenuOpen, setSubMenuOpen] = useState(false); */}
                          {menu.submenu && (
                                   <IoIosArrowDropdownCircle className={`${(subMenuOpen) && "rotate-180"}`} onClick={() => setSubMenuOpen(!subMenuOpen)}></IoIosArrowDropdownCircle>
                          )}
                      </li>
                             {menu.submenu &&  subMenuOpen  && (
                                <ul>
                                  {menu.submenuItems.map((submenuItems, index) => (
                                    <li key={index} 
                                    className={`text-gray-300 text-sm flex items-center 
                                    gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2
                                        `}>
                                    
                                           {submenuItems.title}

                                    </li>
                                  ))}
                                </ul>
                             )}
                              
                             
                      </>

                    )) }

                  
                 </ul>
             </div>
                 
             <div className='p-7'>
              <h1 className='text-2xl font-semibold'>Home Page</h1>
             </div>
        </div>
  )
}

export default App
