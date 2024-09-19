import { UserList } from '@/components/UserList';
import { render, screen } from '@testing-library/react';
import { server } from '../mocks/server';
import { rest } from 'msw';

// 测试 UserList 组件的渲染情况
describe('UserList - Rendering', () => {
  // 检查组件中是否包含文本 'anson'
  it('should have the text anson', async () => {
    render(<UserList />);
    // 断言文本 'anson' 存在于文档中
    expect(await screen.findByText('anson')).toBeInTheDocument();
    // 断言文本 'No Users' 不存在于文档中
    expect(screen.queryByText('No Users')).not.toBeInTheDocument();
  });

  // 检查用户名 'mike' 是否在组件中渲染
  it('should have username mike rendered', async () => {
    // 使用模拟服务器覆盖 API 响应以进行测试
    server.use(
      rest.get('/api/users', (req, res, ctx) => {
        // 返回一个包含用户 'mike' 的模拟 API 响应
        return res(ctx.json([{ id: 2, username: 'mike' }]));
      })
    );
    render(<UserList />);
    // 断言用户名 'mike' 存在于文档中
    expect(await screen.findByText('mike')).toBeInTheDocument();
  });
});
