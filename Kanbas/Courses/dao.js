// 课程数据访问对象 (DAO) - 处理课程数据的增删改查操作
// 提供高级API接口，抽象底层数据库访问细节
import Database from "../Database/index.js";

// 获取数据库中的课程数组
const { courses } = Database;

// 查找所有课程 - 返回课程列表
export function findAllCourses() {
  return courses;
}

// 根据用户ID查找已选课程 - 返回用户已选课程列表
export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  // 过滤出用户已选的课程
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === course._id
    )
  );
  return enrolledCourses;
}
