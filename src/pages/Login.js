import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

/**
 * Challenge: read up on the useNavigate hook from the
 * docs and implement it in the VanLife app. When the user
 * successfully logs in, they should be redirected to the
 * /host route.
 */

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: "user1@gmail.com", password: "user123" });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || "/host";
  console.log(from);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        console.log(data);
        setError(null);
        localStorage.setItem("loggedIn", true);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <div className="login-heading">
        <h1>Sign in to your account</h1>

        {location.state?.message && <h3 className="login-error">{location.state.message}</h3>}
        {error?.message && <h3 className="login-error">{error.message}</h3>}
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
          autoComplete="off"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
          autoComplete="off"
        />
        <button disabled={status === "submitting"}>{status === "submitting" ? "Logging in..." : "Log in"}</button>
      </form>
    </div>
  );
}
