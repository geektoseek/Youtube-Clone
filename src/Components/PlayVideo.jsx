import React from 'react'

import video1 from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import save from '../assets/save.png'
import share from '../assets/share.png'
import jack from '../assets/jack.png'
import user_profile from '../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <>
            <div className="play-video basis-[69%]">
                <video src={video1} controls muted autoPlay className='w-full'></video>
                <h3 className='mt-2.5 font-semibold text-2xl'>The Best thing to remember the code Keep Practice On</h3>
                <div className="play-video-info flex items-center flex-wrap justify-between mt-2.5 text-sm text-[#5a5a5a]">
                    <p>15549 views &bull; 2 days ago</p>
                    <div className="flex items-center gap-2 ">
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={like} alt="" />125</span>
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={dislike} alt="" />55</span>
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={share} alt="" />Share</span>
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={save} alt="" />Save</span>
                    </div>
                </div>
                <hr className='my-2.5 border-0 h-[1px] bg-[#ccc]' />
                <div className="publisher flex items-center mt-5">
                    <img src={jack} alt="" className='w-10 rounded-full mr-4' />
                    <div className="flex-1 leading-4">
                        <h2 className='text-black text-lg font-semibold'>Zero Code</h2>
                        <span className='text-sm text-[#5a5a5a]'>1.4M Subscriber</span>
                    </div>
                    <button className='bg-red-600 text-white py-2 px-8 rounded-sm  outline-none border-0 cursor-pointer'>Subscribe</button>
                </div>
                <div className="video-description pl-14 my-3.5 mx-0">
                    <p className='text-sm mb-1.5 text-[#5a5a5a]'>Channel that make learning easiy</p>
                    <p className='text-sm mb-1.5 text-[#5a5a5a]'>please delete this type of content before uploading</p>
                    <hr />
                    <h4 className='text-sm text-[#5a5a5a] mt-4'>98 Comment</h4>
                    <div className="comment flex items-start my-5 mx-0 ">
                        <img src={user_profile} alt="" className='rounded-full w-9 mr-4' />
                        <div>
                            <h3>Donalad Trump <span>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>233</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Donalad Trump <span>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>233</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Donalad Trump <span>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>233</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Donalad Trump <span>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>233</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Donalad Trump <span>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>233</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>Donalad Trump <span>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>233</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PlayVideo