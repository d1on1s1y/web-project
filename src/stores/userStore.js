import { defineStore } from 'pinia';

export const useUserStore = defineStore('user',{
    state: () => ({
        users: [
            {
            login: 'admin123',
            password: 'qwerty',
            isAdmin: true
            },
            {
            login: 'user123',
            password: '123',
            isAdmin: false
            },
            {
            login: 'a',
            password: 'q',
            isAdmin: true
            },
            {
            login: 'u',
            password: 'q',
            isAdmin: false
            },
            
        ]}),
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
        }
    },
    getters:{
        getUserByData: (state) => (login,password) => state.users.find(el =>el.login === login && el.password === password)
    }
})