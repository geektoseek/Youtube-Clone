import React from 'react'
import SideBar from '../../Components/SideBar'
import Feed from '../../Components/Feed'
const Home = ({ sidebar }) => {
    return (
        <>
            <SideBar sidebar={sidebar} />
            <div className={`container ${sidebar ? "" : "large-container"}`}>
                <Feed />
            </div>
        </>
    )
}

export default Home