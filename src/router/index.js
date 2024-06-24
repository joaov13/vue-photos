import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'albuns',
      component: () => import('../views/Albuns.vue')
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',

      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/user/:id',
      name: 'userDetails',
      component: () => import('../views/UserDetails.vue'),
      props: true
    },
    {
      path: '/post/:id',
      name: 'postDetails',
      component: () => import('../views/PostDetails.vue'),
      props: true
    }
  ]
})

export default router
