import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        // container mx-auto p-5 bg-gray-100 pt-20
        <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm fixed top-0 z-50">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row justify-between">

                <nav className="">
                    <NavLink to="/" className="header__link  font-medium hover:text-blue-600 hover:shadow-inner mr-5">Главная</NavLink>
                    <NavLink to="/cart" className="header__link  font-medium hover:text-blue-600 hover:shadow-inner mr-5">Корзина</NavLink>
                    <NavLink to="/contact" className="header__link font-medium hover:text-blue-600 hover:shadow-inner">О проекте</NavLink>
                </nav>
                <NavLink to="/" className="header__logo mr-36">
                        FakeStoreApi
                </NavLink>
                <div className=" ">
                    <a href="#_" className="mr-5 font-medium hover:text-gray-900">Login</a>
                    <a href="#_"
                        className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none ease">
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header