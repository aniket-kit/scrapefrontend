// Set a dummy token (e.g., on login)
export function login(username, password) {
  // For demo, accept any username/password
  if (username && password) {
    localStorage.setItem('token', 'dummy-token');
    return true;
  }
  return false;
}

// Check if logged in
export function isLoggedIn() {
  return !!localStorage.getItem('token');
}

// Logout (remove token)
export function logout() {
  localStorage.removeItem('token');
}
