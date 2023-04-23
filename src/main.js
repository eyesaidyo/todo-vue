import { createApp} from 'vue'
import { createVuestic, createIconsConfig} from 'vuestic-ui'
import 'vuestic-ui/css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'
import App from './App.vue'
import Page2 from "./Page2.vue"
import Deeper from "./Next.vue"

import Home from './Home.vue'
import './assets/main.css'
import {createPinia} from 'pinia'
import {createRouter, createWebHistory} from 'vue-router'
const pinia= createPinia()
  export const router=createRouter({
    history:createWebHistory(),
    routes:[
      {
      name:'Home',
      path: '/',
      component : Home
    },
   {
       path: '/about' ,
        name: 'About',
     component: Page2,
     children:[
       {
         path:'/about/next',
         name:'Next',
         component:Deeper
       }
     ]
    }
           ]
  })
createApp(App).use(router).use(createVuestic()).use(pinia).mount('#app')
