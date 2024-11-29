// 课程路由 - 实现课程相关的RESTful Web API
// 在HTTP网络层和JavaScript对象层之间创建接口
import * as dao from "./dao.js";

// 课程路由配置函数 - 接收Express应用实例并配置路由
export default function CourseRoutes(app) {
  // 获取所有课程 - 处理GET /api/courses请求
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  // 创建新课程 - 处理POST /api/courses请求
  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  });

  // 删除课程 - 处理DELETE /api/courses/:courseId请求
  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.send(status);
  });

  // 更新课程 - 处理PUT /api/courses/:courseId请求
  app.put("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = await dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });
}
