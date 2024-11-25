// 用户路由 - 实现用户相关的RESTful Web API
// 在HTTP网络层和JavaScript对象层之间创建接口
import * as dao from "./dao.js";

// 服务器端当前用户变量 - 记住已登录用户
let currentUser = null;

// 用户路由配置函数 - 接收Express应用实例并配置路由
export default function UserRoutes(app) {
  // 创建用户 - 处理POST /api/users请求
  const createUser = (req, res) => {};

  // 删除用户 - 处理DELETE /api/users/:userId请求
  const deleteUser = (req, res) => {};

  // 查找所有用户 - 处理GET /api/users请求
  const findAllUsers = (req, res) => {};

  // 根据ID查找用户 - 处理GET /api/users/:userId请求
  const findUserById = (req, res) => {};

  // 更新用户 - 处理PUT /api/users/:userId请求
  const updateUser = (req, res) => {
    // 从URL参数中获取用户ID
    const userId = req.params.userId;
    // 从请求体中获取用户更新信息
    const userUpdates = req.body;
    // 使用DAO更新用户信息
    dao.updateUser(userId, userUpdates);
    // 获取更新后的用户信息
    currentUser = dao.findUserById(userId);
    // 返回更新后的用户信息
    res.json(currentUser);
  };

  // 用户注册 - 处理POST /api/users/signup请求
  const signup = (req, res) => {
    // 检查用户名是否已被使用
    const user = dao.findUserByUsername(req.body.username);
    if (user) {
      // 如果用户名已存在，返回400错误
      res.status(400).json({ message: "Username already in use" });
      return;
    }
    // 创建新用户并设置为当前登录用户
    currentUser = dao.createUser(req.body);
    // 返回新创建的用户信息
    res.json(currentUser);
  };

  // 用户登录 - 处理POST /api/users/signin请求
  const signin = (req, res) => {
    // 从请求体中提取用户名和密码
    const { username, password } = req.body;
    // 使用DAO验证用户凭据
    currentUser = dao.findUserByCredentials(username, password);
    // 将当前用户信息发送给客户端
    res.json(currentUser);
  };

  // 用户登出 - 处理POST /api/users/signout请求
  const signout = (req, res) => {
    // 清除服务器端当前用户信息
    currentUser = null;
    // 返回成功状态码
    res.sendStatus(200);
  };

  // 获取用户资料 - 处理POST /api/users/profile请求
  const profile = (req, res) => {
    // 返回服务器端当前用户信息
    res.json(currentUser);
  };

  // 配置RESTful API路由
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
