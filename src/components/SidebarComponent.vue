<template>
    <div class="sidebar-container">
        <StatusCheck/>
        <LoginForm v-if="!authStore.isAuthorized" />
    </div>
</template> 

<script>
import LoginForm from './LoginForm.vue';
import StatusCheck from './StatusCheck.vue';
import { useAuthStore } from '@/stores/authStore';

export default {
    components: {
        LoginForm, StatusCheck
    },
    setup() {
        const authStore = useAuthStore();

        return { authStore };
},
}

</script>
<style>

.sidebar-container{
    min-width: 250px;
    border-right: 5px;
    height: 300px;
    border: 5px;
    background-color: #b597bd;
    padding: 20px;
}
</style>