import React from 'react';
import Logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-zinc-600'>
            <img className='w-[100px]' src={Logo} alt="" />
            <div className='text-white flex gap-9'>
                <a href="/Review">Review</a>
                <a href="/About Us">About Us</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;