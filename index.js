// 服务器主文件 - 配置Express应用、中间件和路由
import express from "express";
import cors from "cors";
import session from "express-session";
import "dotenv/config";

// 导入路由模块
import UserRoutes from "./Kanbas/Users/routes.js";

// 创建Express应用实例
const app = express();

// 配置CORS - 支持跨域请求和Cookie
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
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

// 启动服务器
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
