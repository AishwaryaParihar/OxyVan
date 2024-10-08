// import React, { useEffect } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { RiAdminFill } from "react-icons/ri";

import React from 'react';
import { RiAdminFill } from 'react-icons/ri';

import '../App.css';
import { Link, Outlet } from 'react-router-dom';
import Heading from './Heading';

const SideBar = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-0px)] md:flex hidden max-w-full">
        <aside className="bg-primary min-h-full  w-full  max-w-60 customShadow text-white ">
          <div className="h-32 my-12 flex justify-center items-center flex-col">
            <div className="text-8xl cursor-pointer  relative flex justify-center">
              <RiAdminFill />
            </div>
            <p className="capitalize text-lg font-semibold">Admin</p>
          </div>

          {/***navigation */}
          <div>
            <nav className="grid p-4">
              <Link
                to={'dashboard'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black font-semibold hover:font-semibold"
              >
                Dashboard
              </Link>
              <Link
                to={'contactForm'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black font-semibold hover:font-semibold"
              >
                Contact Details
              </Link>
              <Link
                to={'register'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
              >
                Registration
              </Link>
              <Link
                to={'samples'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
              >
                Doner Register
              </Link>
              <Link
                to={'volunteer'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
              >
                Volunteer Register
              </Link>
              <Link
                to={'userRecordForm'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
              >
                User Record Form
              </Link>
              <Link
                to={'userRecord'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
              >
                User Record
              </Link>
              <Link
                to={'tree-category'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
              >
              Tree Category
              </Link>
             
            </nav>
          </div>
        </aside>

        <main className="w-full h-full p-2 overflow-auto">
          <div className="mb-16">
            {' '}
            <Heading />
          </div >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default SideBar;
