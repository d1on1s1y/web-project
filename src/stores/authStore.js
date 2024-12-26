import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    status: 'unauthenticated', // або 'user', або 'admin'
    userInfo: null // Інформація про користувача (наприклад, ім'я, ID тощо)
  }),
  actions: {
    loginAsUser(login) {
      this.status = 'user';
      this.userInfo = { name: login, id: 1 };
    },
    loginAsAdmin(login) {
      this.status = 'admin';
      this.userInfo = { name: login, id: 2 };
    },
    logout() {
      this.status = 'unauthenticated';
      this.userInfo = null;
    }
  },
  getters: {
    isAuthenticated: (state) => state.status !== 'unauthenticated',
    isAdmin: (state) => state.status === 'admin'
  }
});