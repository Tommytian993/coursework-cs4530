// 服务器主文件 - 配置Express应用、中间件和路由
import express from "express";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";
import "dotenv/config";

// 导入路由模块
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";

// MongoDB连接配置
const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";

// 连接到MongoDB数据库
mongoose.connect(CONNECTION_STRING);
console.log("MongoDB连接字符串:", CONNECTION_STRING);

// 创建Express应用实例
const app = express();

// 配置CORS - 支持跨域请求和Cookie
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3001",
  })
);

// 配置会话选项
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};

// 生产环境会话配置
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}

// 配置会话中间件
app.use(session(sessionOptions));

// 配置JSON解析中间件
app.use(express.json());

// 配置用户路由
UserRoutes(app);
// 配置课程路由
CourseRoutes(app);

// 启动服务器
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
