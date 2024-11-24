import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = () => {
    console.log("Signin attempt with:", credentials);
    console.log("Available users:", db.users);

    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    console.log("Found user:", user);

    if (!user) {
      alert("Invalid username or password");
      return;
    }

    console.log("Dispatching setCurrentUser with:", user);
    dispatch(setCurrentUser(user));
    console.log("Navigating to Dashboard");
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="form-control mb-2"
        placeholder="username"
        id="wd-username"
      />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="form-control mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />
      <button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100"
      >
        Sign in
      </button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>

      {/* Debug info */}
      <div className="mt-3">
        <small className="text-muted">
          Test users: iron_man/stark123 (Faculty), dark_knight/wayne123
          (Student)
        </small>
      </div>
    </div>
  );
}
