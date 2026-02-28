import React from 'react'
import menu_icon from '../assets/menu.png'
import logo from '../assets/logo.png'
import search_icon from '../assets/search.png'
import upload_icon from '../assets/upload.png'
import more_icon from '../assets/more.png'
import notification_icon from '../assets/notification.png'
import profile_icon from '../assets/jack.png'

const Navbar = ({ setSideBar }) => {
    return (
        <nav className="flex py-2.5 px-[2%] shadow-sm bg-white sticky top-0 z-10 mx-auto justify-between flex-col">
            <div className="flex items-center mx-auto w-full justify-between">
                <div className="flex justify-between items-center w-full mx-auto">

                    <div className="flex items-center">
                        <img
                            className="w-5 mr-6 cursor-pointer"
                            onClick={() => setSideBar(prev => prev === false ? true : false)}
                            src={menu_icon}
                            alt="menu"
                        />
                        <img
                            className="w-32"
                            src={logo}
                            alt="logo"
                        />
                    </div>

                    <div className="flex items-center">
                        <div className="flex items-center border border-gray-300 mr-3.5 rounded-3xl py-2 px-4">
                            <input
                                className="bg-transparent w-96 border-0 outline-none"
                                type="text"
                                placeholder="Search"
                            />
                            <img
                                className="w-3.5 object-contain"
                                src={search_icon}
                                alt="search"
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <img className="w-6 mr-6" src={upload_icon} alt="upload" />
                        <img className="w-6 mr-6" src={more_icon} alt="more" />
                        <img className="w-6 mr-6" src={notification_icon} alt="notification" />
                        <img
                            className="w-8 mr-6 rounded-full"
                            src={profile_icon}
                            alt="profile"
                        />
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar