import { useEffect, useState } from 'react';

// 定义一个名为UserList的函数组件
export const UserList = () => {
  // 初始化users状态，用于存储用户列表数据
  const [users, setUsers] = useState([]);

  // 在组件挂载后立即获取用户列表数据
  useEffect(() => {
    // 发起请求获取用户数据
    fetch('/api/users')
      // 将响应转换为JSON格式
      .then((res) => res.json())
      // 将获取到的数据更新到users状态中
      .then((data) => setUsers(data));
  }, []); // 空数组作为依赖项，使得该effect只在组件挂载和解挂时执行

  return (
    <div>
      {users.length > 0 ? (
        <div>
          <h1>List Of Users</h1>
          {users.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))}
        </div>
      ) : (
        <span>No Users</span>
      )}
    </div>
  );
};
