import React, { useEffect, useState } from 'react'
import moment from 'moment'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import save from '../assets/save.png'
import share from '../assets/share.png'
import { myAPI, value_convertor } from '../data'
import user_profile from '../assets/user_profile.jpg'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {
    const { videoId } = useParams();

    const [apiData, setApiData] = useState(null);
    const [chanelData, setchanelData] = useState(null);
    const [comments, setComments] = useState([])

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${myAPI}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }

    const fetchOtherData = async () => {
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${myAPI}`
        await fetch(channelData_url).then(res => res.json()).then(data => setchanelData(data.items[0]))

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&videoId=${videoId}&key=${myAPI}`
        await fetch(comment_url).then(res => res.json()).then(data => {
            if (data.items) {
                setComments(data.items)
            }
        })
    } // ✅ fetchOtherData yahan band hoti hai

    // ✅ useEffects bahar hain — component ke andar lekin functions ke bahar
    useEffect(() => {
        fetchVideoData()
    }, [videoId])

    useEffect(() => {
        if (apiData) {
            fetchOtherData();
        }
    }, [apiData])

    return (
        <>
            <div className="play-video basis-[69%]">
                <iframe className='w-full h-[36vw]' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h3 className='mt-2.5 font-semibold text-2xl'>{apiData ? apiData.snippet.title : "Title here"}</h3>
                <div className="play-video-info flex items-center flex-wrap justify-between mt-2.5 text-sm text-[#5a5a5a]">
                    <p>{apiData ? value_convertor(apiData.statistics.viewCount) : "17K"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2 days ago"}</p>
                    <div className="flex items-center gap-2">
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={like} alt="" />{apiData ? value_convertor(apiData.statistics.likeCount) : "12200"}</span>
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={dislike} alt="" /></span>
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={share} alt="" />Share</span>
                        <span className='flex items-center ml-4'><img className='w-5 mr-2' src={save} alt="" />Save</span>
                    </div>
                </div>
                <hr className='my-2.5 border-0 h-px bg-[#ccc]' />
                <div className="publisher flex items-center mt-5">
                    <img src={chanelData ? chanelData.snippet.thumbnails.default.url : ""} alt="" className='w-10 rounded-full mr-4' />
                    <div className="flex-1 leading-4">
                        <h2 className='text-black text-lg font-semibold'>{apiData ? apiData.snippet.channelTitle : "Dummy Channel"}</h2>
                        <span className='text-sm text-[#5a5a5a]'>{chanelData ? value_convertor(chanelData.statistics.subscriberCount) : ""} Subscriber</span>
                    </div>
                    <button className='bg-red-600 text-white py-2 px-8 rounded-sm outline-none border-0 cursor-pointer'>Subscribe</button>
                </div>
                <div className="video-description pl-14 my-3.5 mx-0">
                    <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}</p>
                    <hr className='mt-2.5' />
                    <h4 className='text-sm text-[#5a5a5a] mt-4'>{apiData ? value_convertor(apiData.statistics.commentCount) : "120010"} Comments</h4>
                    {comments.map((item, index) => {
                        const comment = item.snippet.topLevelComment.snippet;
                        return (
                            <div key={index} className="comment flex items-start my-5 mx-0">
                                <img src={comment.authorProfileImageUrl} alt="" className='rounded-full w-9 mr-4' />
                                <div>
                                    <h3 className='mb-0.5 text-sm'>
                                        {comment.authorDisplayName}
                                        <span className='text-[12px] ml-2 text-[#5a5a5a] font-medium'>
                                            {moment(comment.publishedAt).fromNow()}
                                        </span>
                                    </h3>
                                    <p>{comment.textDisplay}</p>
                                    <div className="comment-action flex items-center my-2 mx-0 text-sm">
                                        <img className='rounded-none w-5 mr-1.5' src={like} alt="" />
                                        <span className='mr-5 text-[#5a5a5a]'>{comment.likeCount}</span>
                                        <img className='rounded-none w-5 mr-1.5' src={dislike} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PlayVideo