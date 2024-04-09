import React from 'react'
import { useParams } from 'react-router-dom'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { getHostVans } from '../../api'

export default function HostVanDetail() {
  const [van, setVan] = React.useState(null)
  const [error , setError] = React.useState(null)
  const [loading , setLoading] = React.useState(false)
  const { id } = useParams()

  // React.useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then(res => res.json())
  //     .then(data => setVan(data.vans[0]))
  // }, [id])

  React.useEffect(() => {
    async function loadVan(){
      setLoading(true)
      try{
        const data = await getHostVans(id)
        setVan(data)
      }
      catch(err){
        setError(err)
      }
      finally{
        setLoading(false)

      }
    }
    loadVan()
  } , [id])

  console.log(van)
  


  const styleBack = {
    color: "#161616",
    textDecoration: "none",
    padding: "10px 20px",
    marginBottom: "2rem",

  }

  const ActiveLink = {
    color: "#161616",
    fontWeight: "bold",
    textDecoration: "underline"
  }

  if(loading){
    return <h2>Loading...</h2>
  }

  if(error){
    return <h2>There was an error : {error.message}</h2>
  }
  return (
    <>
      {/* <h2>Host-van detail page</h2> */}
      {van ? (
        <div className="host-van-main">
          <Link to=".." relative='path' style={styleBack}><FaArrowLeftLong /> Back to all vans</Link>

          <div className="host-vanCurrent">




            <div className='upper'>
              <div className='img'>
                <img src={van.imageUrl} alt={van.name}/>
              </div>

              <div className='title-price'>
                <button className='type'>{van.type}</button>
                <h2>{van.name}</h2>
                <p><span className='price'>${van.price}</span>/day</p>
              </div>
            </div>

            <div className='final-host-nav'>
              <NavLink to="."
          
                style={({ isActive }) => isActive ? ActiveLink : null}
              end
              >
                Details
              </NavLink>

              <NavLink to="pricing"
                style={({ isActive }) => isActive ? ActiveLink : null}
              >Pricing
              </NavLink>

              <NavLink to="photos"
                style={({ isActive }) => isActive ? ActiveLink : null}
              >Photos
              </NavLink>
            </div>

           
            <Outlet context={{van}}/>
          
            

          </div>

        </div>
      ) : (<h2>Loading...</h2>)}


    </>
  )
}
