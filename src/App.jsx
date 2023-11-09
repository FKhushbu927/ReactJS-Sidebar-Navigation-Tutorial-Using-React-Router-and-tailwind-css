import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { BiCategoryAlt } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
// import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { IoIosArrowDropdownCircle } from "react-icons/io";


function App() {

  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);



  const Menus = [
    { title: "Dashboard" },
    { title: "Products and Services" },
    {
      title: "Sales",
      to: "/",
      submenu: true,
      spacing: true,
      submenuItems: [
        { title: "Customer", to: "/customer" },
        { title: "Invoices", to: "/invoices" },
        { title: "Recurring Invocies", to: "/reinvoices" },
      ]
    },
    { title: "Purchase" ,
          to:"/",
          submenu: true,
          spacing: true,
          submenuItems: [
            { title: "bills", to: "/bills" },
            { title: "Vendor", to: "/vendor" },
            { title: "Expenses", to: "/expenses" },
          ]
     },
    { title: "Report" },
    { title: "Settings" }

  ]


  return (
    <div className='grid md:grid-cols-12'>
      <aside className='md:col-span-3 md:pt-0'>

          <div className={`bg-light-purple relative  m-0 p-5 ${open ? "w-72" : "w-20"}` }>
            <AiOutlineArrowLeft className={`bg-white text-light-purple font-semibold text-3xl absolute -right-5 top-6 border-6 border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}></AiOutlineArrowLeft>


            <div className={`inline-flex`}>
              <BiCategoryAlt className='bg-light-purple text-light-white rounded cursor-pointer block float-left mr-2 mt-1 text-4xl '></BiCategoryAlt>
              <h1 className={`text-white  duration-300 origin-left text-3xl font-medium ${!open && "scale-0"}`}>Accountantly</h1>
            </div>
          </div>
        <div className={`bg-dark-purple h-screen p-5 pt-8 relative duration-300 ${open ? "w-72" : "w-20"}`}>

          <ul className='pt-1'>
            {Menus.map((menu, index) => (
              <>
                <li key={index}
                  className={`text-gray-300 text-sm flex items-center 
                gap-x-4 cursor-pointer p-2 hover:bg-light-purple rounded-md mt-2
                ${menu.spacing ? "mt-5" : "mt-2"}`}>


                  <span className='text-2xl block float-left'>
                    <BiSolidDashboard></BiSolidDashboard>
                  </span>
                  <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>

                  {/* const [subMenuOpen, setSubMenuOpen] = useState(false); */}
                  {menu.submenu && (
                    <IoIosArrowDropdownCircle className={`duration-300 text-light-white font-semibold text-3xl ${(subMenuOpen) && "rotate-180"}`} onClick={() => setSubMenuOpen(!subMenuOpen)}></IoIosArrowDropdownCircle>
                  )}
                </li>
                {menu.submenu && subMenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItems, index) => (
                      <li key={index}
                        className={`text-gray-300 text-sm flex items-center 
                              gap-x-4 cursor-pointer p-2 hover:bg-light-purple rounded-md ml-5 mt-2
                                  `}>

                        {submenuItems.title}

                      </li>
                    ))}
                  </ul>
                )}


              </>

            ))}


          </ul>
        </div>
      </aside>


      <main className='md:col-span-9'>

        <div className=''>
          <h1 className='text-2xl font-semibold pt-6'>Home Page</h1>
        </div>
      </main>
    </div>
  )
}

export default App
