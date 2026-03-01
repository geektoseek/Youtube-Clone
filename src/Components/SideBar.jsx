import React from 'react'
import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobile from '../assets/automobiles.png'
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blog from '../assets/blogs.png'
import newss from '../assets/news.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import cameron from '../assets/cameron.png'
import megan from '../assets/megan.png'

const SideBar = ({ sidebar }) => {
    return (
        <div className={`bg-white w-2/12 h-screen px-[2%] fixed top-0 pt-20 sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortCutlinks">
                <div className="sidelinks flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={home} alt="" className='w-5 mr-5' />
                    <p>Home</p>
                </div>
                <div className="sidelinks flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={game_icon} alt="" className='w-5 mr-5' />
                    <p>Gaming</p>
                </div>
                <div className="sidelinks flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={automobile} alt="" className='w-5 mr-5' />
                    <p>Automobiles</p>
                </div>
                <div className="sidelinks flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={sports} alt="" className='w-5 mr-5' />
                    <p>Sports</p>
                </div>
                <div className="sidelinks flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={entertainment} alt="" className='w-5 mr-5' />
                    <p>Entertainment</p>
                </div>
                <div className="sidelinks flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={tech} alt="" className='w-5 mr-5' />
                    <p>Technology</p>
                </div>
                <div className="sidelinks flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={music} alt="" className='w-5 mr-5' />
                    <p>Music</p>
                </div>
                <div className="sidelinks flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={blog} alt="" className='w-5 mr-5' />
                    <p>Blogs</p>
                </div>
                <div className="sidelinks flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={newss} alt="" className='w-5 mr-5' />
                    <p>News</p>
                </div>
                <hr className='border-0 h-px bg-[#ccc] w-[85%]' />
            </div>
            <div className="subs_list">
                <h3 className='text-lg my-5 mx-0 text-[#5a5a5a]'>Subscribed</h3>
                <div className="side-link flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={jack} alt="" className='w-6 rounded-full mr-5' />
                    <p>WarZone</p>
                </div>
                <div className="side-link flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={simon} alt="" className='w-6 rounded-full mr-5' />
                    <p>Mrbeast</p>
                </div>
                <div className="side-link flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={tom} alt="" className='w-6 rounded-full mr-5' />
                    <p>JustinBieber</p>
                </div>
                <div className="side-link flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={megan} alt="" className='w-6 rounded-full mr-5' />
                    <p>5-Mintutes Craft</p>
                </div>
                <div className="side-link flex items-center gap-5 w-fit flex-wrap cursor-pointer mb-5">
                    <img src={cameron} alt="" className='w-6 rounded-full mr-5' />
                    <p>5-Mintutes Craft</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar