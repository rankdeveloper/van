import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {
    const {van} = useOutletContext()

    const photoStyle={
        width:"100px",
        borderRadius:"5px"
        
    }
  return (
    <div className='photo'>
        <img src={van.imageUrl} style={photoStyle} alt={van.name}/>
    </div>
  )
}
