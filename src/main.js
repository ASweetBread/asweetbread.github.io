import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import './mock/index'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).use(createPinia()).mount('#app')
