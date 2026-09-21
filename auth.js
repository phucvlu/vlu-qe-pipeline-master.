// auth.js
function login(username, password) {
  if (!username) {
    return false;
  }
  
  if (username === "locked_account") {
    return false;
  }
  
  if (username === "admin" && password === "123") {
    return true;
  }
  
  return false;
}

module.exports = { login };
//ver3//
