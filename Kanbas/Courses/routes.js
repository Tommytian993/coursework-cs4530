// 课程路由 - 实现课程相关的RESTful Web API
// 在HTTP网络层和JavaScript对象层之间创建接口
import * as dao from "./dao.js";

// 课程路由配置函数 - 接收Express应用实例并配置路由
export default function CourseRoutes(app) {
  // 获取所有课程 - 处理GET /api/courses请求
  app.get("/api/courses", (req, res) => {
    // 使用DAO获取所有课程
    const courses = dao.findAllCourses();
    // 返回课程列表
    res.send(courses);
  });
}
