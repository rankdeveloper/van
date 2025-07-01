export default function Intro() {
  const url =
    window.location.hostname === "localhost" ? "http://localhost:3000/" : "https://rank-van-life.netlify.app/";
  return (
    <div className="intro">
      <div className="intro-inner">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road
          trip.
        </p>

        <div className="button">
          <a href={url}>Find your vans</a>
        </div>
      </div>
    </div>
  );
}
