import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Signup</h1>
      <input placeholder="username" className="form-control mb-2" />
      <input
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <input
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
      />
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100 mb-2">
        Signup
      </Link>
      <Link to="/Kanbas/Account/Signin" className="text-decoration-none">
        Signin
      </Link>
    </div>
  );
}
