import React from 'react'
import PlayVideo from '../../Components/PlayVideo'
import Recomended from '../../Components/Recomended'
import { useParams } from 'react-router-dom'


const Video = () => {

    const { videoId, categryId } = useParams();

    return (
        <>
            <div className="play-container px-[2%] py-5 bg-[#f9f9f9] flex justify-between flex-wrap ">
                <PlayVideo videoId={videoId} />
                <Recomended />
            </div>
        </>
    )
}

export default Video