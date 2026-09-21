// auth.regression.test.js
const { login } = require('./auth');

describe('Kiểm tra ngoại lệ đăng nhập (Regression Test)', () => {
  test('mật khẩu sai trả về false', () => {
    expect(login('admin', 'wrongpassword')).toBe(false);
  });

  test('username rỗng trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('mật khẩu chứa ký tự đặc biệt trả về false', () => {
    expect(login('admin', '123@#$')).toBe(false);
  });

  test('tài khoản bị khóa trả về false', () => {
    expect(login('locked_account', '123')).toBe(false);
  });
});
