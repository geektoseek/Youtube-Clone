import React, { useState } from 'react'
import { myAPI, value_convertor } from '../data'
import { data, Link } from 'react-router-dom'
import { useEffect } from 'react'



const Recomended = ({ categoryId }) => {


    const [apiData, setApiData] = useState([])
    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${myAPI}`
        await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items))
    }
    useEffect(() => {
        fetchData();
    }, [categoryId])

    console.log(apiData.items);


    return (
        <>
            <div className="recomended basis-[30%]">

                {apiData.filter(item => item.snippet).map((item, index) => {
                    return (
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list flex justify-between mb-2">
                            <img src={item.snippet.thumbnails.medium.url} alt="" className='basis-[49%] w-2/4 rounded-sm' />
                            <div className="video-info basis-[49%]">
                                <h4 className='font-bold text-sm mb-1 text-black'>{item.snippet.title}</h4>
                                <p>{item.snippet.channelTitle}</p>
                                <p>{item.statistics ? value_convertor(item.statistics.viewCount) : "N/A"} Views</p>
                            </div>
                        </Link>
                    )
                })}



            </div>
        </>
    )
}

export default Recomended