import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getHostVans } from "../api";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function VanDetail() {
  const [van, setVan] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  const location = useLocation();
  console.log("_________location_____________");
  console.log(location.state);

  console.log(van);
  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  const search = location.state?.search || "";
  const vanTypeText = location.state?.type || "all";

  if (error) {
    return <h2>There was an error : {error.message}</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="vanDetail-container">
      {van && (
        <div className="van-detail">
          <div className="back">
            <Link to={`..${search}`} relative="path">
              <FaArrowLeftLong />
              Back to {vanTypeText} vans
            </Link>
          </div>

          <div className="img">
            <img src={van.imageUrl} alt={van.name} />
          </div>

          <button className={`type ${van.type}`}>{van.type}</button>
          <h3>{van.name}</h3>
          <h5 className="price">
            <span className="small">${van.price}</span>/day
          </h5>
          <p>{van.description}</p>
          <button className="rent-this-van">Rent this van</button>
        </div>
      )}
    </div>
  );
}
