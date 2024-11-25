// 用户路由 - 实现用户相关的RESTful Web API
// 在HTTP网络层和JavaScript对象层之间创建接口
import * as dao from "./dao.js";

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
    const currentUser = dao.findUserById(userId);
    // 更新会话中的用户信息
    req.session["currentUser"] = currentUser;
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
    const currentUser = dao.createUser(req.body);
    // 将用户信息存储到会话中
    req.session["currentUser"] = currentUser;
    // 返回新创建的用户信息
    res.json(currentUser);
  };

  // 用户登录 - 处理POST /api/users/signin请求
  const signin = (req, res) => {
    // 从请求体中提取用户名和密码
    const { username, password } = req.body;
    // 使用DAO验证用户凭据
    const currentUser = dao.findUserByCredentials(username, password);
    if (currentUser) {
      // 将用户信息存储到会话中
      req.session["currentUser"] = currentUser;
      // 将当前用户信息发送给客户端
      res.json(currentUser);
    } else {
      // 如果凭据无效，返回401错误
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
  };

  // 用户登出 - 处理POST /api/users/signout请求
  const signout = (req, res) => {
    // 销毁会话
    req.session.destroy();
    // 返回成功状态码
    res.sendStatus(200);
  };

  // 获取用户资料 - 处理POST /api/users/profile请求
  const profile = (req, res) => {
    // 从会话中获取当前用户信息
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      // 如果没有当前用户，返回401错误
      res.sendStatus(401);
      return;
    }
    // 返回当前用户信息
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
