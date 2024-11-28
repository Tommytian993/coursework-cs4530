// 课程Schema - 定义课程文档的数据结构
import mongoose from "mongoose";

// 创建课程Schema，定义课程文档的字段和约束
const courseSchema = new mongoose.Schema(
  {
    // 课程名称
    name: String,
    // 课程编号
    number: String,
    // 学分
    credits: Number,
    // 课程描述
    description: String,
  },
  {
    // 指定集合名称为"courses"
    collection: "courses",
  }
);

export default courseSchema;
