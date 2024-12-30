import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios'

const pinia = createPinia()
const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:3000';

app.use(pinia)
app.mount('#app')
