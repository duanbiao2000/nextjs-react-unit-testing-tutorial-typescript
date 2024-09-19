import { render, screen, waitFor } from '@testing-library/react';
import { LoginForm } from '../src/components/LoginForm';
import userEvent from '@testing-library/user-event';
import { server } from '../mocks/server';
// 导入rest方法，用于创建模拟的HTTP请求响应
import { rest } from 'msw';
import { expect } from '@jest/globals';

// 测试LoginForm组件，确保用户名和密码的输入以及登录按钮的交互按预期工作
describe('LoginForm', () => {
  // 测试在输入用户名和密码后，登录按钮变为可点击，并在点击后显示成功登录的消息
  it('should enter username and password and click on login button', async () => {
    render(<LoginForm />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    // 在输入用户名和密码之前，登录按钮应为禁用状态
    expect(loginButton).toBeDisabled();
    // 模拟用户输入用户名和密码
    await userEvent.type(screen.getByLabelText(/Username/), 'anson');
    await userEvent.type(screen.getByLabelText(/Password/), 'password');
    // 输入用户名和密码后，登录按钮应变为可点击状态
    expect(loginButton).toBeEnabled();
    // 模拟用户点击登录按钮，并等待成功登录的消息出现
    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByText('Success Logging In')).toBeInTheDocument();
    });
  });

  // 测试在模拟登录失败的情况下，显示错误消息
  it('should login user and display error message', async () => {
    // 设置mock服务器，模拟登录API返回错误状态
    server.use(
      rest.post('/api/auth', (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<LoginForm />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    // 在输入用户名和密码之前，登录按钮应为禁用状态
    expect(loginButton).toBeDisabled();
    // 模拟用户输入用户名和密码
    await userEvent.type(screen.getByLabelText(/Username/), 'anson');
    await userEvent.type(screen.getByLabelText(/Password/), 'password');
    // 输入用户名和密码后，登录按钮应变为可点击状态
    expect(loginButton).toBeEnabled();
    // 模拟用户点击登录按钮，并等待错误消息出现
    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByText('Error Logging In')).toBeInTheDocument();
    });
  });
});