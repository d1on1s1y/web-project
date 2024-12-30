<template>
  <SidebarComponent/>
  <div>
    <DataTable :dataArray="drugStore.drugs" v-if="authStore.isAuthorized" />
    <DataTable :dataArray="userStore.users" v-if="authStore.isAuthorized && authStore.isAdmin"/>
  </div>
<div>
  <RoleFeatures v-if="authStore.isAuthorized"/>
  <LogView v-if="authStore.isAdmin" />  
</div>
    
</template>

<script>

import { useAuthStore } from './stores/authStore';
import { useUserStore } from './stores/userStore';
import { useDrugStore } from './stores/drugStore';
import RoleFeatures from './components/RoleFeatures.vue';
import DataTable from './components/DataTable.vue';
import SidebarComponent from './components/SidebarComponent.vue'
import LogView from './components/LogView.vue';

export default {
  name: 'App',
  components: {
    SidebarComponent,
    DataTable,
    RoleFeatures,
    LogView
  },
  setup() {
    const drugStore = useDrugStore();
    const userStore = useUserStore();
    const authStore = useAuthStore();

    drugStore.fetchDrugs()
    userStore.fetchUsers()

    return { drugStore, userStore, authStore };
  }
}
</script>

<style>
:root {
    --main: #d6d6d6;
    --secondary: #6a5770;
    --accent: #4c375c;
    --text-color: #202020;
}
body{
  margin: 0;
}
#app {
  display:flex;
margin: 0;
padding: 0;
}
</style>
