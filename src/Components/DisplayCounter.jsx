import React from 'react'
import { useSelector } from 'react-redux'



const DisplayCounter = () => {

    const { counterVal } = useSelector((store)=>store.counter);
    return (
        <div>
            <p className="lead mb-4">Display Counter Value : {counterVal}</p>
        </div>
    )
}

export default DisplayCounter
