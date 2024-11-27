// 课程客户端 - 处理React前端与课程服务器的通信
// 使用axios发送HTTP请求到课程API
import axios from "axios";

// 远程服务器地址 - 从环境变量获取，如果未定义则使用默认值
const REMOTE_SERVER =
  process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
// 课程API基础路径
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// 获取所有课程 - 从服务器获取课程列表
export const fetchAllCourses = async () => {
  // 发送GET请求到课程端点
  const { data } = await axios.get(COURSES_API);
  // 返回课程数据
  return data;
};
