import React, { useState } from 'react';
import { RiAdminFill, RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { AiFillDashboard } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import { RiContactsBook3Fill } from 'react-icons/ri';
import { MdAppRegistration } from 'react-icons/md';
import { TbListDetails } from "react-icons/tb";
import '../App.css';
import { Link, Outlet } from 'react-router-dom';
import Heading from './Heading';

const SideBar = () => {
  const [isTreeCategoryOpen, setIsTreeCategoryOpen] = useState(false);

  const toggleTreeCategory = () => {
    setIsTreeCategoryOpen(!isTreeCategoryOpen);
  };

  return (
    <>
      <div className="min-h-[calc(100vh-0px)] md:flex hidden max-w-full">
        <aside className="bg-primary min-h-full w-full max-w-60 customShadow text-white">
          <div className="h-32 my-12 flex justify-center items-center flex-col">
            <div className="text-8xl cursor-pointer relative flex justify-center">
              <RiAdminFill />
            </div>
            <p className="capitalize text-lg font-semibold">Admin</p>
          </div>

          {/*** Navigation ***/}
          <div className="flex justify-center items-center">
            <nav className="grid p-4">
              <div className="flex items-center">
                <AiFillDashboard className="text-2xl" />
                <Link
                  to={'dashboard'}
                  className="px-2 py-1 hover:bg-slate-100 hover:text-black font-semibold hover:font-bold"
                >
                  Dashboard
                </Link>
              </div>
              <div className="flex items-center">
                <RiContactsBook3Fill className="text-2xl" />
                <Link
                  to={'contactForm'}
                  className="px-2 py-1 hover:bg-slate-100 hover:text-black font-semibold hover:font-bold"
                >
                  Contact Details
                </Link>
              </div>

              {/* Tree Category with Sub-links */}
              <div className="flex flex-col">
                <div className="flex items-center">
                  <MdAppRegistration className="text-2xl" />

                  <button
                    onClick={toggleTreeCategory}
                    className="flex items-center px-2 py-1 hover:bg-slate-100 hover:text-black font-semibold"
                  >
                    Registration Form
                    {isTreeCategoryOpen ? (
                      <RiArrowUpSFill className="ml-2" />
                    ) : (
                      <RiArrowDownSFill className="ml-2" />
                    )}
                  </button>
                </div>
                {isTreeCategoryOpen && (
                  <div className="ml-4 mt-2 flex flex-col">
                    <div className="flex items-center">
                      <FaWpforms className='text-xl'/>
                      <Link
                        to={'register'}
                        className="px-2 py-1 hover:bg-slate-100 hover:text-black font-semibold hover:font-bold"
                      >
                        Registration
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <FaWpforms className='text-xl' />
                      <Link
                        to={'userRecordForm'}
                        className="px-2 py-1 hover:bg-slate-100 font-semibold hover:text-black hover:font-bold"
                      >
                        User Record Form
                      </Link>
                    </div>
                    
                  </div>
                )}
              </div>
              <div className="flex items-center">
              <TbListDetails className='text-xl'/>
              <Link
                to={'samples'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
              >
                Doner Details
              </Link>
              </div>
              <Link
                to={'volunteer'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
              >
                Volunteer Details
              </Link>

              <Link
                to={'userRecord'}
                className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
              >
                User Record
              </Link>
            </nav>
          </div>
        </aside>

        <main className="w-full h-full p-2 overflow-auto">
          <div className="mb-16">
            <Heading />
          </div>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default SideBar;
