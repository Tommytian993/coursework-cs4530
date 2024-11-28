// 用户管理组件 - 显示所有用户并支持按角色和姓名过滤
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const { uid } = useParams();

  // 获取所有用户
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  // 按角色过滤用户
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  // 按姓名过滤用户
  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  // 创建新用户
  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };

  // 组件加载时获取用户列表
  useEffect(() => {
    fetchUsers();
  }, [uid]);

  return (
    <div>
      <h3>Users</h3>

      {/* 搜索和过滤控件 */}
      <div className="mb-3">
        <input
          onChange={(e) => filterUsersByName(e.target.value)}
          placeholder="Search people"
          className="form-control float-start w-25 me-2 wd-filter-by-name"
        />

        <select
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select float-start w-25 wd-select-role"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>

        <button
          onClick={createUser}
          className="float-end btn btn-danger wd-add-people"
        >
          + Users
        </button>
      </div>

      {/* 用户表格 */}
      <PeopleTable users={users} />
    </div>
  );
}
