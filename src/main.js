import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 后面引入
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(ElementUI)
app.use(store)
app.use(router)
app.mount('#app')