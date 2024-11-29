// 课程客户端 - 处理React前端与课程服务器的通信
// 使用axios发送HTTP请求到课程API
import axios from "axios";

// 创建带凭据的axios实例，支持Cookie
const axiosWithCredentials = axios.create({ withCredentials: true });

// 远程服务器地址 - 从环境变量获取，如果未定义则使用默认值
const REMOTE_SERVER =
  process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
// 课程API基础路径
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// 获取所有课程 - 从服务器获取课程列表
export const fetchAllCourses = async () => {
  // 发送GET请求到课程端点，使用带凭据的axios实例
  const { data } = await axiosWithCredentials.get(COURSES_API);
  // 返回课程数据
  return data;
};

// 创建新课程
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
};

// 删除课程
export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

// 更新课程
export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course
  );
  return data;
};
