import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 后面引入element-plus
import element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//引入删除按钮组件
import DeleteBubble from "./components/DeleteBubble";



const app = createApp(App)
//注册组件
app.use(element)
app.component('DeleteBubble', DeleteBubble)

app.use(store)
app.use(router)
app.mount('#app')