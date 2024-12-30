import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user',{
    state: () => ({
        users: []}),
    actions:{
        addNewUser(login, password, status = false){
            const newUser =  {
                login: login,
                password: password,
                isAdmin: status
                }
            if( newUser.login && newUser.password){
                this.users = [...this.users, newUser]
        }
        },
        async fetchUsers() {
            try {
              const response = await axios.get('/api/users'); // Запит до бекенду
              this.users = response.data; // Зберігаємо список користувачів у стані
            //   console.log('Users fetched sucsessfuly');
            } catch (error) {
              console.error('Error fetching users:', error);
            }
          },
        
    },
    getters:{
        getUserByData: (state) => (login,password) => state.users.find(el =>el.login === login && el.password === password)
    }
})