// 用户注册组件 - 允许用户创建新账户
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  // 用户状态 - 存储注册表单数据
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 注册处理函数 - 发送注册请求到服务器
  const signup = async () => {
    try {
      // 使用客户端API发送注册请求
      const currentUser = await client.signup(user);
      // 将新用户信息存储到Redux状态
      dispatch(setCurrentUser(currentUser));
      // 导航到用户资料页面
      navigate("/Kanbas/Account/Profile");
    } catch (error: any) {
      // 处理注册错误
      if (error.response?.status === 400) {
        alert(error.response.data.message || "Registration failed");
      } else {
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {/* 用户名输入框 */}
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username form-control mb-2"
        placeholder="username"
      />
      {/* 密码输入框 */}
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        className="wd-password form-control mb-2"
        placeholder="password"
      />
      {/* 注册按钮 */}
      <button
        onClick={signup}
        className="wd-signup-btn btn btn-primary mb-2 w-100"
      >
        Sign up
      </button>
      <br />
      {/* 登录链接 */}
      <Link to="/Kanbas/Account/Signin" className="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
