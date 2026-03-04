import React, { useEffect, useState } from 'react'
import moment from 'moment'

import video1 from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import save from '../assets/save.png'
import share from '../assets/share.png'
import jack from '../assets/jack.png'
import { myAPI, value_convertor } from '../data'
import user_profile from '../assets/user_profile.jpg'
import { data } from 'react-router-dom'

const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null);
    const [chanelData, setchanelData] = useState(null);


    const fetchVideoData = async () => {
        // Fetching Video Data 
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${myAPI}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }
    useEffect(() => {
        fetchVideoData()
    }, [videoId])

    const fetchOtherData = async () => {
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${myAPI}`
        await fetch(channelData_url).then(res => res.json()).then(data => setchanelData(data.items[0]))
    }



    return (
        <>
            <div className="play-video basis-[69%]">
                <iframe className='w-full h-[36vw]' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h3 className='mt-2.5 font-semibold text-2xl'>{apiData ? apiData.snippet.title : "Title here"}</h3>
                <div className="play-video-info flex itemxzs-center flex-wrap justify-between mt-2.5 text-sm text-[#5a5a5a]">
                    <p>{apiData ? value_convertor(apiData.statistics.viewCount) : "17K"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2 days ago"}</p>
                    <div className="flex items-center gap-2 ">
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={like} alt="" />{apiData ? value_convertor(apiData.statistics.likeCount) : "12200"}</span>
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={dislike} alt="" /> </span>
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={share} alt="" />Share</span>
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={save} alt="" />Save</span>
                    </div>
                </div>
                <hr className='my-2.5 border-0 h-1px bg-[#ccc]' />
                <div className="publisher flex items-center mt-5">
                    <img src={jack} alt="" className='w-10 rounded-full mr-4' />
                    <div className="flex-1 leading-4">
                        <h2 className='text-black text-lg font-semibold'>{apiData ? apiData.snippet.channelTitle : "Dummy Channel"}</h2>
                        <span className='text-sm text-[#5a5a5a]'>1.4M Subscriber</span>
                    </div>
                    <button className='bg-red-600 text-white py-2 px-8 rounded-sm  outline-none border-0 cursor-pointer'>Subscribe</button>
                </div>
                <div className="video-description pl-14 my-3.5 mx-0">
                    <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}</p>
                    <hr />
                    <h4 className='text-sm text-[#5a5a5a] mt-4'>{apiData ? value_convertor(apiData.statistics.commentCount) : "120010"} Comment</h4>
                    <div className="comment flex items-start my-5 mx-0 ">
                        <img src={user_profile} alt="" className='rounded-full w-9 mr-4' />
                        <div>
                            <h3 className='mb-0.5 text-sm'>Rnaldo<span className='text-[12px] ml-2 text-[#5a5a5a] font-medium '>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action flex items-center my-2 mx-0 text-sm">
                                <img className='rounded-none w-5 mr-1.5 ' src={like} alt="" />
                                <span className='mr-5 text-[#5a5a5a]'>233</span>
                                <img className='rounded-none w-5 mr-1.5 ' src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="comment flex items-start my-5 mx-0 ">
                        <img src={user_profile} alt="" className='rounded-full w-9 mr-4' />
                        <div>
                            <h3 className='mb-0.5 text-sm'>Ronaldo  <span className='text-[12px] ml-2 text-[#5a5a5a] font-medium '>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action flex items-center my-2 mx-0 text-sm">
                                <img className='rounded-none w-5 mr-1.5 ' src={like} alt="" />
                                <span className='mr-5 text-[#5a5a5a]'>233</span>
                                <img className='rounded-none w-5 mr-1.5 ' src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="comment flex items-start my-5 mx-0 ">
                        <img src={user_profile} alt="" className='rounded-full w-9 mr-4' />
                        <div>
                            <h3 className='mb-0.5 text-sm'>Ronaldo  <span className='text-[12px] ml-2 text-[#5a5a5a] font-medium '>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action flex items-center my-2 mx-0 text-sm">
                                <img className='rounded-none w-5 mr-1.5 ' src={like} alt="" />
                                <span className='mr-5 text-[#5a5a5a]'>233</span>
                                <img className='rounded-none w-5 mr-1.5 ' src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="comment flex items-start my-5 mx-0 ">
                        <img src={user_profile} alt="" className='rounded-full w-9 mr-4' />
                        <div>
                            <h3 className='mb-0.5 text-sm'>Ronaldo  <span className='text-[12px] ml-2 text-[#5a5a5a] font-medium '>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action flex items-center my-2 mx-0 text-sm">
                                <img className='rounded-none w-5 mr-1.5 ' src={like} alt="" />
                                <span className='mr-5 text-[#5a5a5a]'>233</span>
                                <img className='rounded-none w-5 mr-1.5 ' src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="comment flex items-start my-5 mx-0 ">
                        <img src={user_profile} alt="" className='rounded-full w-9 mr-4' />
                        <div>
                            <h3 className='mb-0.5 text-sm'>Ronaldo  <span className='text-[12px] ml-2 text-[#5a5a5a] font-medium '>1 day ago</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt velit consequatur assumenda temporibus architecto!</p>
                            <div className="comment-action flex items-center my-2 mx-0 text-sm">
                                <img className='rounded-none w-5 mr-1.5 ' src={like} alt="" />
                                <span className='mr-5 text-[#5a5a5a]'>233</span>
                                <img className='rounded-none w-5 mr-1.5 ' src={dislike} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PlayVideo