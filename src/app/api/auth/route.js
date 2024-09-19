import { NextResponse } from 'next/server';

// 处理POST请求，用于接收和响应JSON数据
// @param {Request} req - The Request object representing the HTTP request.
// @returns {Promise<Response>} - A promise that resolves to a Response object representing the HTTP response.
export async function POST(req) {
  // 解析请求体中的JSON数据
  const json = await req.json();
  // 日志输出接收到的用户名，用于调试目的
  console.log(json.username);
  // 返回一个空的JSON响应
  return NextResponse.json({});
}