import React from 'react'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'



const Recomended = () => {
    return (
        <>
            <div className="recomended basis-[30%]">
                <div className="side-video-list flex justify-between mb-2">
                    <img src={thumbnail1} alt="" className='basis-[49%] w-2/4 ' />
                    <div className="video-info basis-[49%]">
                        <h4>Best project by zero in react js</h4>
                        <p>Zero World</p>
                        <p>100k Views</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recomended