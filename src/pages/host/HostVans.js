import React from 'react'
import { getHostVans } from '../../api'
import { Link } from 'react-router-dom'


export default function HostVans() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)
            }
            catch (err) {
                console.log("Failed to fetch host vans")
                setError(err)
                // console.log(error)
            }
            finally {
                setLoading(false)
            }

        }
        loadVans()
    }, [])


    console.log(vans)


    const hostvanElements = vans.map((van) => (
        <Link to={`${van.id}`} key={van.id} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="host-van">
                <div className="host-van-img">
                    <img src={van.imageUrl} />
                </div>

                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>

            </div>
        </Link>

    ))

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>There was an error : {error.message}</h2>
    }
    return (
        <>
            <h2 className='host-van-heading'>Your listed vans</h2>
            {vans.length > 0 ? (
                <div className="host-vanlisted">
                    {hostvanElements}
                </div>
            ) : (
                <h2>Loading...</h2>
            )}



        </>
    )
}
