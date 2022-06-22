import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
