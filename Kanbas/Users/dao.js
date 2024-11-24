// 用户数据访问对象 (DAO) - 处理用户数据的增删改查操作
// 提供高级API接口，抽象底层数据库访问细节
import db from "../Database/index.js";

// 获取数据库中的用户数组
let { users } = db;

// 创建新用户 - 为新用户生成唯一ID并添加到用户列表
export const createUser = (user) => {
  const newUser = { ...user, _id: Date.now().toString() };
  users = [...users, newUser];
  return newUser;
};

// 查找所有用户 - 返回用户列表
export const findAllUsers = () => users;

// 根据用户ID查找用户 - 返回匹配的用户对象
export const findUserById = (userId) =>
  users.find((user) => user._id === userId);

// 根据用户名查找用户 - 返回匹配的用户对象
export const findUserByUsername = (username) =>
  users.find((user) => user.username === username);

// 根据用户名和密码验证用户凭据 - 返回匹配的用户对象
export const findUserByCredentials = (username, password) =>
  users.find(
    (user) => user.username === username && user.password === password
  );

// 更新用户信息 - 根据用户ID更新用户数据
export const updateUser = (userId, user) =>
  (users = users.map((u) => (u._id === userId ? user : u)));

// 删除用户 - 根据用户ID从用户列表中移除用户
export const deleteUser = (userId) =>
  (users = users.filter((u) => u._id !== userId));
