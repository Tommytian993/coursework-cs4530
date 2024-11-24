// 数据库索引文件 - 统一导出所有数据模块
// 包含：课程、模块、作业、用户、成绩、选课等数据
import courses from "./courses.js";
import modules from "./modules.js";
import assignments from "./assignments.js";
import users from "./users.js";
import grades from "./grades.js";
import enrollments from "./enrollments.js";

// 导出所有数据模块
export default {
  courses,
  modules,
  assignments,
  users,
  grades,
  enrollments,
};
