// /src/services/AuthService.js

const AuthService = {
  login: async (username, password) => {
    // Simulate login with hardcoded credentials
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true'); // Use localStorage for session management
    } else {
      throw new Error('Invalid username or password');
    }
  },
  logout: () => {
    localStorage.removeItem('isLoggedIn');
  },
  isLoggedIn: () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  },
};

export default AuthService;
