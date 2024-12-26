<template>
    <div class="sidebar-container">
        <LoginForm/>
    </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
export default {
    components: {
        LoginForm
    }
}

</script>
<style>

.sidebar-container{
    max-width: 300px;
    border-right: 5px;
    height: 500px;
    border: 5px;
    background-color: #b597bd;
    padding: 20px;
}
</style>