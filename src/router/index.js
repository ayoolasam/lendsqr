import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/Pages/Login.vue'
import DashBoard from '@/Pages/DashBoard.vue'
import UserDetails from '@/Pages/UserDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     
      name: 'Login',
      path: '/Login',
      component: Login,
      meta:{defaultLayout:false}
    },
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard,
      meta:{defaultLayout:true}
    },
    {
      path: '/UserDetails',
      name: 'UserDetails',
      component: UserDetails,
      meta:{defaultLayout:true}
    },

   
  ]
})

export default router
