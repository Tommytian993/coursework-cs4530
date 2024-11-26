import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 调试信息
  console.log("Environment variables:");
  console.log("REACT_APP_REMOTE_SERVER:", process.env.REACT_APP_REMOTE_SERVER);
  console.log("NODE_ENV:", process.env.NODE_ENV);

  const signin = async () => {
    try {
      console.log("Signin attempt with:", credentials);
      // 使用客户端API发送登录请求到服务器
      const user = await client.signin(credentials);

      if (!user) {
        alert("Invalid username or password");
        return;
      }

      console.log("Found user:", user);
      console.log("Dispatching setCurrentUser with:", user);
      dispatch(setCurrentUser(user));
      console.log("Navigating to Dashboard");
      navigate("/Kanbas/Dashboard");
    } catch (error: any) {
      console.error("Signin error:", error);
      if (error.response?.status === 401) {
        alert("Invalid username or password");
      } else if (error.code === "ERR_NETWORK") {
        alert("Network error. Please check if the server is running.");
      } else {
        alert(
          `Login failed: ${error.response?.data?.message || error.message}`
        );
      }
    }
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
        <br />
        <small className="text-muted">
          Server: {process.env.REACT_APP_REMOTE_SERVER || "Not configured"}
        </small>
      </div>
    </div>
  );
}
