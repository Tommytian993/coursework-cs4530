// 用户Schema - 定义用户文档的数据结构
import mongoose from "mongoose";

// 创建用户Schema，定义用户文档的字段和约束
const userSchema = new mongoose.Schema(
  {
    // 用户名 - 必填且唯一
    username: { type: String, required: true, unique: true },
    // 密码 - 必填
    password: { type: String, required: true },
    // 名字
    firstName: String,
    // 邮箱
    email: String,
    // 姓氏
    lastName: String,
    // 出生日期
    dob: Date,
    // 用户角色 - 枚举值，默认为USER
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    // 登录ID
    loginId: String,
    // 班级/部门
    section: String,
    // 最后活动时间
    lastActivity: Date,
    // 总活动量
    totalActivity: String,
  },
  {
    // 指定集合名称为"users"
    collection: "users",
  }
);

export default userSchema;
