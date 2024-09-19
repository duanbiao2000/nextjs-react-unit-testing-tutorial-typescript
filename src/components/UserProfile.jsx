// UserProfile组件接收用户信息的属性并展示用户的详细信息
// 参数:
// - displayName: 用户的显示名称
// - username: 用户名
// - email: 用户的电子邮件地址
// - isEmailVerified: 邮箱验证状态，布尔值，true表示已验证，false表示未验证
// 返回值: 包含用户显示名称、用户名、电子邮件地址和邮箱验证状态的格式化信息的React元素
export const UserProfile = ({
  displayName,
  username,
  email,
  isEmailVerified,
}) => (
  <div>
    {/* 显示用户的显示名称，如果显示名称长度超过30个字符，则截断并添加省略号 */}
    <div>
      <span>
        Display Name:{' '}
        {displayName.length > 30
          ? displayName.slice(0, 28).concat('...')
          : displayName}
      </span>
    </div>

    <div>
      <span>Username: {username}</span>
    </div>

    <div>
      <span>Email: {email}</span>
    </div>

    {/* 显示电子邮件验证状态 */}
    <div>
      Verified:
      <span>{isEmailVerified ? 'Email Verified' : 'Email Not Verified'}</span>
    </div>
  </div>
);