import { defineStore } from 'pinia';

interface User {
  username: string;
  email: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
  }),
  
  actions: {
    login(username: string, password: string) {
      // Mock login - in real app, this would call an API
      if (username === 'admin' && password === 'admin') {
        this.user = {
          username: 'admin',
          email: 'admin@example.com',
        };
        this.isAuthenticated = true;
        return true;
      }
      return false;
    },
    
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});