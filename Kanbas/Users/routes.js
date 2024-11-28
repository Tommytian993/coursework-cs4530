// 用户路由 - 实现用户相关的RESTful Web API
// 在HTTP网络层和JavaScript对象层之间创建接口
import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";

// 用户路由配置函数 - 接收Express应用实例并配置路由
export default function UserRoutes(app) {
  // 创建用户 - 处理POST /api/users请求
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };

  // 删除用户 - 处理DELETE /api/users/:userId请求
  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };

  // 查找所有用户 - 处理GET /api/users请求
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };

  // 根据ID查找用户 - 处理GET /api/users/:userId请求
  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

  // 更新用户 - 处理PUT /api/users/:userId请求
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const userUpdates = req.body;
    await dao.updateUser(userId, userUpdates);
    const currentUser = req.session["currentUser"];
    if (currentUser && currentUser._id === userId) {
      req.session["currentUser"] = { ...currentUser, ...userUpdates };
    }
    res.json(currentUser);
  };

  // 用户注册 - 处理POST /api/users/signup请求
  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    const currentUser = await dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  // 用户登录 - 处理POST /api/users/signin请求
  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    } else {
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

  // 查找用户已选课程 - 处理GET /api/users/:userId/courses请求
  const findCoursesForEnrolledUser = async (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
    }
    const courses = await courseDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
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
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
}
