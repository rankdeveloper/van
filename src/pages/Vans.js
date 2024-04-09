import React from "react"
import { Link, useSearchParams } from 'react-router-dom'
// import { FaFilterCircleXmark } from 'react-icons/ai'
import { getVans } from "../api"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const filtering = searchParams.get("type")
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            }
            catch (err) {
                console.log("there was an error")
                console.log(err)
                setError(err.message)
                // console.log(error)
            }
            finally {
                setLoading(false)
            }

        }
        loadVans()


        // fetch("/api/vans")
        //     .then(handleError)
        //     .then(data => setVans(data.vans))
        //     .catch(error => {console.log(error)})
    }, [])
    console.log(vans)
    console.log("________________________")
    console.log("Search----params-----")
    console.log(searchParams.toString())
    const filterVans = filtering ? vans.filter(v => v.type === filtering) : vans

    const vanlist = filterVans.map((van) => (
        <Link to={`${van.id}`} state={{ search: `?${searchParams.toString()}`, type: filtering }} key={van.id} style={{ textDecoration: "none" }}>
            <div key={van.id} className="grid-item">
                <div className="img">
                    <img src={van.imageUrl}  alt={van.name}/>
                </div>

                <div className="van-info">
                    <h3>{van.name} <span style={{ float: "right" }}>$60/day</span></h3>
                    <button className={`type ${van.type}`}>{van.type}</button>
                </div>
            </div>
        </Link>
    ))
    console.log(vans)

    function handleUrl(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            }
            else {
                prevParams.set(key, value)
            }

            return prevParams
        })
    }


    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {

        return <h1>There was an error : {error.message}</h1>
    }

    return (
        <>

            <div className="vans-container">
                <h1>Explore our van options</h1>
                <div className="filter-container">
                    <button className={`filter-link type-simple ${filtering === "simple" ? "selected" : ""}`} onClick={() => handleUrl("type", "simple")}>Simple</button>
                    <button className={`filter-link type-rugged ${filtering === "rugged" ? "selected" : ""}`} onClick={() => handleUrl("type", "rugged")}>Rugged</button>
                    <button className={`filter-link type-luxury ${filtering === "luxury" ? "selected" : ""}`} onClick={() => handleUrl("type", "luxury")}>Luxury</button>
                    {filtering && (
                        <button className="filter-link type-clearFilter" onClick={() => handleUrl("type", null)}>Clear filter</button>

                    )}
                    {/* <Link to="?type=simple">Simple</Link>
                        <Link to="?type=luxury">Luxury</Link>
                        <Link to="?type=rugged">Rugged</Link>
                        <Link to=".">Clear filter</Link> */}
                </div>

                <div className="grid-container">
                    {vanlist}
                </div>
            </div>


        </>

    )


}