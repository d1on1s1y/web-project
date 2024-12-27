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
import { useLogStore } from '@/stores/logStore';
import { useUserStore } from '@/stores/userStore';

export default {
    components: {LoginFormInput},
    setup() {
        const authStore = useAuthStore();
        const userStore = useUserStore();
        const logStore = useLogStore();

        return { authStore, userStore, logStore };

  },

data() {
    return {
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
    const userData = this.userStore.getUserByData(this.formData.login, this.formData.password) 

   if(!userData) {
       return
   }

   if (userData.isAdmin) {
        this.authStore.loginAsAdmin(userData.login)
   } else {
        this.authStore.loginAsUser(userData.login)
   }  
   this.logStore.addLog(userData.login, 'Авторизація в системі')
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
