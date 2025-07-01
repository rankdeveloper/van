import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const ActiveStyle = {
    color: "#161616",
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <>
      <div className="host-nav">
        <NavLink style={({ isActive }) => (isActive ? ActiveStyle : null)} to="." end>
          Dashboard
        </NavLink>

        <NavLink to="income" style={({ isActive }) => (isActive ? ActiveStyle : null)}>
          Income
        </NavLink>

        <NavLink to="reviews" style={({ isActive }) => (isActive ? ActiveStyle : null)}>
          Reviews
        </NavLink>

        <NavLink to="vans" style={({ isActive }) => (isActive ? ActiveStyle : null)}>
          Vans
        </NavLink>
      </div>

      <Outlet />
    </>
  );
}
