import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound-container">
      <h2>Sorry, the page you were looking for was not found.</h2>
      <Link to="/">Return to home</Link>
    </div>
  );
}
