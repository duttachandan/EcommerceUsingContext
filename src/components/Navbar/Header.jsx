import { NavLink } from 'react-router-dom'
import { useState } from "react"

const MenuOfLinks = () => {
  return (
    <>
      <ul className='flex flex-col 
      md:flex-row gap-4 justify-between 
      items-center w-full bg-transparent md:bg-transparent text-black'>
        <li 
        className='hover:underline hover:decoration-solid 
        font-semibold md:pt-0 pt-5 duration-1000'>
          <NavLink
            to=""
            className={({isActive}) =>`${isActive ? 'text-red-800' : 'text-black'}`}>
            Home
          </NavLink>
        </li>
        <li 
        className='hover:underline hover:decoration-solid font-semibold'>
          <NavLink
            to='/EcommerceUsingContext/product'
          >
            Products
          </NavLink>
        </li>
        <li 
        className='hover:underline hover:decoration-solid font-semibold'>
          <NavLink
            to='/EcommerceUsingContext/cart'
          >
            Cart
          </NavLink>
        </li>
        <li 
        className='hover:underline hover:decoration-solid font-semibold'>
          <NavLink
            to='/EcommerceUsingContext/about'
          >
            About
          </NavLink>
        </li>
        <li 
        className='md:pe-2'
        >
          <button
            className='bg-cyan-900 
        px-4 py-1 text-white hover:bg-cyan-800
        w-[90vw] md:w-[100px] md:mb-0 mb-5 rounded-lg'
          >
            <NavLink
              to="/SignIn"
            >
              Sign Up
            </NavLink>
          </button>
        </li>
      </ul>
    </>
  )
}
const Header = () => {

  const [show, setShow] = useState(false);
  return (
    <>
      <div
      className='flex fixed top-0 right-0 w-full 
      justify-between items-center 
      h-[fit-content] bg-[#eff1fa] z-[55] 
      flex-wrap py-3 shadow-lg'>
        <div
          className="logo basis-1/4 ps-4">
          <img
            className='md:h-10 h-6'
            src="src\assets\logo.png"
            alt="" />
        </div>

        <div
          className='hidden md:flex basis-1/2 justify-center'>
          <MenuOfLinks />
        </div>

        <div className='text-2xl pe-4 
        flex justify-end 
        items-center font-bold 
        md:hidden'
          onClick={() => setShow(!show)}>
          {show ? "X" : "☰"}
        </div>
        <div className='flex md:hidden w-[100vw]'>
          {
            show &&
            <MenuOfLinks />
          }
        </div>
      </div>
    </>
  )
}

export default Header
