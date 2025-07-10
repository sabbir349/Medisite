import React from 'react';
import logo from '../../../assets/Images/Medisite logo.png'

const Header = () => {

    const menuItems=(
        <>
        <li className='text-white text-[20px]'><a>Home</a></li>
        <li className='text-white text-[20px]'><a>Pages</a></li>
        <li className='text-white text-[20px]'><a>Service Area</a></li>
        <li className='text-white text-[20px]'><a>Blogs</a></li>
        <li className='text-white text-[20px]'><a>Contact Us</a></li>
        <li className='text-white text-[20px]'><a>About Us</a></li>
        </>
    )

    
    return (
        <header>
            <div className="navbar bg-primary shadow-sm px-4 md:px-29">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-white text-primary mr-5 md:mr-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl p-0">
                        <img className='w-20 md:w-auto' src={logo} alt="medisite" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </header>
    );
};

export default Header;