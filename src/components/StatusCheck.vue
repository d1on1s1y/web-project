<template>
    
        <p>Ваш статус {{ authStore.status }}</p>
        <p v-if="authStore.isAuthorized && authStore.userInfo" >Ви увійшли як {{ authStore.userInfo.name }}</p>
        <button v-if="authStore.isAuthorized" @click="logOut">Logout </button>
    
</template>

<script>
import { useAuthStore } from '@/stores/authStore';
import { useLogStore } from '@/stores/logStore';

export default {
    setup() {
        const authStore = useAuthStore();
        const logStore = useLogStore();

        return { authStore, logStore };
},
methods:{
        logOut(){
                this.logStore.addLog(this.authStore.userInfo.name, 'Вихід з системи')
                this.authStore.logout()
        }

}
}

</script>

<style></style>