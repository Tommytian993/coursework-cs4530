// 课程数据访问对象 (DAO) - 处理课程数据的增删改查操作
// 提供高级API接口，抽象底层数据库访问细节
import model from "./model.js";

// 查找所有课程 - 返回课程列表
export function findAllCourses() {
  return model.find();
}

// 根据用户ID查找已选课程 - 返回用户已选课程列表
export function findCoursesForEnrolledUser(userId) {
  // TODO: 实现通过enrollments集合查找用户已选课程
  // 暂时返回所有课程，后续会通过enrollments关系实现
  return model.find();
}

// 创建新课程
export function createCourse(course) {
  delete course._id; // 删除_id字段，让MongoDB自动生成
  return model.create(course);
}

// 删除课程
export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

// 更新课程
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}
