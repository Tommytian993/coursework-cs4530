// 会话管理组件 - 在应用启动时检查用户登录状态
// 从服务器获取当前用户信息并存储到Redux状态中
import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

// Session组件属性类型定义
interface SessionProps {
  children: any;
}

export default function Session({ children }: SessionProps) {
  // 加载状态 - 控制是否显示加载界面
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  // 获取用户资料 - 从服务器获取当前用户信息
  const fetchProfile = async () => {
    try {
      // 使用客户端API获取当前用户信息
      const currentUser = await client.profile();
      // 将用户信息存储到Redux状态
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      // 如果获取失败，说明用户未登录，清除用户状态
      console.error("Failed to fetch profile:", err);
      dispatch(setCurrentUser(null));
    }
    // 设置加载完成状态
    setPending(false);
  };

  // 组件挂载时获取用户资料
  useEffect(() => {
    fetchProfile();
  }, []);

  // 如果还在加载中，不渲染子组件
  if (pending) {
    return <div>Loading...</div>;
  }

  // 加载完成后渲染子组件
  return children;
}
