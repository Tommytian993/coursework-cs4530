// 课程Model - 提供与MongoDB课程集合交互的接口
import mongoose from "mongoose";
import schema from "./schema.js";

// 从Schema创建Mongoose模型
// "CourseModel"是模型的名称，用于在其他地方引用
const model = mongoose.model("CourseModel", schema);

export default model;
