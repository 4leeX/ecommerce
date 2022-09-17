import { createApp } from 'vue'
import store from './store';
import './style.scss'
import App from './App.vue'

console.log(store);

createApp(App).use(store).mount('#app')
