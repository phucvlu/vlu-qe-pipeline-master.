// auth.smoke.test.js
const { login } = require('./auth');

test('đăng nhập đúng trả về true', () => {
  expect(login('admin', '123')).toBe(true);
});
