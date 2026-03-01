import React, { useState } from 'react'
import SideBar from '../../Components/SideBar'
import Feed from '../../Components/Feed'

const Home = ({ sidebar }) => {
    const [category, setCategory] = useState(0);

    return (
        <>
            <SideBar sidebar={sidebar} category={category} setCategory={setCategory} />
            <div className={`container ${sidebar ? "" : "large-container"}`}>
                <Feed category={category} />
            </div>
        </>
    )
}

export default Home