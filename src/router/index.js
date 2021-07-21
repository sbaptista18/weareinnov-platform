import { createRouter, createWebHistory } from 'vue-router'
import WelcomeMsg from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: WelcomeMsg
  },
  {
    path: '/pages',
    name: 'Pages',
    component: () => import(/* webpackChunkName: "Pages" */ '@/views/pages/Pages.vue')
  },
  {
    path: '/edit-page/:id',
    name: 'EditPage',
    component: () => import(/* webpackChunkName: "EditPage" */ '@/views/pages/EditPage.vue')
  },
  {
    path: '/add-page',
    name: 'AddPage',
    component: () => import(/* webpackChunkName: "AddPage" */ '@/views/pages/AddPage.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "Users" */ '@/views/users/Users.vue')
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: () => import(/* webpackChunkName: "AddUser" */ '@/views/users/AddUser.vue')
  },
  {
    path: '/edit-user/:id',
    name: 'EditUser',
    component: () => import(/* webpackChunkName: "EditUser" */ '@/views/users/EditUser.vue')
  },
  {
    path: '/user-profiles',
    name: 'UserProfiles',
    component: () => import(/* webpackChunkName: "UserProfiles" */ '@/views/users/UserProfiles.vue')
  },
  {
    path: '/add-user-profile',
    name: 'AddUserProfile',
    component: () => import(/* webpackChunkName: "AddUserProfile" */ '@/views/users/AddUserProfile.vue')
  },
  {
    path: '/edit-user-profile/:id',
    name: 'EditUserProfile',
    component: () => import(/* webpackChunkName: "EditUserProfile" */ '@/views/users/EditUserProfile.vue'),
  },
  {
    path: '/options',
    name: 'Options',
    component: () => import(/* webpackChunkName: "Options" */ '@/views/options/Options.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import(/* webpackChunkName: "Tools" */ '@/views/tools/Tools.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
