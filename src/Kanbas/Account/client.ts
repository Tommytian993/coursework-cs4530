// 账户客户端 - 处理React前端与服务器的通信
// 使用axios发送HTTP请求到服务器API
import axios from "axios";

// 远程服务器地址 - 从环境变量获取
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// 用户API基础路径
export const USERS_API = `${REMOTE_SERVER}/api/users`;

// 用户登录 - 发送用户名和密码到服务器进行验证
export const signin = async (credentials: any) => {
  // 发送POST请求到登录端点，包含用户凭据
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  // 返回服务器响应的用户数据
  return response.data;
};
