import { createApp } from 'vue'
import store from './store/index';
import './style.scss'
import App from './App.vue'

createApp(App).use(store).mount('#app')
