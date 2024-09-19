// 导入rest对象，用于创建模拟的API端点
import { rest } from 'msw';

// 定义一组请求处理函数，用于模拟API的响应
export const handlers = [
  // 模拟GET请求处理函数，返回用户的列表
  rest.get('/api/users', (req, res, ctx) => {
    // 返回一个包含单个用户的JSON响应
    return res(ctx.json([{ id: 1, username: 'anson' }]));
  }),
  // 模拟POST请求处理函数，返回空对象表示认证操作完成
  rest.post('/api/auth', (req, res, ctx) => {
    // 返回一个空的JSON响应，表示认证成功但无具体内容
    return res(ctx.json({}));
  }),
];