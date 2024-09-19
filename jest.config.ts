import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // 为您的 Next.js 应用程序提供路径，以便在测试环境中加载 next.config.js 和 .env 文件
  dir: './',
});

// 添加要传递给 Jest 的任何自定义配置
/** @type {import('jest').Config} */
const config = {
  // 在运行每个测试之前添加更多设置选项
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
};

// 以这种方式导出 createJestConfig，以确保 next/jest 可以加载异步的 Next.js 配置
export default createJestConfig(config);