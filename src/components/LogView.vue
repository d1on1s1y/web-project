<template>
    <p>Перегляд дій користувачів</p>    
    <select v-model="selected">
        <option  v-bind:value="user.login" v-for="user in userStore.users" :key="user" > {{ user.login }}</option>
    </select>

    <ul>
        <li v-for="log in logStore.getLogsByContributorName(selected)" :key="log" >{{log.time }} {{log.contributorName}} {{log.description}}</li>
    </ul>
    
</template>

<script>
import { useLogStore } from '@/stores/logStore';
import { useUserStore } from '@/stores/userStore';

export default {
    setup() {
        const logStore = useLogStore()
        const userStore = useUserStore()

        return {logStore, userStore}
    },
    data() {
    return {
      selected: '' 
    };
  }

}

</script>

<style>
ul{
    list-style: none;
}
</style>