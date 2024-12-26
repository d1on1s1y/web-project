<template>
    <div>
        <form @submit.prevent="onSubmit">
            <LoginFormInput label="Логін" v-model="formData.login" :error="errors.login"  placeholder="Введіть логін" />
            <LoginFormInput label="Пароль" v-model="formData.password" :error="errors.password"  placeholder="Введіть пароль" />
            <button type="submit">Авторизуватися</button>
        </form>
    </div>
</template>

<script>
import LoginFormInput from './LoginFormInput.vue';
import { useAuthStore } from '@/stores/authStore';

export default {
    components: {LoginFormInput},
    setup() {
        const authStore = useAuthStore();

        return { authStore };

  },

data() {
    return {
        users: [
            {
                login: 'admin123',
            password: 'qwerty',
            isAdmin: true
            },
        ],
        formData: {
            login: '',
            password: '',
        },
        errors: {
            login: '',
            password: '',
        }
    }
},

methods: {
onSubmit() {
   const userData = this.users.find(el =>el.login === this.formData.login && el.password === this.formData.password)
   
   if(!userData) {
       return
   }

   if (userData.isAdmin) {
        this.authStore.loginAsAdmin(userData.login)
   } else {
        this.authStore.loginAsUser(userData.login)
   }  
  console.log(this.authStore.status, this.authStore.userInfo); 

}
}
}
</script>

<style>
form{
    display: flex;
    flex-direction: column;
    max-width: 200px;
    gap: 15px;
}
button{
    max-width: 90%;
    height: 25px;
    border-radius: 10px;
}
</style>
