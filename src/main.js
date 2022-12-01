import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import beforeEach from './router/beforeEnterRouter'
import './mock/index'



import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
beforeEach(router)
app.use(router)
app.mount('#app')
