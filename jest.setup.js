// 导入jest-dom的扩展期望匹配器
import '@testing-library/jest-dom/extend-expect';
// 导入whatwg-fetch以提供全局的fetch函数
import 'whatwg-fetch';
// 导入定义的mock服务器
import { server } from './mocks/server';

/**
 * 在所有测试之前运行
 * 初始化mock服务器，使其能够处理请求
 */
beforeAll(() => {
  server.listen();
});

/**
 * 在每个测试之后运行
 * 重置mock服务器的处理器，以确保每个测试都是独立的
 */
afterEach(() => {
  server.resetHandlers();
});

/**
 * 在所有测试之后运行
 * 关闭mock服务器，释放相关资源
 */
afterAll(() => {
  server.close();
});