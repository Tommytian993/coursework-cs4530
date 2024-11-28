// 用户数据访问对象 (DAO) - 处理用户数据的增删改查操作
// 提供高级API接口，抽象底层数据库访问细节
import model from "./model.js";

// 创建新用户 - 删除可能的_id字段，让数据库自动生成
export const createUser = (user) => {
  delete user._id; // 删除_id字段，让MongoDB自动生成
  return model.create(user);
};

// 查找所有用户 - 返回用户列表
export const findAllUsers = () => model.find();

// 根据用户ID查找用户 - 返回匹配的用户对象
export const findUserById = (userId) => model.findById(userId);

// 根据用户名查找用户 - 返回匹配的用户对象
export const findUserByUsername = (username) =>
  model.findOne({ username: username });

// 根据用户名和密码验证用户凭据 - 返回匹配的用户对象
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });

// 更新用户信息 - 根据用户ID更新用户数据
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });

// 删除用户 - 根据用户ID从用户列表中移除用户
export const deleteUser = (userId) => model.deleteOne({ _id: userId });

// 根据角色查找用户 - 返回指定角色的用户列表
export const findUsersByRole = (role) => model.find({ role: role });

// 根据部分姓名查找用户 - 支持模糊搜索
export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i'表示不区分大小写
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};
