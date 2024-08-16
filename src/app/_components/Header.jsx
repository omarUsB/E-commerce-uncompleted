'use client'
import {ShoppingCart} from 'lucide-react'
import React, { useState, useEffect } from 'react';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);
 
  return (
    <header className="bg-white">
      <div className="mx-auto shadow-md flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <img src={'/logo.svg'} alt="Logo" />
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Home</a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Explore</a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Projects</a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">About Us</a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Contact Us</a></li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {user ? (
                <div className="flex items-center gap-5">
                  <LogoutLink className='block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-900'>
                    Logout
                  </LogoutLink>
                  <h2 className='flex gap-1 cursor-pointer'>< ShoppingCart/>(0)</h2>
                  <div className="relative group">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="absolute right-0 w-auto p-2 m-2 min-w-max rounded-md shadow-md
                    text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-top
                    group-hover:scale-100">
                      {user.given_name} {user.family_name}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <LoginLink className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-900">Sign in</LoginLink>
                  <RegisterLink className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block">Sign up</RegisterLink>
                  
                </>
              )}
            </div>
            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;