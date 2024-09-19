import { useState } from 'react';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const isDisabled = () => !username || !password;

/**
 * 处理用户登录的函数
 * @param {Event} e - 登录表单提交事件
 */
const handleLogin = (e) => {
  // 在提交表单前清除之前的错误和成功提示
  setError('');
  setSuccess('');
  // 阻止表单的默认提交行为
  e.preventDefault();
  // 发送POST请求到API进行用户身份验证
  fetch('/api/auth', {
    method: 'POST',
    // 将用户名和密码作为JSON数据发送
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      // 登录成功后显示成功提示
      setSuccess('Success Logging In');
    })
    .catch((err) => {
      // 登录失败时显示错误提示
      setError('Error Logging In');
    });
};

  return (
    <form>
      <div>{error}</div>
      <div>{success}</div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin} disabled={isDisabled()}>
        Login
      </button>
    </form>
  );
};
