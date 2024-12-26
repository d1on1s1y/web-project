<template>
  <SidebarComponent/>
</template>

<script>

import SidebarComponent from './components/SidebarComponent.vue'

export default {
  name: 'App',
  components: {
    SidebarComponent,
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
margin: 0;
padding: 0;
}
</style>
