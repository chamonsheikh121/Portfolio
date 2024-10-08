import { Outlet, useLocation } from 'react-router-dom';
import './index.css'
import Navbar from './Navbar';
import { useState } from 'react';
import Header from './Header';
import Projects from './Projects';

const MainPage = () => {



    const navItems = <>
        <li className='font-bold uppercase'><a href="sdc" id="link">Home</a></li>
        <li className='font-bold uppercase'><a href="" id="link">About</a></li>
        <li className='font-bold uppercase'><a href="" id="link">Project</a></li>
        <li className='font-bold uppercase'><a href="" id="link">about</a></li>
        <li className='font-bold uppercase'><a href="" id="link">about</a></li>
        <li className='font-bold uppercase'><a href="" id="link">download</a></li>
    </>

    return (
        <div className='max-w-6xl mx-auto '>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar   w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2">
                            <img src="" className="h-[60px] w-[200px]" alt="" />
                        </div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {navItems}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className={`drawer-side `}>
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className={` menu bg-base-300 min-h-full w-80 p-4`}>
                        {/* Sidebar content here */}
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainPage;