import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import 'bootstrap/dist/css/bootstrap.css'

import './styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Antd)
app.mount('#app')
