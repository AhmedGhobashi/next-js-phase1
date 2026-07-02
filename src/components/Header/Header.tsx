'use client';

// next lib
import Link from "next/link";

// react hooks
import { useState } from "react";

// react-icons
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";


function Header() {
    
    const [isOpen, setIsOpen]= useState(false);
    
  return (
    <>
    <header className='fixed top-0 bg-white/95 w-full backdrop-blur-sm shadow-sm z-50'>
    <div className="container mx-auto px-4 w-4/5 py-2">
        <div className="flex items-center justify-between ">
            <Link href='/'>
                <span className="font-bold text-gray-700 text-2xl ">GHOBASHI</span>
            </Link>

            <nav className="hidden md:flex items-center ">
                <div className="flex items-center justify-between space-x-4 ">
                    <Link className='text-gray-600 hover:text-blue-600 transition-colors capitalize'  href={"/about"}>about</Link>
                    <Link className='text-gray-600 hover:text-blue-600 transition-colors capitalize'  href={"/posts"}>posts</Link>
                    <Link className='text-gray-600 hover:text-blue-600 transition-colors capitalize'  href={"/contact-us"}>contact-us</Link>
                    <Link className='text-gray-600 hover:text-blue-600 transition-colors capitalize'  href={"/admin"}>admin</Link>
                </div>
            </nav>

            <button className="md:hidden" onClick={()=>setIsOpen(prev=> !prev)}>
                {isOpen ? (<IoCloseCircleSharp />): (<IoMenu />)}             
            </button>

            <div className="hidden md:flex items-center space-x-2">
                <button className=" rounded-lg py-2 px-4 bg-blue-900 text-white hover:bg-blue-600 transition-colors">
                    <Link href = {"register"}>register</Link>
                </button>
                <button className="rounded-lg py-2 px-4 bg-blue-900 text-white hover:bg-blue-600 transition-colors">
                    <Link href = {"login"}>login</Link>
                </button>
            </div>
        </div>
    </div>
            {isOpen&&(
            <div className="flex flex-col items-center justify-between space-y-2 bg-[#ded7d7]">
                <Link className='text-gray-600 hover:text-blue-600 transition-colors capitalize'  href={"/about"}>about</Link>
                <Link className='text-gray-600 hover:text-blue-600 transition-colors capitalize'  href={"/posts"}>posts</Link>
                <Link className='text-gray-600 hover:text-blue-600 transition-colors capitalize'  href={"/contact-us"}>ContactUs</Link>
                <Link className='text-gray-600 hover:text-blue-600 transition-colors capitalize'  href={"/admin"}>admin</Link>
            </div>
        )}
    </header>
    </>
  )
}

export default Header;
