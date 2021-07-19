import { createRouter, createWebHistory } from 'vue-router'
import WelcomeMsg from '@/components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: WelcomeMsg
  },
  {
    path: '/pages',
    name: 'Pages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/pages/Pages.vue')
  },
  {
    path: '/edit-page',
    name: 'EditPage',
    component: () => import('@/components/pages/EditPage.vue'),
    props(route) {
      return {  id: route.query.id }
    }
  },
  {
    path: '/add-page',
    name: 'AddPage',
    component: () => import('@/components/pages/AddPage.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/components/users/Users.vue')
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: () => import('@/components/users/AddUser.vue')
  },
  {
    path: '/edit-user',
    name: 'EditUser',
    component: () => import('@/components/users/EditUser.vue'),
    props(route) {
      return {  id: route.query.id }
    }
  },
  {
    path: '/user-profiles',
    name: 'UserProfiles',
    component: () => import('@/components/users/UserProfiles.vue')
  },
  {
    path: '/add-user-profile',
    name: 'AddUserProfile',
    component: () => import('@/components/users/AddUserProfile.vue')
  },
  {
    path: '/edit-user-profile',
    name: 'EditUserProfile',
    component: () => import('@/components/users/EditUserProfile.vue'),
    props(route) {
      return {  id: route.query.id }
    }
  },
  {
    path: '/options',
    name: 'Options',
    component: () => import('@/components/options/Options.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('@/components/tools/Tools.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
