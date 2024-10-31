import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobDetails from '../components/JobDetails.vue'
import MenuView from "@/views/MenuView.vue";
import RecipeView from "@/views/RecipeView.vue";
import AboutView from "@/views/AboutView.vue";
import Error from "@/views/Error.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    //---- keeping this for my example purposes
    {
      path:'/jobs/:id',
      name:'JobDetails',
      component:JobDetails
    },
    // ---------------------
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: RecipeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path:'/:catchAll(.*)',
      name:'error',
      component: Error
    }
  ]
})

export default router
