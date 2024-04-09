import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function HostVanInfo() {
    const { van } = useOutletContext()
    console.log(van)
    return (

        <section className='host-van-info-container'>
            <p><span className='bold-heading'>Name : </span>{van.name}</p>
            <p><span className='bold-heading'>Category : </span>{van.type}</p>
            <p><span className='bold-heading'>Description : </span>{van.description}</p>
            <p><span className='bold-heading'>Visibility : </span>Public</p>
        </section>

    )
}
