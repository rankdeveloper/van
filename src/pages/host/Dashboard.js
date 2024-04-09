import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getHostVans } from '../../api'
import { BsStarFill } from "react-icons/bs"

export default function Dashboard() {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getHostVans()
        setVans(data)
      }
      catch (err) {
        setError(err)
      }
      finally {
        setLoading(false)
      }

    }
    loadVans()
  }, [])

  console.log("Dashboard....")
  console.log(vans)

  const hostvanElements = vans.map((van) => (
    <div className="host-van" style={{ justifyContent: "space-between" }}>

      <div className='left' style={{display:"flex" , alignItems:"center" , gap:"2rem"}}>
        <div className="host-van-img">
          <img src={van.imageUrl} />
        </div>

        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>


      <div className='right' >
        <Link to={`vans/${van.id}`} style={{color:"#4d4d4d" , textDecoration:"none"}}>View</Link>

      </div>

    </div>


  ))

  return (
    <>
      {/* <h2>Dashboard</h2>
      {hostvanElements}
      <Outlet /> */}

      <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>

                <BsStarFill className="star" />

                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                {
                    loading && !vans
                    ? <h1>Loading...</h1>
                    : (
                        <>
                            {hostvanElements}
                        </>
                    )
                }
                {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
            </section>
    </>
  )
}
