import React from 'react'
import BangladeshMap from './BangladeshMap'
import { useLoaderData } from 'react-router'

const Map = () => {
    const data = useLoaderData()
    console.log("🚀 ~ Map ~ data:", data)
    return (
        
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    🇧🇩 Bangladesh District Map
                </h1>
                <BangladeshMap data={data}/>
            </div>
      
    )
}

export default Map
