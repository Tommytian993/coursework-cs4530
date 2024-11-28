// 账户客户端 - 处理React前端与服务器的通信
// 使用axios发送HTTP请求到服务器API
import axios from "axios";

// 创建支持Cookie的axios实例
const axiosWithCredentials = axios.create({ withCredentials: true });

// 远程服务器地址 - 从环境变量获取，如果未定义则使用默认值
export const REMOTE_SERVER =
  process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
// 用户API基础路径
export const USERS_API = `${REMOTE_SERVER}/api/users`;

// 调试信息
console.log("REMOTE_SERVER:", REMOTE_SERVER);
console.log("USERS_API:", USERS_API);

// 用户登录 - 发送用户名和密码到服务器进行验证
export const signin = async (credentials: any) => {
  try {
    console.log("Attempting signin with:", credentials);
    console.log("Signin URL:", `${USERS_API}/signin`);

    // 发送POST请求到登录端点，包含用户凭据
    const response = await axiosWithCredentials.post(
      `${USERS_API}/signin`,
      credentials
    );

    console.log("Signin response:", response.data);
    // 返回服务器响应的用户数据
    return response.data;
  } catch (error: any) {
    console.error("Signin error:", error);
    console.error("Error response:", error.response?.data);
    throw error;
  }
};

// 用户注册 - 发送新用户信息到服务器进行注册
export const signup = async (user: any) => {
  // 发送POST请求到注册端点，包含新用户信息
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  // 返回服务器响应的用户数据
  return response.data;
};

// 更新用户信息 - 发送用户更新信息到服务器
export const updateUser = async (user: any) => {
  // 发送PUT请求到用户更新端点，包含用户ID和更新信息
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  // 返回服务器响应的用户数据
  return response.data;
};

// 获取用户资料 - 从服务器获取当前用户信息
export const profile = async () => {
  // 发送POST请求到用户资料端点
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  // 返回服务器响应的用户数据
  return response.data;
};

// 用户登出 - 发送登出请求到服务器
export const signout = async () => {
  // 发送POST请求到登出端点
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  // 返回服务器响应
  return response.data;
};

// 获取用户已选课程 - 从服务器获取当前用户的课程列表
export const findMyCourses = async () => {
  // 发送GET请求到用户课程端点
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );
  // 返回课程数据
  return data;
};

// 获取所有用户
export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};

// 根据角色查找用户
export const findUsersByRole = async (role: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}?role=${role}`);
  return response.data;
};

// 根据姓名查找用户
export const findUsersByPartialName = async (name: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}?name=${name}`);
  return response.data;
};

// 创建新用户
export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post(USERS_API, user);
  return response.data;
};
