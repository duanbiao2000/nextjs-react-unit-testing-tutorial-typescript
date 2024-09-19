// 导入Next.js的服务器端组件支持库
import { NextResponse } from 'next/server';

// 定义一个异步函数GET，用于处理GET请求
// 该函数接受一个请求对象作为参数，但在此示例中未使用
// 主要目的是返回一个包含用户信息的JSON响应
export async function GET(req) {
  // 返回一个包含用户信息的JSON数组，用于模拟或提供用户数据
  return NextResponse.json([
    {
      id: 1,
      username: 'anson',
    },
    {
      id: 2,
      username: 'jack',
    },
    {
      id: 3,
      username: 'mike',
    },
  ]);
}