// 导入Home组件和测试工具库
import Home from '@/app/page';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// 描述“主页”组件的测试套件
describe('Home Page ', () => {
  // 描述渲染相关的测试
  describe('Rendering', () => {
    // 测试主页是否包含“Home Page”文本
    it('should have Home Page text', () => {
      render(<Home />);
      expect(screen.getByText('Home Page')).toBeInTheDocument();
    });

    // 测试主页是否包含“Click Me”按钮
    it('should have button with text Click Me', () => {
      render(<Home />);
      expect(
        screen.getByRole('button', { name: 'Click Me' })
      ).toBeInTheDocument();
    });

    // 测试主页是否包含标签为“Enter Random Text”的输入框
    it('should have input field with label Enter Random Text', () => {
      render(<Home />);
      expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
    });

    // 测试主页是否包含标签为“Enter Specific Text”的输入框
    it('should have input field with label Enter Specific Text', () => {
      render(<Home />);
      expect(screen.getByLabelText(/Specific/)).toBeInTheDocument();
    });

    // 测试主页是否包含占位符文本为“Search”的输入框
    it('should find input field by placeholder text Search', () => {
      render(<Home />);
      expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
    });

    // 测试主页是否包含显示值为“AUDI”的输入框
    it('should find input field by display value', () => {
      render(<Home />);
      screen.getByDisplayValue(/AUDI/);
    });

    // 测试主页不应包含特定文本“这是文本！”的元素
    it('should not find element with text: This is the text!', () => {
      render(<Home />);
      expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
    });
  });

  // 描述行为相关的测试
  describe('Behavior', () => {
    // 测试点击“显示文本”按钮后，应找到新的文本“这是文本！”
    it('should click on Show Text button and find new text', async () => {
      render(<Home />);
      expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
      const showTextButton = screen.getByRole('button', { name: 'Show Text' });
      await userEvent.click(showTextButton);
      expect(
        await screen.findByText('This is the text!', {}, { timeout: 5000 })
      ).toBeInTheDocument();
    });
  });
});