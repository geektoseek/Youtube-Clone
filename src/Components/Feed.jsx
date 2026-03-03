import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { myAPI, value_convertor } from '../data'
import moment from 'moment'

const Feed = ({ category }) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${category}&maxResults=500&key=${myAPI}`;
        await fetch(videoList)
            .then(response => response.json()).then(data => {
                if (data.items) {
                    setData(data.items)
                }
            })
    }

    useEffect(() => {
        fetchData();
    }, [category])

    return (
        <>
            <div className="feed grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-7 mt-4">
                {data.map((items, index) => {
                    return (
                        <Link key={index} to={`video/${items.snippet.categoryId}/${items.id}`} className="card">
                            <img className='w-full rounded-sm' src={items.snippet.thumbnails.high.url} alt="" />
                            <h2 className='font-semibold text-[16px] text-black mx-0 my-1.5'
                            >{items.snippet.title}</h2>
                            <h3 className='text-sm font-semibold text-[#555] mx-0 my-2'
                            >{items.snippet.channelTitle}</h3>
                            <p className='text-sm'>{value_convertor(items.statistics.viewCount)} views &bull; {moment(items.snippet.publishedAt).fromNow()}</p>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Feed